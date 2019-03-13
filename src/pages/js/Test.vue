<template>
    <div>
      <div id="my-div">haha</div>
    </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      a: 0
    }
  },
  created () {
    console.log(this.mul(2)(3))
    // console.log(document.getElementById('my-div').innerHTML)
    this.test()
  },
  methods: {
    mul (x) {
      return function (y) {
        return x * y
      }
    },
    test () {
      let arr1 = [
        {
          name: 'name1',
          id: '1',
          data: 'this is data1'
        },
        {
          name: 'name2',
          id: '2',
          data: 'this is data2'
        },
        {
          name: 'name3',
          id: '3',
          data: 'this is data3'
        },
        {
          name: 'name4',
          id: '4',
          data: 'this is data4'
        }
      ]
      let arr2 = [
        {
          name: 'nm2',
          id: '2',
          data: 'tid2'
        },
        {
          name: 'nm4',
          id: '4',
          data: 'tid4'
        }
      ]
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr2[j].id === arr1[i].id) {
            arr1[i].data = arr2[j].data
            break
          } else {
            arr1[i].data = null
          }
        }
      }
      console.log('arr1', arr1)
      console.log('arr2', arr2)
    }
  }
}
</script>
