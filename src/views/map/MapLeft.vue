<template>
  <div>
    <div class="leftBox">
      <div class="infoBox" @click="getInfo(1)">
        <el-button link>
          行政街道
        </el-button>
      </div>
      <div class="infoBox" @click="getInfo(2)">
        <el-button link>
          河湖水系
        </el-button>
      </div>
      <div class="infoBox">
        <el-button link @click="getInfo(3)">
          水利大模型
        </el-button>
      </div>
    </div>
  </div>
  <div class="bottomBox1" v-show="flag1">
    <div class="infoBox1">
      <el-form :model="form" label-width="auto" style="max-width: 100%;padding: 20px 20px;">
        <el-form-item label="大区">
          <el-checkbox-group v-model="checkedValues1" @change="handleGroupChange1">
            <el-checkbox
                v-for="(item, index) in options1"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="等级">
          <el-checkbox-group v-model="checkedValues2" @change="handleGroupChange2">
            <el-checkbox
                v-for="(item, index) in options2"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="类别">
          <el-checkbox-group v-model="checkedValues3" @change="handleGroupChange3">
            <el-checkbox
                v-for="(item, index) in options3"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="类型">
          <el-checkbox-group v-model="checkedValues4" @change="handleGroupChange4">
            <el-checkbox
                v-for="(item, index) in options4"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="margin-left: 40%;">
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
  <div class="bottomBox2" v-show="flag2">
    <div class="infoBox2">
      <el-form :model="form" label-width="auto" style="max-width: 100%;padding: 20px 20px;">
        <el-form-item label="流域">
          <el-checkbox-group v-model="checkedValues11" @change="handleGroupChange11">
            <el-checkbox
                v-for="(item, index) in options11"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="等级">
          <el-checkbox-group v-model="checkedValues21" @change="handleGroupChange21">
            <el-checkbox
                v-for="(item, index) in options2"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="类别">
          <el-checkbox-group v-model="checkedValues31" @change="handleGroupChange31">
            <el-checkbox
                v-for="(item, index) in options3"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="类型">
          <el-checkbox-group v-model="checkedValues41" @change="handleGroupChange41">
            <el-checkbox
                v-for="(item, index) in options4"
                :key="index"
                :label="item.value"
                style="float: left;"
            >
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="margin-left: 40%;">
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
    <div class="bottomBox3" v-show="flag3">
    <el-row>
<!--      <el-col :span="2">-->
<!--        <div class="grid-content ep-bg-purple" style="margin-left: 30px;padding:0px 5px;">-->
<!--          <el-button link @click="getInfo">-->
<!--            图层管理-->
<!--          </el-button>-->
<!--        </div>-->
<!--      </el-col>-->
      <el-col :span="14" >
        <div class="grid-content ep-bg-purple" style="width: 11%;" >
          <el-button link @click="getModel(1)">
            水文动力模型
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple"  style="width: 11%;">
          <el-button link @click="getModel(2)">
            水质预测模型
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 11%;">
          <el-button link @click="getModel(3)">
            调度优化模型
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 11%;" >
          <el-button link @click="getModel(4)">
            风险评估模型
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 11%;" >
          <el-button link @click="getModel(5)">
            水位预测模型
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 11%;" >
          <el-button link @click="getModel(6)">
            管网堵塞检测
          </el-button>
        </div>
<!--        <div class="grid-content ep-bg-purple"  style="width: 10%;">-->
<!--          <el-button link>-->
<!--            排水立管-->
<!--          </el-button>-->
<!--        </div>-->
<!--        <div class="grid-content ep-bg-purple" style="width: 10%;" >-->
<!--          <el-button link>-->
<!--            排水井-->
<!--          </el-button>-->
<!--        </div>-->
      </el-col>
      <el-col :span="8" v-show="false">
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
    </el-row>
  </div>

</template>
<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter();
// const emit = defineEmits(['update-status'])
function startModel(type, status) {
  if (status === 1 && type === 1) {
    router.push({ path: '/flood', query: { type, status } });
  }
}

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm(
      'Are you sure to close this dialog?',
      'Confirmation',
      {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning',
      }
  )
      .then(() => {
        done(); // 用户点击确认 -> 关闭对话框
      })
      .catch(() => {
        // 用户点击取消 -> 不关闭
      });
}

const flag1 = ref(false)
const flag2 = ref(false)
const flag3 = ref(false)


const getInfo = (type) => {
  switch (type) {
    case 1:
      flag1.value = !flag1.value
      if (flag1.value) {
        flag2.value = false
        flag3.value = false
      }
      // dialogVisible.value = true
      break
    case 2:
      flag2.value = !flag2.value
      if (flag2.value) {
        flag1.value = false
        flag3.value = false
      }
      break
    case 3:
      flag3.value = !flag3.value
      if (flag3.value) {
        flag1.value = false
        flag2.value = false
      }
      break
  }
}

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)

// 定义可选项数组
const options1 =  [
  { label: "永和南", value: "永和南" },
  { label: "永和北", value: "永和北" },
  { label: "九龙二", value: "九龙二" },
  { label: "九龙一", value: "九龙一" },
  { label: "九龙三", value: "九龙三" },
  { label: "西区", value: "西区" },
  { label: "东区", value: "东区" },
  { label: "黄陂", value: "黄陂" },
  { label: "萝岗", value: "萝岗" },
  { label: "科学城", value: "科学城" },
  { label: "大吉沙", value: "大吉沙" },
  { label: "生物岛", value: "生物岛" },
];

// 定义绑定的数组
const checkedValues1 = ref([]);

// 监听复选框组变化
function handleGroupChange1(val) {
  console.error('当前选中的值：', val);
}

const options11 =  [
  { label: "永和河流域", value: "永和河流域" },
  { label: "洞尾河流域", value: "洞尾河流域" },
  { label: "平岗河流域", value: "平岗河流域" },
  { label: "金坑河流域", value: "金坑河流域" },
  { label: "凤凰河流域", value: "凤凰河流域" },
  { label: "东涌流域", value: "东涌流域" },
  { label: "南岗河流域", value: "南岗河流域" },
  { label: "牛市圳流域", value: "牛市圳流域" },
  { label: "牛屎圳流域", value: "牛屎圳流域" },
  { label: "细陂河流域", value: "细陂河流域" },
  { label: "东江流域", value: "东江流域" },
  { label: "墩头涌流域", value: "墩头涌流域" },
  { label: "东滘涌流域", value: "东滘涌流域" },
  { label: "乌涌流域", value: "乌涌流域" },
  { label: "珠江黄埔航道流域", value: "珠江黄埔航道流域" },
  { label: "珠山涌流域", value: "珠山涌流域" },
  { label: "东江北支流", value: "东江北支流" },
  { label: "水声涌流域", value: "水声涌流域" },
  { label: "刘家庄河", value: "刘家庄河" },
  { label: "岭湖水库", value: "岭湖水库" },
  { label: "流沙河流域", value: "流沙河流域" },
  { label: "金紫涌流域", value: "金紫涌流域" },
  { label: "沙步涌流域", value: "沙步涌流域" },
  { label: "埔安河流域", value: "埔安河流域" },
  { label: "大山河流域", value: "大山河流域" },
  { label: "西滘涌流域", value: "西滘涌流域" },
  { label: "笔岗涌流域", value: "笔岗涌流域" },
  { label: "佛塱河流域", value: "佛塱河流域" },
  { label: "珠江流域", value: "珠江流域" },
  { label: "官洲水道流域", value: "官洲水道流域" }
];

// 定义绑定的数组
const checkedValues11 = ref([]);

// 监听复选框组变化
function handleGroupChange11(val) {
  console.error('当前选中的值：', val);
}

// 定义绑定的数组
const checkedValues21 = ref([]);

// 监听复选框组变化
function handleGroupChange21(val) {
  console.error('当前选中的值：', val);
}

// 定义绑定的数组
const checkedValues31 = ref([]);

// 监听复选框组变化
function handleGroupChange31(val) {
  console.error('当前选中的值：', val);
}


// 定义绑定的数组
const checkedValues41 = ref([]);

// 监听复选框组变化
function handleGroupChange41(val) {
  console.error('当前选中的值：', val);
}


// 定义可选项数组
const options2 =  [
  { label: "特大型管", value: "特大型管" },
  { label: "大型管", value: "大型管" },
  { label: "中型管", value: "中型管" },
  { label: "小型管", value: "小型管" },
  { label: "主干管", value: "主干管" },
  { label: "支管", value: "支管" },
];
// 定义绑定的数组
const checkedValues2 = ref([]);

// 监听复选框组变化
function handleGroupChange2(val) {
  console.error('当前选中的值：', val);
}

// 定义可选项数组
const options3 =  [
  { label: "雨水", value: "雨水" },
  { label: "污水", value: "污水" },
  { label: "雨污合流", value: "雨污合流" },
];
// 定义绑定的数组
const checkedValues3 = ref([]);

// 监听复选框组变化
function handleGroupChange3(val) {
  console.error('当前选中的值：', val);
}

// 定义可选项数组
const options4 =  [
  { label: "明渠暗渠", value: "明渠暗渠" },
  { label: "雨水篦子", value: "雨水篦子" },
  { label: "探测点", value: "探测点" },
  { label: "污水管雨水管", value: "污水管雨水管" },
  { label: "排水设施", value: "排水设施" },
  { label: "排放口", value: "排放口" },
  { label: "排水立管", value: "排水立管" },
  { label: "排水井", value: "排水井" },
];
// 定义绑定的数组
const checkedValues4 = ref([]);

// 监听复选框组变化
function handleGroupChange4(val) {
  console.error('当前选中的值：', val);
}

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
  let status = 1;
  let type = 1;
  router.push({ path: '/graph', query: { type, status } });
}

const getModel = (type) => {
  flag3.value = false;
  if (type === 1) {
    let status = 1;
    router.push({ path: '/flood', query: { type, status } });
  }else if (type === 2) {
    let status = 2;
    router.push({path: '/chat', query: {type, status}});
  }
}




</script>


<style scoped>
.leftBox{
  width: 80px;
  position: absolute;
  z-index: 99;
  margin-left: 10px;
  margin-top: 10px;

}
.infoBox{
  background-color: white;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
  min-height: 36px;
  line-height: 36px;
}

.infoBox1{
  background-color: white;
  width: 60%;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
}
.infoBox2{
  background-color: white;
  width: 60%;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
}

.bottomBox3 {
  width: 90%;
  height: 40px;
  position: absolute;
  bottom: 10px;
  z-index: 999;
  font-weight: bold;
  top: 112px;
  margin-left: 120px;
}

.bottomBox2 {
  width: 90%;
  height: 40px;
  position: absolute;
  bottom: 10px;
  z-index: 999;
  font-weight: bold;
  top: 57px;
  margin-left: 120px;
}

.bottomBox1 {
  width: 90%;
  height: 40px;
  position: absolute;
  bottom: 10px;
  z-index: 999;
  font-weight: bold;
  top: 9px;
  margin-left: 120px;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  float: left;
  margin-left: 10px;
  text-align: center;
  line-height: 36px;
  background-color: white;
}

</style>
