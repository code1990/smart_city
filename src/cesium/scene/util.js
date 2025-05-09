import * as Cesium from "cesium";
export const util = {
    isNumber(obj) {
        return (typeof obj == 'number') && obj.constructor == Number;
    },

    isString(str) {
        return (typeof str == 'string') && str.constructor == String;
    },
    /**
     * @function Util.extend
     * @description 对象拷贝赋值。
     * @param {Object} dest - 目标对象。
     * @param {Object} arguments - 待拷贝的对象。
     * @returns {Object} 赋值后的目标对象。
     */
    extend(dest) {
        for (var index = 0; index < Object.getOwnPropertyNames(arguments).length; index++) {
            var arg = Object.getOwnPropertyNames(arguments)[index];
            if (arg == "caller" || arg == "callee" || arg == "length" || arg == "arguments") {
                continue;
            }
            var obj = arguments[arg];
            if (obj) {
                for (var j = 0; j < Object.getOwnPropertyNames(obj).length; j++) {
                    var key = Object.getOwnPropertyNames(obj)[j];
                    if (arg == "caller" || arg == "callee" || arg == "length" || arg == "arguments") {
                        continue;
                    }
                    dest[key] = obj[key];
                }
            }
        }
        return dest;
    },

    //url参数获取
    getRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },

    getRequestByName(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    },


    clone(obj) {
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0, len = obj.length; i < len; ++i) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (typeof obj === 'object') {
            var copy = {};
            for (var attr in obj) {
                if (attr == "_layer" || attr == "_layers" || attr == "_parent") continue;

                if (obj.hasOwnProperty(attr))
                    copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }
        return obj;
    },


    isPCBroswer() {
        var sUserAgent = navigator.userAgent.toLowerCase();

        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone/i) == "iphone";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return false;
        } else {
            return true;
        }
    },

    //检测浏览器webgl支持
    webglreport() {
        var exinfo = this.getExplorerInfo();
        if (exinfo.type == "IE" && exinfo.version < 11) {
            return false;
        }

        try {
            var glContext;
            var canvas = document.createElement('canvas');
            var requestWebgl2 = (typeof WebGL2RenderingContext !== 'undefined');
            if (requestWebgl2) {
                glContext = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2') || undefined;
            }
            if (glContext == null) {
                glContext = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || undefined;
            }
            if (glContext == null) {
                return false;
            }
        } catch (e) {
            return false;
        }
        return true;
    },

    //计算贴地路线
    terrainPolyline(params) {
        var viewer = params.viewer;
        var positions = params.positions;
        if (positions == null || positions.length == 0) {
            if (params.calback)
                params.calback(positions);
            return;
        }

        var flatPositions = Cesium.PolylinePipeline.generateArc({
            positions: positions,
            granularity: params.granularity || 0.00001
        });


        var cartographicArray = [];
        var ellipsoid = viewer.scene.globe.ellipsoid;
        for (var i = 0; i < flatPositions.length; i += 3) {
            var cartesian = Cesium.Cartesian3.unpack(flatPositions, i);
            cartographicArray.push(ellipsoid.cartesianToCartographic(cartesian));
        }

        //用于缺少地形数据时，赋值的高度
        var tempHeight = Cesium.Cartographic.fromCartesian(positions[0]).height;

        Cesium.when(Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, cartographicArray), function (samples) {
            var noHeight = false;
            var offset = params.offset || 2; //增高高度，便于可视

            for (var i = 0; i < samples.length; ++i) {
                if (samples[i].height == null) {
                    noHeight = true;
                    samples[i].height = tempHeight;
                } else {
                    samples[i].height = offset + (samples[i].height * viewer.scene._terrainExaggeration);
                }
            }

            var raisedPositions = ellipsoid.cartographicArrayToCartesianArray(samples);
            if (params.calback)
                params.calback(raisedPositions, noHeight);
            else if (positions.setValue)
                positions.setValue(raisedPositions);
        });


    },

    getEllipsoidTerrain() {
        //地形构造
        var _ellipsoid = new Cesium.EllipsoidTerrainProvider({
            ellipsoid: Cesium.Ellipsoid.WGS84
        });
        return _ellipsoid;
    },

    getTerrainProvider(cfg) {
        if (!cfg.hasOwnProperty("requestWaterMask")) cfg.requestWaterMask = true;
        if (!cfg.hasOwnProperty("requestVertexNormals")) cfg.requestVertexNormals = true;

        var terrainProvider;

        if (cfg.url == "" || cfg.url == null || cfg.url == "cesium") {
            terrainProvider = new Cesium.CesiumTerrainProvider({
                url: Cesium.IonResource.fromAssetId(1)
            })
        } else if (cfg.url == "ellipsoid" || cfg.url == "null") {
            terrainProvider = _ellipsoid;
        } else {
            terrainProvider = new Cesium.CesiumTerrainProvider(cfg);
        }
        return terrainProvider;
    },

    //创建模型
    createModel(cfg, viewer) {
        cfg = viewer.globe.point2map(cfg); //转换坐标系

        var position = Cesium.Cartesian3.fromDegrees(cfg.x, cfg.y, cfg.z || 0);
        var heading = Cesium.Math.toRadians(cfg.heading || 0)
        var pitch = Cesium.Math.toRadians(cfg.pitch || 0)
        var roll = Cesium.Math.toRadians(cfg.roll || 0);
        var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
        var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

        var model = viewer.entities.add({
            name: cfg.name || "",
            position: position,
            orientation: orientation,
            model: cfg,
            tooltip: cfg.tooltip,
            popup: cfg.popup,
        });
        return model;
    },

    formatDegree(value) {
        value = Math.abs(value);
        var v1 = Math.floor(value); //度
        var v2 = Math.floor((value - v1) * 60); //分
        var v3 = Math.round((value - v1) * 3600 % 60); //秒
        return v1 + '° ' + v2 + '\'  ' + v3 + '"';
    },

    getExplorerInfo() {
        var explorer = window.navigator.userAgent.toLowerCase();
        //ie
        if (explorer.indexOf("msie") >= 0) {
            var ver = Number(explorer.match(/msie ([\d]+)/)[1]);
            return {
                type: "IE",
                version: ver
            };
        }
        //firefox
        else if (explorer.indexOf("firefox") >= 0) {
            var ver = Number(explorer.match(/firefox\/([\d]+)/)[1]);
            return {
                type: "Firefox",
                version: ver
            };
        }
        //Chrome
        else if (explorer.indexOf("chrome") >= 0) {
            var ver = Number(explorer.match(/chrome\/([\d]+)/)[1]);
            return {
                type: "Chrome",
                version: ver
            };
        }
        //Opera
        else if (explorer.indexOf("opera") >= 0) {
            var ver = Number(explorer.match(/opera.([\d]+)/)[1]);
            return {
                type: "Opera",
                version: ver
            };
        }
        //Safari
        else if (explorer.indexOf("Safari") >= 0) {
            var ver = Number(explorer.match(/version\/([\d]+)/)[1]);
            return {
                type: "Safari",
                version: ver
            };
        }
        return {
            type: explorer,
            version: -1
        };
    },
    //生成多边形范围内随机点polygon：折点集合
    randomPointsWithinPolygon(polygon, num, type) {
        var xmin = 1000000000,
            xmax = -1000000000,
            ymin = 1000000000,
            ymax = -1000000000;
        //获取面的矩形
        for (var i = 0; i < polygon.length; i++) {
            xmin = Math.min(xmin, polygon[i].x);
            xmax = Math.max(xmax, polygon[i].x);
            ymin = Math.min(ymin, polygon[i].y);
            ymax = Math.max(ymax, polygon[i].y);
        }
        var points = [];
        if (type && type == "geojson") {
            points = {
                "type": "FeatureCollection",
                "features": []
            };
        }
        for (var j = 0; j < num; j++) {
            var point = this.randomPointsWithinBbox(xmin, xmax, ymin, ymax, 1)[0];
            if (!this.isDotInPolygon(point, polygon)) {
                j--;
            } else {
                if (type == "geojson") {
                    var p = {
                        "type": "Feature",
                        "properties": {
                            "value": parseInt(Math.random() * 10000000)
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [point.x, point.y]
                        }
                    }
                    points.features.push(p);

                } else {
                    points.push(point);
                }
            }
            ;
        }
        return points;
    },
    //生成矩形范围类随机点
    randomPointsWithinBbox(xmin, xmax, ymin, ymax, num, type) {
        if (type && type == "geojson") {
            var points = {
                "type": "FeatureCollection",
                "features": []
            };
            for (var i = 0; i < num; i++) {
                var point = {
                    "type": "Feature",
                    "properties": {
                        "value": parseInt(Math.random() * 10000000)
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [(Math.random() * (xmax - xmin) + xmin), (Math.random() * (ymax - ymin) + ymin)]
                    }
                }
                points.features.push(point);
            }
            return points;
        } else {
            var points = [];
            for (var i = 0; i < num; i++) {
                var point = {
                    x: (Math.random() * (xmax - xmin) + xmin),
                    y: (Math.random() * (ymax - ymin) + ymin)
                }
                points.push(point);
            }
            return points;
        }
    },
    //判断点在多边形上（平面）point:{x,y},polygonPoints:[{x,y},{x,y},{x,y}]
    isDotInPolygon(point, polygonPoints, onborder = true) {
        var flag = false,
            p1,
            p2;
        if (!point.x) {
            point.x = point[0];
            point.y = point[1];
        }
        for (var i = 0, j = polygonPoints.length - 1; i < polygonPoints.length; j = i++) {
            p1 = polygonPoints[i];
            p2 = polygonPoints[j];
            p1 = p1.x ? {
                x: p1.x,
                y: p1.y
            } : {
                x: p1[0],
                y: p1[1]
            };
            p2 = p2.x ? {
                x: p2.x,
                y: p2.y
            } : {
                x: p2[0],
                y: p2[1]
            };
            if (onborder) {
                // 这里判断是否刚好被测点在多边形的边上
                if (this.onSegment(p1, p2, point)) return true;
            }
            if ((p1.y > point.y != p2.y > point.y) && (point.x < (point.y - p1.y) * (p1.x - p2.x) / (p1.y - p2.y) +
                p1.x)) {
                flag = !flag;
            }
        }
        return flag;
    },
    //判断点在线段上（平面）Pi:{x,y},Pj{x,y},Q{x,y}
    onSegment(Pi, Pj, Q) {
        if ((Q.x - Pi.x) * (Pj.y - Pi.y) == (Pj.x - Pi.x) * (Q.y - Pi.y) //叉乘
            //保证Q点坐标在pi,pj之间
            &&
            Math.min(Pi.x, Pj.x) <= Q.x && Q.x <= Math.max(Pi.x, Pj.x) &&
            Math.min(Pi.y, Pj.y) <= Q.y && Q.y <= Math.max(Pi.y, Pj.y))
            return true;
        else
            return false;
    },
    //获取json文件
    getJSON(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('get', url, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(xhr.response);
            } else {
                throw new Error(xhr.statusText);
            }
        };
        xhr.send();
    },
};



