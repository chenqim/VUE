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
      <Button type="primary" @click="testFilter" size="small" class="mt10">运行</Button>
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
      <Button type="primary" @click="testMap" size="small" class="mt10">运行</Button>
      <h1 class="mt20">reduce</h1>
      <Row>Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：</Row>
      <Row><code>[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)</code></Row>
      <pre>
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = arr.reduce((x, y) => {
  return x + y
})
      </pre>
      <div>
        arr: {{ arr3 }}
      </div>
      <div>
        result: {{ result }}
      </div>
      <Button type="primary" @click="testReduce();testReduce2()" size="small" class="mt10">运行</Button>
      <h1 class="mt20">sort</h1>
      <Row>
        arrayObject.sort(sortby) <br/>
        sortby 可选。规定排序顺序。必须是函数。如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序。
      </Row>
      <Row>
        如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 x 和 y，其返回值如下：<br/>
        若 x 小于 y，在排序后的数组中 x 应该出现在 y 之前，则返回一个小于 0 的值。<br/>
        若 x 等于 y，则返回 0。<br/>
        若 x 大于 y，则返回一个大于 0 的值。<br/>
      </Row>
      <pre>
let arr = [3, 4, 1, 8,18, 7, 5, 6, 15]
arr.sort((x, y) => {
  return x - y
})
      </pre>
      <div>
        arr: {{ arr4 }}
      </div>
      <div>
        newArr4: {{ newArr4 }}
      </div>
      <Button type="primary" @click="testSort" size="small" class="mt10">运行</Button>
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
      newArr2: [],
      arr3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 0,
      arr4: [3, 4, 1, 8, 18, 7, 5, 6, 15],
      newArr4: []
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
    },
    testReduce () {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      let result = arr.reduce((x, y) => {
        return x + y
      })
      this.result = result
    },
    testReduce2 () {
      let objArr = [
        {
          name: 'a',
          age: 1
        },
        {
          name: 'b',
          age: 2
        },
        {
          name: 'c',
          age: 3
        },
        {
          name: 'd',
          age: 4
        }
      ]
      let newObj = objArr.reduce((x, y) => {
        return {
          name: x.name + y.name,
          age: x.age + y.age
        }
      })
      console.log('newObj', newObj)
    },
    testSort () {
      let arr = [3, 4, 1, 8, 18, 7, 5, 6, 15]
      arr.sort((x, y) => {
        return x - y
      })
      this.newArr4 = arr
    }
  }
}
</script>
