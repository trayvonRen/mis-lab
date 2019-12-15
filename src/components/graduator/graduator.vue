<template>
  <div class="wrapper">
    <intro-title title="往届学长"></intro-title>
    <div class="content-wrapper">
      <div class="detail-info-wrapper">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) of graduatorInfo"
            :key="index"
            :color="item.technology === '前端' ? '#409EFF' : '#0bbd87'"
            :timestamp="'毕业于：' + item.time"
            placement="top"
          >
            <el-card>
              <div class="card-name">{{ item.name }}</div>
              <div class="card-item">技术方向：{{ item.technology }}</div>
              <div class="card-item">毕业去向：{{ item.company }}</div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="chart-wrapper">
        <div id="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
import IntroTitle from '../common/introTitle'

export default {
  data() {
    return {
      graduatorInfo: [{
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '后端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '安卓',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '后端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '安卓',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '后端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '安卓',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '前端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '后端',
        company: 'google',
        time: '2019',
      }, {
        name: '李博文',
        technology: '安卓',
        company: 'google',
        time: '2019',
      }]
    }
  },
  components: {
    IntroTitle
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('chart'))

    // 绘制图表
    myChart.setOption({
    title : {
        text: '就业分布统计图',
        subtext: '仅收录信管工作室已毕业的学长',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['google','facebook','microsoft','twitter','amazon','ali','tencent','priceline', '考研']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'就业公司',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'google'},
                {value:5, name:'facebook'},
                {value:15, name:'microsoft'},
                {value:25, name:'twitter'},
                {value:20, name:'amazon'},
                {value:35, name:'ali'},
                {value:30, name:'tencent'},
                {value:40, name:'priceline'},
                {value:9, name:'考研'}
            ]
        }
    ]
})
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/styles/varibles.styl'
.wrapper
  position: relative;
  z-index 10
  width: 80%;
  padding-right: 8vw;
  padding-left: 8vw;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  .content-wrapper
    margin-top 60px
    width 100%
    height 100%
    display flex
    justify-content space-around
    align-items center
    @media screen and (max-width: $view-small)
      flex-direction: column
    .detail-info-wrapper
      padding 5px
      text-align left
      height 600px
      width 30%
      overflow:scroll
      @media screen and (max-width: $view-small)
        width 80%
    .chart-wrapper
      height 600px
      width 55%
      @media screen and (max-width: $view-small)
        width 80%
      #chart
        width 100%
        height 100%

.card-name {
  font-family: $side-title
  font-size 20px
  margin-bottom 10px
}

.card-item {
  margin-bottom 10px
}

::-webkit-scrollbar-thumb {
  background: #D3D3D3;
  border-radius: 6px;
}

</style>
