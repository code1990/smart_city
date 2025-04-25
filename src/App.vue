<template>
  <div>
<!--    <div id="cesiumContainer" ref="cesiumContainer">-->

<!--    </div>-->
    <router-view />
  </div>

</template>

<script setup>
// // yarn add cesium
// // 将cesium目录下的Build/Cesium4个目录拷贝到public，然后将widgets目录拷贝一份到src下
// import * as Cesium from "cesium";
// import "./Widgets/widgets.css";
// import { onMounted } from "vue";
// import gsap from "gsap";
// import initViewer from "@/cesium/initViewer";
// import MousePosition from "@/cesium/MousePosition";
// import CesiumNavigaion from "cesium-navigation-es6";
// import modifyMap from "@/cesium/modifyMap";
// import modifyBuild from "@/cesium/modifyBuild";
// import LightCone from "@/cesium/LightCone";
// import RectFlyLight from "@/cesium/RectFlyLight";
// import RoadLightLine from "@/cesium/RoadLightLine";
// import RadarLight from "@/cesium/RadarLight";
// import LightSpread from "@/cesium/LightSpread";
// import LightWall from "@/cesium/LightWall";
// import ParticleLight from "@/cesium/ParticleLight";
//
// onMounted(() => {
//   let viewer = initViewer();
//   // 根据鼠标位置生成经纬度值
//   let mousePosition = new MousePosition(viewer);
//   // 设置导航罗盘的配置
//   var options = {
//     // 启用罗盘
//     enableCompass: true,
//     // 是否启用缩放
//     enableZoomControls: false,
//     // 是否启用指南针外环
//     enableCompassOuterRing: true,
//     // 是否启用距离的图例
//     // enableDistanceLegend: false,
//   };
//   // 初始化导航罗盘
//   let navigation = new CesiumNavigaion(viewer, options);
//   // 修改地图的底色
//   //modifyMap(viewer);
//   // 修改建筑的颜色
//   modifyBuild(viewer);
//   // 添加动态的光锥特效
//   let lightCone = new LightCone(viewer);
//   // 创建区域上升流光飞线
//   let rectFlyLight = new RectFlyLight(viewer);
//   // 创建道路飞线
//   let roadLightLine = new RoadLightLine(viewer);
//   // 创建雷达
//   let radarLight = new RadarLight(viewer);
//   // 6边形光波扩散特效
//   //let lightSpread = new LightSpread(viewer);
//   // 创建光墙
//   let lightWall = new LightWall(viewer);
//   // // particleLight,创建烟花粒子
//   // let particleLight = new ParticleLight(viewer, Cesium.Color.RED);
//   // let particleLight1 = new ParticleLight(viewer, Cesium.Color.AQUA);
//   // let particleLight2 = new ParticleLight(viewer, Cesium.Color.GREEN);
// });
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

</style>
