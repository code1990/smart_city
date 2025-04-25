export default function modifyMap(viewer) {
  // 获取地图影像图层
  let baseLayer = viewer.imageryLayers.get(0);
  //设置2个变量，用来判断是否进行颜色的翻转和过滤
  baseLayer.invertColor = true;

  baseLayer.filterRGB = [0, 50, 100]; //[255,255,255] = > [0,50,100]
  //   更改底图着色器的代码
  const baseFragmentShader =
    viewer.scene.globe._surfaceShaderSet.baseFragmentShaderSource.sources;
  // console.log(baseFragmentShader);

  // 循环修改着色器
  for (let i = 0; i < baseFragmentShader.length; i++) {
    // console.log(baseFragmentShader[i]);
    const strS = "color = czm_saturation(color, textureSaturation);\n#endif\n";
    let strT = "color = czm_saturation(color, textureSaturation);\n#endif\n";
    if (baseLayer.invertColor) {
      strT += `
        color.r = 1.0 - color.r;
        color.g = 1.0 - color.g;
        color.b = 1.0 - color.b;
      `;
    }
    if (baseLayer.filterRGB) {
      strT += `
        color.r = color.r*${baseLayer.filterRGB[0]}.0/255.0;
        color.g = color.g*${baseLayer.filterRGB[1]}.0/255.0;
        color.b = color.b*${baseLayer.filterRGB[2]}.0/255.0;
      `;
    }

    baseFragmentShader[i] = baseFragmentShader[i].replace(strS, strT);
  }
}
