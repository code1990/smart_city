import * as Cesium from "cesium";
import { floatObj } from '@/cesium/scene/floatObj';
import weatherEffects from '@/cesium/scene/weatherEffects.js';
//淹没分析
//targetHeight 目标高度   adapCoordi 范围坐标[109.2039, 35.6042, 109.2774 ,35.6025,109.2766,35.5738]   waterHeight  当前水高度 speed速度 color颜色
//changetype up/down 上升/下降  speedCallback 变化回调
export default class  SubmergenceAnalysis {
    constructor(option) {
        //viewer, targetHeight, startHeight, waterHeight, adapCoordi, speed, color, changetype,callback
        this.viewer = option.viewer;
        this.targetHeight = option.targetHeight ? option.targetHeight : 10;
        this.startHeight = option.startHeight ? option.startHeight : 0;
        this.waterHeight = option.waterHeight ? option.waterHeight : this.startHeight;
        this.adapCoordi = option.adapCoordi ? option.adapCoordi : [0, 0, 0, 0, 0, 0];
        this.speed = option.speed ? option.speed : 1;
        this.color = option.color ? option.color : new Cesium.Color.fromBytes(64, 157, 253, 100);
        this.changetype = option.changetype ? option.changetype : 'up';
        this.speedCallback = option.speedCallback ? option.speedCallback : function (h) {}
        this.endCallback = option.endCallback ? option.endCallback : function () {}
        this.polygonEntity = null;
        this.timer = null;
        this.lightningStage = null;
        this.weather = null;
        if (this.viewer) {
            this.createEntity();
            this.updatePoly(this.adapCoordi);
        }
    }
    //创建淹没实体
    createEntity() {
        if (this.polygonEntity && this.polygonEntity.length > 0) {
            for (let entity of this.polygonEntity) {
                this.viewer.entities.remove(entity)
            }
        }
        this.polygonEntity = [];
        let nEntity = this.viewer.entities.add({
            polygon: {
                hierarchy: {},
                material: this.color,
                // perPositionHeight: true
            }
        })
        nEntity.polygon.extrudedHeight = new Cesium.CallbackProperty(() => this.waterHeight, false)
        this.polygonEntity.push(nEntity);
    }
    //更新polygon
    updatePoly(adapCoordi) {
        this.adapCoordi = this.coordsTransformation(adapCoordi);
        if (this.polygonEntity && this.polygonEntity.length > 0) {
            this.polygonEntity[0].polygon.hierarchy = new Cesium.PolygonHierarchy(
                this.adapCoordi // Cesium.Cartesian3.fromDegreesArray(this.adapCoordi)
            );
        }
    }
    //坐标转换
    coordsTransformation(coords) {
        var c = [];
        if (typeof coords[0] == "number" && typeof coords[1] == "number") {
            if (coords[0] < 180 && coords[0] > -180 && coords[1] < 90 && coords[1] > -90) {
                c = Cesium.Cartesian3.fromDegreesArray(this.adapCoordi)
            } else {
                c = Cesium.Cartesian3.fromArray(this.adapCoordi)
            }
        } else {
            for (var i = 0; i < coords.length; i++) {
                var point = coords[i];
                var p = null;
                if (point.lng) {
                    p = Cesium.Cartesian3.fromDegrees(point.lng, point.lat);
                } else if (point.x) {
                    if (point.x < 180 && point.x > -180 && point.y < 90 && point.y > -90) {
                        p = Cesium.Cartesian3.fromDegrees(point.lng, point.lat);
                    } else {
                        p = point;
                    }
                }
                c.push(p);
            }
        }
        return c;
    }

    //开始
    start() {
        // 恢复 polygonEntity 或初始化为 []
        if (!this.polygonEntity || !Array.isArray(this.polygonEntity)) {
            this.polygonEntity = [];
        }

        // 还原 waterHeight
        this.waterHeight = 0;
        // 创建 polygon 实体并设置高度
        this.createEntity();
        this.updatePoly(this.adapCoordi);

        // 可选：根据需要重新添加 polygon 实体
        // this.polygonEntity.push(viewer.entities.add(...))
        // 深度监测
        this.viewer.scene.globe.depthTestAgainstTerrain = true;
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(98.71707797694049, 27.597299704639537, 10000.0),
            orientation: {
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-60),
                roll: 0
            }
        });

        this.timer = window.setInterval(() => {
            var sp = this.speed / 50;
            if (this.changetype == "up") {
                this.waterHeight = floatObj.add(this.waterHeight, sp);
                if (this.waterHeight > this.targetHeight) {
                    this.waterHeight = this.targetHeight; //给个最大值
                    window.clearInterval(this.timer);
                    this.endCallback();
                }
            } else {
                this.waterHeight -= sp;
                if (this.waterHeight < this.targetHeight) {
                    this.waterHeight = this.targetHeight; //给个最大值
                    window.clearInterval(this.timer);
                    this.endCallback();
                }
            }
            this.speedCallback(this.waterHeight);
        }, 20)

        // 雨
        this.weather = new weatherEffects(this.viewer, {
            name: 'a',
            type: 'rain'
        });


        // 闪电
        let Lightning = `
            float hash(float x)
            {
            return fract(21654.6512 * sin(385.51 * x));
            }
            float hash(vec2 p)
            {
            return fract(1654.65157 * sin(15.5134763 * p.x + 45.5173247 * p.y + 5.21789));
            }
            vec2 hash2(vec2 p)
            {
            return vec2(hash(p * .754), hash(1.5743 * p + 4.5476351));
            }
            vec2 add = vec2(1.0, 0.0);
            vec2 noise2(vec2 x)
            {
            vec2 p = floor(x);
            vec2 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            vec2 res = mix(mix(hash2(p),
            hash2(p + add.xy), f.x),
            mix(hash2(p + add.yx), hash2(p + add.xx), f.x), f.y);
            return res;
            }
            vec2 fbm2(vec2 x)
            {
            vec2 r = vec2(0.0);
            float a = 1.0;
            for (int i = 0; i < 8; i++)
            {
            r += noise2(x) * a;
            x *= 2.;
            a *= .5;
            }
            return r;
            }
            float dseg(vec2 ba, vec2 pa)
            {
            float h = clamp(dot(pa, ba) / dot(ba, ba), -0.2, 1.);
            return length(pa - ba * h);
            }
            uniform sampler2D colorTexture; 
            uniform float fall_interval; 
            uniform float mix_factor; 
            varying vec2 v_textureCoordinates; 
            void main(void){
            vec2 uv = gl_FragCoord.xy; 
            float iTime = czm_frameNumber * fall_interval * clamp(fall_interval * 0.1, 0.01, 0.1); 
            vec2 p = uv / czm_viewport.zw; 
            vec2 d; 
            vec2 tgt = vec2(1., -1.); 
            float c = 0.; 
            if (p.y >= 0.) 
            c = (1. - (fbm2((p + .2) * p.y + .1 * iTime)).x) * p.y; 
            else                                
            c = (1. - (fbm2(p + .2 + .1 * iTime)).x) * p.y * p.y; 
            vec3 col = vec3(0.); 
            vec3 col1 = c * vec3(.3, .5, 1.); 
            float mdist = 100000.; 
            float t = hash(floor(5. * iTime)); 
            tgt += 4. * hash2(tgt + t) - 1.5; 
            if (hash(t + 2.3) > .6) 
            for (int i = 0; i < 100; i++) {
            vec2 dtgt = tgt - p; 
            d = .05 * (vec2(-.5, -1.) + hash2(vec2(float(i), t))); 
            float dist = dseg(d, dtgt); 
            mdist = min(mdist, dist); 
            tgt -= d; 
            c = exp(-1.2 * dist) + exp(-55. * mdist); 
            col = c * vec3(.7, .8, 1.); 
            } 
            col += col1; 
            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(col, 0.0), mix_factor); 
            } 
            `


        Cesium.PostProcessStageLibrary.createLightningStage = function (val) {
            return new Cesium.PostProcessStage({
                name: 'czm_lightning',
                fragmentShader: Lightning,
                uniforms: {
                    mix_factor: val.mix_factor,//混合系数0-1之间的数
                    fall_interval: 0.8,//0-1之间的数
                }
            });
        }

        var collection = this.viewer.scene.postProcessStages;
        this.lightningStage = Cesium.PostProcessStageLibrary.createLightningStage({
            mix_factor: 0.35,//混合系数
        });
        collection.add(this.lightningStage);
    }
    //关闭
    clear() {
        let viewer = this.viewer
        if (this.timer) {
            window.clearInterval(this.timer)
            this.timer = null
        }
        this.waterHeight = this.startHeight;
        if (Array.isArray(this.polygonEntity)) {
            for (let entity of this.polygonEntity) {
                viewer.entities.remove(entity)
            }
        }
        // console.error(this.viewer.scene.postProcessStages)
        this.polygonEntity = null;
        // 移除后处理闪电效果
        if (this.lightningStage) {
            viewer.scene.postProcessStages.remove(this.lightningStage);
            this.lightningStage = null;
        }
        if (this.weather){
            if (this.weather) {
                this.weather.removePostProcessStage(); // 调用类中定义的清理方法
                this.weather = null;
            }
        }
    }
}
