<template>
  <div class="bottomBox">
    <el-row>
      <el-col :span="2">
        <div class="grid-content ep-bg-purple" style="margin-left: 30px;padding:0px 5px;width: 70px;">
          <el-button link @click="getInfo">
          图层管理
          </el-button>
        </div>
      </el-col>
      <el-col :span="14" v-show="flag">
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button link>
          排水渠
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple"  style="width: 10%;">
          <el-button link>
          排水篦子
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;">
          <el-button link>
          排水探测点
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button link>
          排水管
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button link>
          排水设备
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button link>
          排水口
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple"  style="width: 10%;">
          <el-button link>
          排水立管
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button link>
            排水井
          </el-button>
        </div>
      </el-col>
      <el-col :span="8" v-show="false">
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const flag = ref(false)

const getInfo = () => {
  flag.value = !flag.value
}
</script>


<style scoped>
.bottomBox {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 999;
  font-weight: bold;

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
  line-height: 36px;
  float: left;
  margin-left: 10px;
  text-align: center;

  background-color: white;
}
</style>
