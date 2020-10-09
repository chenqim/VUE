<template>
  <div>
    <div :class="{ 'm-input-number': true, 'm-input-number-focused': isFocused }">
      <input type="text" :value="val" @change="change" @focus="focus" @blur="blur">
      <a :class="{ 'm-input-number-operate': true, 'up': true, 'disabled': val >= max }" @click="up"><span>+</span></a>
      <a :class="{ 'm-input-number-operate': true, 'down': true, 'disabled': val <= min }" @click="down"><span>-</span></a>
      <!-- <button class="btn" @click="down" :disabled="val <= min">-</button>
      <button class="btn" @click="up" :disabled="val >= max">+</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      val: this.value,
      isFocused: false
    }
  },
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  watch: {
    val: function (newVal) {
      this.$emit('input', newVal)
      this.$emit('on-change', newVal)
    },
    value: function (newVal) {
      this.update(newVal)
    }
  },
  methods: {
    focus () {
      this.isFocused = true
    },
    blur () {
      this.isFocused = false
    },
    up () {
      if (this.val >= this.max) return
      this.val += this.step
    },
    down () {
      if (this.val <= this.min) return
      this.val -= this.step
    },
    isNumber (value) {
      return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
    },
    update (val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.val = val
    },
    change (event) {
      let val = event.target.value.trim()
      if (this.isNumber(val)) {
        val = Number(val)
        if (val > this.max) val = this.max
        if (val < this.min) val = this.min
        this.val = val
      } else {
        event.target.value = this.val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 30px;
  cursor: pointer;
}
.disabled {
  cursor: not-allowed;
}
.m-input-number {
  position: relative;
  border: 1px solid #dcdee2;
  height: 32px;
  width: 200px;
  background: #ffffff;
  padding: 2px 7px;
  border-radius: 4px;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
  &:hover {
    border-color: #57a3f3;
    .up,.down {
      display: inline-block;
      border-left: 1px solid #dcdee2;
    }
    .down {
      border-top: 1px solid #dcdee2;
    }
  }
}
.up {
  top: 0;
  span {
    position: absolute;
    left: 6px;
    top: -2px;
    color: #999;
  }
}
.down {
  bottom: 0;
  border-top: 1px solid #ffffff;
  span {
    position: absolute;
    left: 7px;
    top: -3px;
    color: #999;
  }
}
.m-input-number-operate {
  width: 20px;
  height: 15px;
  position: absolute;
  right: 0;
  border-left: 1px solid #ffffff;
  display: none;
  -moz-user-select: none;/*火狐*/
  -webkit-user-select: none;/*webkit浏览器*/
  -ms-user-select: none;/*IE10*/
  -khtml-user-select: none;/*早期浏览器*/
  user-select: none;
}
.m-input-number-focused {
  border-color: #57a3f3;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
input {
  border: 0;
  width: 100%;
  height: 26px;
  background: #ffffff;
  &:focus {
    outline: 0;
  }
}
</style>
