<template>
    <div>
        <!-- props可以将数据从父组件传入子组件，slot可以将html从父组件传入子组件，甚至其它的组件。 -->
        <!-- 不具名插槽 默认 -->
        <Row>
            <i-col span="3"><span>不具名插槽 默认：</span></i-col>
            <i-col span="21">
                <slot-components url="//www.baidu.com">这是去百度的链接</slot-components>
            </i-col>
        </Row>
        <!-- 具名插槽 -->
        <Row class="mt20">
            <i-col span="3"><span>具名插槽：</span></i-col>
            <i-col span="21">
                <computer>
                    <div slot="CPU">Intel Core i7</div>
                    <div slot="GPU">GTX980Ti</div>
                    <div slot="Memory">Kingston 32G</div>
                    <div slot="Hard-drive">Samsung SSD 1T</div>
                </computer>
            </i-col>
        </Row>
        <Row class="mt20">
            <i-col span="3"><span>总结：</span></i-col>
            <i-col span="21">
                props可以将数据从父组件传入子组件，slot可以将html从父组件传入子组件，甚至其它的组件。
            </i-col>
        </Row>
    </div>
</template>
<script>
import SlotComponents from '../components/SlotComponents'
export default {
  name: 'VueSlot',
  components: {
    SlotComponents,
    Computer: {
      template: `<div>
                    <slot name="CPU">这儿插你的CPU</slot>
                    <slot name="GPU">这儿插你的显卡</slot>
                    <slot name="Memory">这儿插你的内存</slot>
                    <slot name="Hard-drive">这儿插你的硬盘</slot>
                </div>`
    }
  }
}
</script>
