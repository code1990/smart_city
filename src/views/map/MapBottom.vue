<template>
  <div class="bottomBox">
    <el-row>
      <el-col :span="2">
        <div class="grid-content ep-bg-purple" style="margin-left: 30px;padding:0px 5px;">
          <el-button type="text" @click="getInfo">
          图层管理
          </el-button>
        </div>
      </el-col>
      <el-col :span="14" v-show="flag">
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button type="text">
          排水渠
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple"  style="width: 10%;">
          <el-button type="text">
          排水篦子
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;">
          <el-button type="text">
          排水探测点
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button type="text">
          排水管
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button type="text">
          排水设备
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button type="text">
          排水口
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple"  style="width: 10%;">
          <el-button type="text">
          排水立管
          </el-button>
        </div>
        <div class="grid-content ep-bg-purple" style="width: 10%;" >
          <el-button type="text">
            排水井
          </el-button>
        </div>
      </el-col>
      <el-col :span="8" v-show="false">
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
<!--      <p>-->
<!--      </p>-->
<!--      <el-icon :size="20">-->
<!--        <Edit />-->
<!--      </el-icon>-->
<!--      <el-icon color="#409efc" class="no-inherit">-->
<!--        <Share />-->
<!--      </el-icon>-->
<!--      <el-icon>-->
<!--        <Delete />-->
<!--      </el-icon>-->
<!--      <el-icon class="is-loading">-->
<!--        <Loading />-->
<!--      </el-icon>-->
<!--      <el-button type="primary">-->
<!--        <el-icon style="vertical-align: middle">-->
<!--          <Search />-->
<!--        </el-icon>-->
<!--        <span style="vertical-align: middle"> Search </span>-->
<!--      </el-button>-->
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
  bottom: 0px;
  right: 10px;
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
  float: left;
  margin-left: 10px;
  text-align: center;
  line-height: 36px;
  background-color: white;
}
</style>
