<template>
  <div id="cesiumContainer" ref="cesiumContainer">
    <div  class="bottomBox4">
      <el-form :model="form" label-width="auto" style="max-width: 100%;padding: 20px 20px;">
        <el-form-item label="起始高度">
          <el-input v-model="form.ks" />
        </el-form-item>
        <el-form-item label="目标高度">
          <el-input v-model="form.mb" />
        </el-form-item>
        <el-form-item label="速度(米/秒)">
          <el-input v-model="form.speed" />
        </el-form-item>
        <el-form-item label="当前高度">
          <el-input v-model="form.dq" disabled />
        </el-form-item>
        <el-form-item style="margin-left: 22%;">
          <el-button type="primary" @click="startModel(1)">开始淹没</el-button>
          <el-button @click="startModel(0)">清除</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
// yarn add cesium
// 将cesium目录下的Build/Cesium4个目录拷贝到public，然后将widgets目录拷贝一份到src下
import * as Cesium from "cesium";
import "../../Widgets/widgets.css";
import {ref, onMounted} from "vue";
import gsap from "gsap";
import initViewer from "@/cesium/initViewer";
import MousePosition from "@/cesium/MousePosition";
import CesiumNavigaion from "cesium-navigation-es6";
// import modifyMap from "@/cesium/modifyMap";
import modifyBuild from "@/cesium/modifyBuild";
import LightCone from "@/cesium/LightCone";
import RectFlyLight from "@/cesium/RectFlyLight";
import RoadLightLine from "@/cesium/RoadLightLine";
import RadarLight from "@/cesium/RadarLight";
// import LightSpread from "@/cesium/LightSpread";
import LightWall from "@/cesium/LightWall";
// import ParticleLight from "@/cesium/ParticleLight";
// import MapBottom from "@/views/map/MapBottom.vue";
// import MapLeft from "@/views/map/MapLeft.vue";
import SubmergenceAnalysis from "@/cesium/scene/SubmergenceAnalysis";

const flag4 = ref(false)
let abc = ref(null);
function startModel(flag) {
  if (abc.value) {
    if (flag === 1) {
      abc.value.start();
    }  else {
      form.value.ks = 1500
      form.value.mb = 2500
      form.value.speed = 200
      form.value.dq = 0
      abc.value.clear();
    }
  }
}

const form = ref({
  ks: 1500,
  mb: 2500,
  speed: 200,
  dq: 0
})

function onSubmit() {
  console.log('开始淹没参数：', form.value)
  // 使用 form.value.ks 等替代 document.getElementById("ks").value
}

function onClear() {
  // 清空或重置参数
  form.value.dq = 0
}

onMounted(() => {
  let viewer = initViewer();
  // 等待 viewer 初始化完成再执行后续逻辑
  // 根据鼠标位置生成经纬度值
  let mousePosition = new MousePosition(viewer);
  // 设置导航罗盘的配置
  var options = {
    // 启用罗盘
    enableCompass: true,
    // 是否启用缩放
    enableZoomControls: false,
    // 是否启用指南针外环
    enableCompassOuterRing: true,
    // 是否启用距离的图例
    // enableDistanceLegend: false,
  };
  // 初始化导航罗盘
  let navigation = new CesiumNavigaion(viewer, options);
  // 修改地图的底色
  //modifyMap(viewer);
  // 修改建筑的颜色
  modifyBuild(viewer);
  // 添加动态的光锥特效
  let lightCone = new LightCone(viewer);
  // 创建区域上升流光飞线
  let rectFlyLight = new RectFlyLight(viewer);
  // 创建道路飞线
  let roadLightLine = new RoadLightLine(viewer);
  // 创建雷达
  let radarLight = new RadarLight(viewer);
  // 6边形光波扩散特效
  //let lightSpread = new LightSpread(viewer);
  // 创建光墙
  let lightWall = new LightWall(viewer);


  // 开启帧率
  viewer.scene.debugShowFramesPerSecond = true;
  // 加载默认地形
  viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask: true, // 请求水掩膜以实现水体效果
    requestVertexNormals: true // 请求法线以实现光照效果
  });


  abc.value = new SubmergenceAnalysis({
    viewer: viewer,
    targetHeight: parseFloat(form.value.mb),
    startHeight: parseFloat(form.value.ks),
    adapCoordi: [
      98.676842346815, 27.571578111198868,
      98.86252156624968, 27.77444519911974,
      98.76756234288729, 27.800244194152533,
      98.57088699052892, 27.72492584876768,
      98.676842346815, 27.571578111198868,
    ],
    speed: Number(form.value.speed),
    changetype: "up",
    speedCallback: function (h) {
      form.value.dq = h;
    }
  });



  // let waterFlood; // 先声明
  //
  // function initFlood(viewer) {
  //   waterFlood = waterFlood(viewer);
  // }
  //
  // // 然后在 viewer 初始化完成后再调用
  // initFlood(viewer);


  // waterFlood(viewer);
  // // particleLight,创建烟花粒子
  // let particleLight = new ParticleLight(viewer, Cesium.Color.RED);
  // let particleLight1 = new ParticleLight(viewer, Cesium.Color.AQUA);
  // let particleLight2 = new ParticleLight(viewer, Cesium.Color.GREEN);

});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#cesiumContainer {
  width: 100vw;
  height: 100vh;
}

.bottomBox4{
  position: absolute;
  z-index: 99;
  width: 320px;
  top: 10px;
  background-color: white;
  margin-left: 10px;
  padding: 10px 10px;
  border-radius: 5px;
}
</style>
