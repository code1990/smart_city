import * as Cesium from "cesium";

export default function initViewer() {
  // 设置cesium token
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMzNkNTE5Zi1mMjY4LTRiN2QtOTRlZC1lOTUyM2NhNDYzNWYiLCJpZCI6NTU0OTYsImlhdCI6MTYyNTAyNjMyOX0.a2PEM4hQGpeuMfeB9-rPp6_Gkm6O-02Dm4apNbv_Dlk";

  // 设置cesium静态资源路径
  window.CESIUM_BASE_URL = "/";

  // 设置cesium默认视角
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
    // 西边的经度
    89.5,
    // 南边维度
    20.4,
    // 东边经度
    110.4,
    // 北边维度
    61.2
  );

  var viewer = new Cesium.Viewer("cesiumContainer", {
    // 是否显示信息窗口
    // infoBox: false,
    // 是否显示查询按钮
    geocoder: false,
    // 不显示home按钮
    homeButton: false,
    // 控制查看器的显示模式
    sceneModePicker: false,
    // 是否显示图层选择
    baseLayerPicker: false,
    // 是否显示帮助按钮
    navigationHelpButton: false,
    // 是否播放动画
    animation: false,
    // 是否显示时间轴
    timeline: false,
    // 是否显示全屏按钮
    fullscreenButton: false,
    shouldAnimate: true,
  });

  // 设置沙箱允许使用js
  var iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
  iframe.setAttribute(
    "sandbox",
    "allow-same-origin allow-scripts allow-popups allow-forms"
  );
  iframe.setAttribute("src", "");

  // 隐藏logo
  viewer.cesiumWidget.creditContainer.style.display = "none";

  viewer.scene.globe.enableLighting = true;
  // 取消天空盒显示
  viewer.scene.skyBox.show = false;
  // 设置背景为黑色
  viewer.scene.backgroundColor = Cesium.Color.BLACK;
  // 设置抗锯齿
  viewer.scene.postProcessStages.fxaa.enabled = true;

  // 广州塔
  var postion = Cesium.Cartesian3.fromDegrees(
    // 经度
    113.3301,
    // 纬度
    23.0991,
    // 高度
    1500
  );
  viewer.camera.flyTo({
    destination: postion,
    orientation: {
      heading: Cesium.Math.toRadians(-45),
      pitch: Cesium.Math.toRadians(-30),
      roll: 0,
    },
    duration: 2,
  });

  return viewer;
}
