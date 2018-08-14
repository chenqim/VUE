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
        <!-- 作用域插槽/带数据的插槽 -->
        <Row class="mt20">
            <i-col span="3"><span>带数据的插槽：</span></i-col>
            <i-col span="21">
                <slot-scope-components>
                    <template slot-scope="scope">
                        <div style="color: red;">姓名：{{scope.userInfo.name}}</div>
                        <div style="color: green;">性别：{{scope.userInfo.sex}}</div>
                        <div style="color: yellow;">年龄：{{scope.userInfo.age}}</div>
                        <div style="color: gray;">index：{{scope.index}}</div>
                    </template>
                </slot-scope-components>
            </i-col>
        </Row>
        <Row class="mt20">
            <i-col span="3"><span>总结：</span></i-col>
            <i-col span="21">
                props可以将数据从父组件传入子组件，slot可以将html从父组件传入子组件，甚至其它的组件。<br/>
                vue 2.1.0+ 新增了一个叫作用域插槽的东西，它允许我们在插槽上面定义数据。<br/>
                作用域插槽主要是为了解决那些插槽的数据在子组件内(可由父组件传入)，但是样式需要父组件确定的问题。<br/>
                在子组件中的slot标签上，通过v-bind指令来绑定对应的作用域props<br/>
                在父组件内部使用时通过slot-scope来获取对应的props对象。<br/>
            </i-col>
        </Row>
    </div>
</template>
<script>
import SlotComponents from '../components/SlotComponents'
import SlotScopeComponents from '../components/SlotScopeComponents'
export default {
  name: 'VueSlot',
  components: {
    SlotComponents,
    SlotScopeComponents,
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
