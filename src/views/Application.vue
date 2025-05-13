<template>
  <div class="dataBox">
    <div class="dataBox2">
      <div class="searchBox" style="width: 99%;height: 40px;padding: 10px 10px;">
        <div style="width: 60px;font-weight: bold;font-size: 16px;float: left;padding: 10px 10px;">应用</div>
        <div style="float: right;">
          <el-input
              v-model="input4"
              style="width: 240px"
              placeholder="按名称搜索"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
        </div>
        <div style="float: right;margin-right: 20px;">
          <el-select
              v-model="value"
              placeholder="Select"
              style="width: 160px"
          >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>

      </div>
      <div class="dataInfo">
        <el-row>
          <el-col :span="6" style="padding: 10px 10px;">
<!--            <el-card-->
<!--                class="clickable-card"-->
<!--                shadow="hover"-->
<!--                style="height: 160px; background-color: #EFF0F1;"-->
<!--                :body-style="{-->
<!--                    display: 'flex',-->
<!--                    justifyContent: 'center',-->
<!--                    alignItems: 'center',-->
<!--                    flexDirection: 'row',-->
<!--                    height: '100%',-->
<!--                    padding: 0-->
<!--                  }"-->
<!--                @click="goToCreateKnowledge"-->
<!--            >-->
<!--&lt;!&ndash;              <el-button :icon="Plus"  style="width: 12px;" class="custom-button" ></el-button>&nbsp;&nbsp;&ndash;&gt;-->
<!--&lt;!&ndash;              <span>创建知识库</span>&ndash;&gt;-->

<!--            </el-card>-->
            <el-card class="app-card" shadow="hover" >
              <div class="card-section top" style="margin-bottom: 10px;">
                <el-icon><DocumentAdd/></el-icon>&nbsp;&nbsp;
                <span>创建应用</span>
              </div>

              <div class="divider"></div>

              <div class="card-section bottom" style="margin-top: 10px;">
                <el-icon><DocumentChecked/></el-icon>&nbsp;&nbsp;
                <span>导入应用</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6" style="padding: 10px 10px;">
            <el-card shadow="never" style="height: 160px;">
              <div slot="header">
                <div>
                  <div style="width: 20px; height: 20px;background-color: #D136D1;border-radius: 5px;padding: 5px 5px;float: left;text-align: center;line-height: 20px;color: white;" >
                    恒
                  </div>
                  <div style="width: 100px;float: left;margin-top: -6px;margin-left: 10px;">
                    <div style="width: 100%;font-size: 14px;">恒通智联助手</div>
                    <div style="width: 100%;font-size: 12px;">创建者: admin</div>
                  </div>
                  <el-button style="float: right;padding: 3px 10px;" size="small" type="primary" plain>简单配置</el-button>
                </div>
              </div>
              <div class="ellipsis-text">
                该应用主要介绍恒通智联科技在智慧水务的相关建设文档，物联网等解决方案，对管线、水质、水质监测、水资源调度等环节进行数字化、网络化、智能化管理。
              </div>
              <div class="stat-container">
                <div style="padding: 5px 5px;">
                  <el-tooltip content="演示" placement="top">
                    <el-button :icon="VideoPlay" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </el-tooltip>
                </div>
                <div class="vertical-divider" style="width: 0.1%;" ></div>
                <div style="padding: 5px 5px;">
                  <el-tooltip content="设置" placement="top">
                    <el-button :icon="Tools" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </el-tooltip>
                </div>
                <div class="vertical-divider" style="width: 0.1%;" ></div>
                <el-dropdown trigger="click" style="padding: 5px 5px;">
                  <span class="el-dropdown-link">
                    <el-button :icon="MoreFilled" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>复制</el-dropdown-item>
                      <el-dropdown-item>导出</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6" style="padding: 10px 10px;">
            <el-card shadow="never" style="height: 160px;">
              <div slot="header">
                <div>
                  <div style="width: 20px; height: 20px;background-color: #F54A45;border-radius: 5px;padding: 5px 5px;float: left;text-align: center;line-height: 20px;color: white;" >
                    华
                  </div>
                  <div style="width: 100px;float: left;margin-top: -6px;margin-left: 10px;">
                    <div style="width: 100%;font-size: 14px;">华工水质助手</div>
                    <div style="width: 100%;font-size: 12px;">创建者: admin</div>
                  </div>
                  <el-button style="float: right;padding: 3px 10px;" size="small" type="primary" plain>简单配置</el-button>
                </div>
              </div>
              <div class="ellipsis-text">
                该应用主要介绍华南理工大学城市内容与生态监测系统相关的水质、水质监测、水资源调度、水环境管理、水环境治理、水环境评价、水环境规划、水环境监测、水环境规划、水环境评价、水环境治理、水环境评价、水环境规划、水环境监测、水环境规划、水环境评价、水环境治理、水环境评价、水环境规划、水环境监测、水环境规划、水环境评价、水环境治理、水环境评价、水。
              </div>
              <div class="stat-container">
                <div style="padding: 5px 5px;">
                  <el-tooltip content="演示" placement="top">
                    <el-button :icon="VideoPlay" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </el-tooltip>
                </div>
                <div class="vertical-divider" style="width: 0.1%;" ></div>
                <div style="padding: 5px 5px;">
                  <el-tooltip content="设置" placement="top">
                    <el-button :icon="Tools" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </el-tooltip>
                </div>
                <div class="vertical-divider" style="width: 0.1%;" ></div>
                <el-dropdown trigger="click" style="padding: 5px 5px;">
                  <span class="el-dropdown-link">
                    <el-button :icon="MoreFilled" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>复制</el-dropdown-item>
                      <el-dropdown-item>导出</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6" style="padding: 10px 10px;">
            <el-card shadow="never" style="height: 160px;">
              <div slot="header">
                <div>
                  <div style="width: 20px; height: 20px;background-color: #F01D94;border-radius: 5px;padding: 5px 5px;float: left;text-align: center;line-height: 20px;color: white;" >
                    公
                  </div>
                  <div style="width: 100px;float: left;margin-top: -6px;margin-left: 10px;">
                    <div style="width: 100%;font-size: 14px;">公路公司助手</div>
                    <div style="width: 100%;font-size: 12px;">创建者: admin</div>
                  </div>
                  <el-button style="float: right;padding: 3px 10px;" size="small" type="primary" plain>简单配置</el-button>
                </div>
              </div>
              <div class="ellipsis-text">
                该应用主要介绍广东省公路实业公司城市内涝监测系统系统相关的水质、水质监测、水资源调度、水环境管理、水环境治理、水环境评价、水环境规划、水环境监测、水环境规划、水环境评价、水环境治理、水环境评价、水环境规划、水环境监测、水环境规划、水环境评价、水环境治理、水环境评价、水环境规划、水环境监测、水环境规划、水环境评价、水环境治理、水环境评价、水。
              </div>
              <div class="stat-container">
                <div style="padding: 5px 5px;">
                  <el-tooltip content="演示" placement="top">
                    <el-button :icon="VideoPlay" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </el-tooltip>
                </div>
                <div class="vertical-divider" style="width: 0.1%;" ></div>
                <div style="padding: 5px 5px;">
                  <el-tooltip content="设置" placement="top">
                    <el-button :icon="Tools" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </el-tooltip>
                </div>
                <div class="vertical-divider" style="width: 0.1%;" ></div>
                <el-dropdown trigger="click" style="padding: 5px 5px;">
                  <span class="el-dropdown-link">
                    <el-button :icon="MoreFilled" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>复制</el-dropdown-item>
                      <el-dropdown-item>导出</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {Search, Plus, VideoPlay,Tools,MoreFilled,DocumentAdd, DocumentChecked} from '@element-plus/icons-vue'
const input4 = ref('')
const value = ref('1')
import url from '@/assets/icon_document.svg'

const options = [
  {
    value: '1',
    label: '全部',
  },
  {
    value: '0',
    label: '我的',
  },
]
</script>

<style scoped>
.dataBox{
  width: 100%;
  height: 100vh;
  background-color: #F5F6F7;
  border-radius: 20px;
}
.dataBox2{
  padding: 20px 20px;
  width: calc(100% - 40px);
  height: calc(100vh - 40px);
}
.clickable-card {
  cursor: pointer;
  transition: transform 0.1s ease;
}
.clickable-card:hover {
  background-color: #fff !important;
  transition: border 0.3s ease;
  border: 1px dashed #409EFF;
  color: #409EFF;
}
.clickable-card:active {
  transform: scale(0.98);
}
.ellipsis-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;           /* 👈 限制最多显示2行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 3em;                 /* 2行时可选设置，防止撑开容器 */
  line-height: 1.5em;
  width: 100%;
  padding-top: 10px;
}

.stat-container {
  display: flex;
  align-items: center;
  height: 60px;
}


.vertical-divider {
  width: 1px;
  height: 24px;
  background-color: #dcdfe6;
}
.gray-hover-button:hover {
  background-color: #DEE0E3 !important; /* 浅灰色，可调整 */
  color: #000 !important;               /* 根据需要调整文字颜色 */
  border-color: #DEE0E3 !important;
}

.app-card {
  width: 100%;
  padding: 0;
  background-color: #EFF0F1;
  height: 160px;
}
.app-card:hover {
  background-color: white;
}
.card-section {
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
}

.card-section:hover {
  background-color: #f0f0f0;
}
.card-button:hover {
  background-color: #EFF0F1;
}
.divider {
  height: 1px;
  background-color: #ddd;
  margin: 0;
}
</style>
