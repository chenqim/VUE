<template>
    <div>
      <h1>filter</h1>
      <Row>例如，在一个Array中，删掉偶数，只保留奇数</Row>
      <pre>
let arr = [1, 2, 4, 5, 6, 9, 10, 15]
let newArr = arr.filter((element) => {
  return element % 2 !== 0
})
      </pre>
      <div>
        arr: {{ arr }}
      </div>
      <div>
        newArr: {{ newArr }}
      </div>
      <Button type="primary" @click="testFilter" size="small" class="mt20">运行</Button>
      <h1 class="mt20">map</h1>
      <Row>举例说明，比如我们有一个函数f(x)=x2，要把这个函数作用在一个数组[1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map实现如下：</Row>
      <Row><img src="../../../static/img/map.png" class="mt20" alt=""></Row>
      <pre>
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArr = arr.map((element) => {
  return element * element
})
      </pre>
      <div>
        arr: {{ arr2 }}
      </div>
      <div>
        newArr: {{ newArr2 }}
      </div>
      <Button type="primary" @click="testMap" size="small" class="mt20">运行</Button>
    </div>
</template>
<script>
export default {
  name: 'TestFilter',
  data () {
    return {
      arr: [1, 2, 4, 5, 6, 9, 10, 15],
      newArr: [],
      arr2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      newArr2: []
    }
  },
  methods: {
    testFilter () {
      let arr = [1, 2, 4, 5, 6, 9, 10, 15]
      let newArr = arr.filter((element) => {
        return element % 2 !== 0
      })
      this.newArr = newArr
    },
    testMap () {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      let newArr = arr.map((element) => {
        return element * element
      })
      this.newArr2 = newArr
    }
  }
}
</script>
