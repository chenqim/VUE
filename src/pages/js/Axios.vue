<template>
    <div>
        <Select v-model="city" @on-change="getWeather" style="width: 250px;">
            <Option value="武汉">武汉</Option>
            <Option value="宁波">宁波</Option>
            <Option value="南京">南京</Option>
        </Select>
        <Row class="mt20">
            <h1 v-if="city">城市：{{ city }}</h1>
        </Row>
        <Row class="mt20">
            <Tag color="blue" v-if="yesterday">昨日天气</Tag><br/>
            <span>{{ yesterday }}</span><br/>
        </Row>
        <Row class="mt20">
            <Tag color="blue" v-if="today">今日天气</Tag><br/>
            <span>{{ today }}</span><br/>
            <span v-if="temperature">实时温度：{{ temperature }}</span><br/>
            <span v-if="aqi">AQI：{{ aqi }}</span><br/>
            <span v-if="ganmao">感冒指数：{{ ganmao }}</span><br/>
        </Row>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Axios',
  components: {
  },
  data () {
    return {
      city: '',
      yesterday: '',
      today: '',
      temperature: '',
      aqi: '',
      ganmao: ''
    }
  },
  created () {
  },
  methods: {
    // axios get请求
    getWeather () {
      this.$axios.get(`https://www.apiopen.top/weatherApi?city=${this.city}`).then(response => {
        console.log('response', response)
        if (response.data.code === 200) {
          // yesterday是一个对象
          // 昨天天气数据处理
          let yesterday = response.data.data.yesterday
          let yesterdayStr = yesterday.date + '，' + 
                             yesterday.fx + yesterday.fl.substring(yesterday.fl.indexOf('[', 3) + 1, yesterday.fl.indexOf(']')) + '，' +
                             yesterday.high + '，' +
                             yesterday.low + '，' +
                             yesterday.type
          this.yesterday = yesterdayStr
          // 今天天气数据处理
          let today = response.data.data.forecast[0]
          let todayStr = today.date + '，' + 
                         today.fengxiang + today.fengli.substring(today.fengli.indexOf('[', 3) + 1, today.fengli.indexOf(']')) + '，' +
                         today.high + '，' +
                         today.low + '，' +
                         today.type
          this.today = todayStr
          // 实时温度数据处理
          this.temperature = response.data.data.wendu + '℃'
          // AQI数据处理
          this.aqi = response.data.data.aqi
          // 感冒指数数据处理
          this.ganmao = response.data.data.ganmao
        }
      }).catch(error => {
        this.$Message.error('接口异常！')
        console.log('error message', error)
      })
    }
  }
}
</script>
<style scoped>

</style>
