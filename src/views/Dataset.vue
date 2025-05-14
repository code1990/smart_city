<template xmlns="http://www.w3.org/1999/html">
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
                    <el-image style="width: 20px; height: 20px;background-color: #3370FF;border-radius: 5px;padding: 5px 5px;float: left;" :src="icon_document" fit="fill" />
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
                    <el-image style="width: 20px; height: 20px;background-color: #3370FF;border-radius: 5px;padding: 5px 5px;float: left;" :src="icon_document" fit="fill" />
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

      <el-dialog v-model="dialogVisible" title="创建知识库" width="720px" >
        <el-form :model="ruleForm" label-width="100px" label-position="left" ref="ruleFormRef" :rules="rules">
          <el-form-item label="知识库名称" label-position="top"   prop="name">
            <el-input
                v-model="ruleForm.name"
                placeholder="请输入知识库名称"
                maxlength="64"
                show-word-limit
                @blur="checkInput(1)"
            />
          </el-form-item>
          <el-form-item label="知识库描述" label-position="top" required prop="description">
            <el-input
                v-model="ruleForm.description"
                type="textarea"
                placeholder="描述知识库的内容，详细的描述将帮助AI能深入理解该知识库的内容，能更准确的检索到内容，提高该知识库的命中率。"
                maxlength="256"
                show-word-limit
                :rows="3"
            />
          </el-form-item>

          <el-form-item label="向量模型" label-position="top" required prop="vectorModel">
            <el-select v-model="ruleForm.vectorModel" placeholder="请选择向量模型">
              <el-option label="模型A" value="modelA" />
              <el-option label="模型B" value="modelB" />
            </el-select>
          </el-form-item>

          <el-form-item label="知识库类型"  label-position="top" required>
            <el-radio-group v-model="ruleForm.type" @change="getOption" style="width: 100%;">
              <div class="option-row" :style="{'border':ruleForm.type === '1' ? '1px solid #3370FF' : ''}" >
                <!-- 左侧图片 -->
                <el-image class="option-image" style="width: 20px; height: 20px;background-color: #3370FF;border-radius: 5px;padding: 5px 5px;float: left;" :src="icon_document" fit="fill" />
                <!-- 中间文字内容 -->
                <div class="option-text">
                  <b>通用型</b><br/>
                  <p style="color:#989EA6">通过上传文件或手动录入构建知识库</p>
                </div>
                <!-- 右侧单选框 -->
                <el-radio value="1" ></el-radio>
              </div>
              <div class="option-row" :style="{'border':ruleForm.type === '2' ? '1px solid #3370FF' : '','margin-left':'10px'}"  >
                <!-- 左侧图片 -->
                <el-image class="option-image" style="width: 20px; height: 20px;background-color: #7F3BF5;border-radius: 5px;padding: 5px 5px;float: left;" :src="icon_web" fit="fill" />
                <!-- 中间文字内容 -->
                <div class="option-text">
                  <b>web站点</b><br/>
                  <p style="color:#989EA6">通过网站链接构建知识库</p>
                </div>
                <!-- 右侧单选框 -->
                <el-radio value="2" ></el-radio>
              </div>
            </el-radio-group>
          </el-form-item>
          <div v-if="ruleForm.type === '2'">
            <el-form-item label="Web根地址" label-position="top" required prop="webUrl">
              <el-input
                  v-model="ruleForm.webUrl"
                  placeholder="请输入 Web 根地址"
                  show-word-limit
              />
            </el-form-item>

            <el-form-item label="选择器" label-position="top" >
              <el-input
                  v-model="ruleForm.webCss"
                  placeholder="默认为 body，可输入.classname/#idname/tagname"
                  show-word-limit
              />
            </el-form-item>
          </div>
        </el-form>

        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCreate" style="background-color: #3370FF">创建</el-button>
        </template>
      </el-dialog>

    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import {Search, Plus, MoreFilled, Crop, Setting, Connection, Document, Delete, Monitor} from '@element-plus/icons-vue'
import icon_document from '@/assets/icon_document.svg'
import icon_web from '@/assets/icon_web.svg'


const ruleFormRef = ref(null)
const ruleForm = reactive({
  name: '',
  description: '',
  vectorModel: '',
  type: '',
  webUrl: '',
  webCss: ''
})



const rules = reactive({
  name: [
    { required: true, message: '请输入知识库名称', trigger: 'blur' },
    { min: 1, max: 64, message: '名称长度为 1 到 64 个字符', trigger: 'blur' }
    // { validator: validateName, trigger: 'blur' }
  ],
  description: [
    { required: true, message: '请输入知识库描述', trigger: 'blur' },
    { max: 256, message: '描述长度不能超过 256 个字符', trigger: 'blur' }
    // { validator: validateName, trigger: 'blur' }

  ],
  vectorModel: [
    { required: true, message: '请选择向量模型', trigger: 'change' }
  ],
  type: [
    { required: true, message: '请选择知识库类型', trigger: 'change' }
  ],
  webUrl: [
    {
      required: true, // 默认 false，创建前再动态判断
      message: '请输入 Web 根地址',
      trigger: 'blur'
    }
  ]
})


const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}



const input4 = ref('')
const value = ref('1')
const  required = ref(true)

const selected = ref('1')

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

const dialogVisible = ref(false)

const form = ref({
  name: '',
  description: '',
  vectorModel: '',
  knowledgeType: '通用型',
})

const handleCreate = () => {
  console.log('提交数据:', ruleForm.value)
  // 提交逻辑
}
const goToCreateKnowledge = () => {
  dialogVisible.value = true
}
const getOption = () => {
  console.error(selected.value)
}
const getInfo =  (type) => {
  selected.value = type
}
const checkInput =  (type) => {
  if (type === 1){

  }
}

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
  height: 45px;
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

.el-radio-button__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  line-height: 1.2;
  font-size: 14px;
}
.el-radio-button__inner small {
  font-size: 12px;
  color: #999;
}
.no-margin-left {
  margin-left: 0 !important;
}
::v-deep(.no-margin-left .el-form-item__content) {
  margin-left: 0 !important;
}
.option-row {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 46%;
  height: 60px;
}

.option-image {
  width: 60px;
  height: 60px;
  margin-right: 16px;
  border-radius: 4px;
}

.option-text {
  flex: 1; /* 占据中间所有空间 */
  font-size: 14px;
  color: #333;
}

.el-radio {
  margin-left: 16px;
}
</style>
