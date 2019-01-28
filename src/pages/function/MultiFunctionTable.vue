<template>
    <div>
        <Table border ref="selection" :columns="columns" :data="data" @on-selection-change="checkedChange"></Table>
        <div class="mt20">
            <h2>已选择：</h2>
            <div v-for="(item, index) in outStoreList" :key="index" class="dib mr20 mt20">
                <div class="choosed-box dib">{{ item.name }}</div>
                <div class="dib">{{ item.number }}{{ item.unit }}</div>
            </div>
            <div class="mt20">合计：{{ totalMoney }} 元</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MultiFunctionTable',
  data () {
    return {
      columns: [
        {
          type: 'expand',
          align: 'center',
          width: 60,
          render: (h, params) => {
            return h('div', `这里是${params.row.name}的详情。`) // render函数可以直接引入一个vue页面，复杂的render可以直接先写页面再引入
          }
        },
        {
          type: 'selection',
          align: 'center',
          width: 60
        },
        {
          title: '数量',
          key: 'number',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('InputNumber', {
                props: {
                  max: params.row.storeNumber,
                  min: 0,
                  step: 1,
                  activeChange: false,
                  value: params.row.number
                },
                on: {
                  'on-change': (value) => {
                    console.log('value', value, 'params', params)
                    this.data[params.index].number = value
                    if (this.outStoreList.length !== 0) {
                      this.totalMoney = 0
                      this.outStoreList.forEach((element, index) => {
                        if (element.name === params.row.name) {
                          element.number = value
                        }
                        this.totalMoney += element.number * element.price
                      })
                      this.totalMoney = parseFloat(this.totalMoney.toFixed(2)) // 保留两位小数
                    }
                  }
                }
              })
            ])
          }
        },
        {
          title: '商品名称',
          align: 'center',
          key: 'name'
        },
        {
          title: '商品分类',
          align: 'center',
          key: 'type'
        },
        {
          title: '库存数',
          align: 'center',
          key: 'storeNumber'
        },
        {
          title: '单位',
          align: 'center',
          key: 'unit'
        },
        {
          title: '单价（元）',
          align: 'center',
          key: 'price'
        }
      ],
      data: [
        {
          name: '苹果',
          // number: 0,
          storeNumber: 100,
          price: 8.8,
          type: '水果类',
          unit: '公斤',
          date: '2016-10-03'
        },
        {
          name: '牛',
          // number: 0,
          storeNumber: 100,
          price: 5000,
          type: '肉类',
          unit: '只',
          date: '2016-10-01'
        },
        {
          name: '草莓',
          // number: 0,
          storeNumber: 100,
          price: 45,
          type: '水果类',
          unit: '公斤',
          date: '2016-10-02'
        },
        {
          name: '车厘子',
          // number: 0,
          storeNumber: 100,
          price: 120,
          type: '水果类',
          unit: '公斤',
          date: '2016-10-04'
        }
      ],
      outStoreList: [],
      totalMoney: 0
    }
  },
  created () {
    // number必须是后加进去的属性 否则在改变数量的时候会导致选中状态失效
    this.data.forEach(element => {
      element.number = 0
    })
  },
  methods: {
    checkedChange (selected) {
      console.log('selected', selected)
      this.outStoreList = selected
      this.totalMoney = 0
      this.outStoreList.forEach(element => {
        this.totalMoney += element.number * element.price
      })
      this.totalMoney = parseFloat(this.totalMoney.toFixed(2)) // 保留两位小数
    }
  }
}
</script>
<style lang="scss" scoped>
  .choosed-box {
    padding: 5px;
    background-color: #e8e8e8;
  }
  .dib {
    display: inline-block;
  }
</style>
