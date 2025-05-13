<template>
    <div class="dataBox">
      <div class="dataBox2">
        <div class="searchBox" style="width: 99%;height: 40px;padding: 10px 10px;">
          <div style="width: 60px;font-weight: bold;font-size: 16px;float: left;padding: 10px 10px;">知识库</div>
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
              <el-card
                  class="clickable-card"
                  shadow="hover"
                  style="height: 160px; background-color: #EFF0F1;"
                  :body-style="{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: '100%',
                    padding: 0
                  }"
                  @click="goToCreateKnowledge"
              >
                <el-button :icon="Plus"  style="width: 12px;" class="custom-button" ></el-button>&nbsp;&nbsp;
                <span>创建知识库</span>

              </el-card>
            </el-col>
            <el-col :span="6" style="padding: 10px 10px;">
              <el-card shadow="never" style="height: 160px;">
                <div slot="header">
                  <div>
                    <el-image style="width: 20px; height: 20px;background-color: #3370FF;border-radius: 5px;padding: 5px 5px;float: left;" :src="url" fit="fill" />
                    <div style="width: 100px;float: left;margin-top: -6px;margin-left: 10px;">
                      <div style="width: 100%;font-size: 14px;">智慧水务</div>
                      <div style="width: 100%;font-size: 12px;">创建者: admin</div>
                    </div>
                    <el-button style="float: right;padding: 3px 10px;" size="small" type="primary" plain>通用型</el-button>
                  </div>
                </div>
                <div class="ellipsis-text">
                  该知识库包含智慧水务的相关文档，利用物联网、大数据、云计算、人工智能等先进信息技术，对水务系统中的供水、排水、水质监测、水资源调度等环节进行数字化、网络化、智能化管理。
                </div>
                <div class="stat-container">
                  <div class="stat-item" style="margin-left: -10px;"><b>45</b> 文档数</div>
                  <div class="vertical-divider"></div>
                  <div class="stat-item"><b>343.0k</b> 字符</div>
                  <div class="vertical-divider"></div>
                  <div class="stat-item"><b>1</b> 关联应用</div>
                  <el-dropdown trigger="click" style="padding: 5px 5px;margin-left: 13%;">
                  <span class="el-dropdown-link">
                    <el-button :icon="MoreFilled" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item><el-icon><Crop /></el-icon>向量化</el-dropdown-item>
                        <el-dropdown-item><el-icon><Setting /></el-icon>生成问题</el-dropdown-item>
                        <el-dropdown-item><el-icon><Connection /></el-icon>设置</el-dropdown-item>
                        <el-dropdown-item><el-icon><Document /></el-icon>导出 Excel</el-dropdown-item>
                        <el-dropdown-item><el-icon><Document /></el-icon>导出 ZIP</el-dropdown-item>
                        <el-dropdown-item><el-icon><Delete /></el-icon>删除</el-dropdown-item>
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
                    <el-image style="width: 20px; height: 20px;background-color: #3370FF;border-radius: 5px;padding: 5px 5px;float: left;" :src="url" fit="fill" />
                    <div style="width: 100px;float: left;margin-top: -6px;margin-left: 10px;">
                      <div style="width: 100%;font-size: 14px;">测试知识库</div>
                      <div style="width: 100%;font-size: 12px;">创建者: admin</div>
                    </div>
                    <el-button style="float: right;padding: 3px 10px;" size="small" type="primary" plain>通用型</el-button>
                  </div>
                </div>
                <div class="ellipsis-text">
                  测试123
                </div>
                <div class="stat-container">
                  <div class="stat-item" style="margin-left: -10px;"><b>0</b> 文档数</div>
                  <div class="vertical-divider"></div>
                  <div class="stat-item"><b>0</b> 字符</div>
                  <div class="vertical-divider"></div>
                  <div class="stat-item"><b>0</b> 关联应用</div>
                  <el-dropdown trigger="click" style="padding: 5px 5px;margin-left: 13%;">
                  <span class="el-dropdown-link">
                    <el-button :icon="MoreFilled" size="small" plain style="border: none;" class="gray-hover-button"></el-button>
                  </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item><el-icon><Crop /></el-icon>向量化</el-dropdown-item>
                        <el-dropdown-item><el-icon><Setting /></el-icon>生成问题</el-dropdown-item>
                        <el-dropdown-item><el-icon><Connection /></el-icon>设置</el-dropdown-item>
                        <el-dropdown-item><el-icon><Document /></el-icon>导出 Excel</el-dropdown-item>
                        <el-dropdown-item><el-icon><Document /></el-icon>导出 ZIP</el-dropdown-item>
                        <el-dropdown-item><el-icon><Delete /></el-icon>删除</el-dropdown-item>
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
import {Search, Plus, MoreFilled, Crop, Setting, Connection, Document, Delete} from '@element-plus/icons-vue'
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

.stat-item {
  font-size: 14px;
  color: #333;
  padding: 0 10px;
  cursor: pointer;
}

.vertical-divider {
  width: 1px;
  height: 24px;
  background-color: #dcdfe6;
}
</style>
