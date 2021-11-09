<template>
    <div>
      <option-merge-strategies/>
      <slot-div :slotData="slotData">
            <div style="background:green;flex:1" slot="left">这里是利用slot生成的left</div>
            <div style="width:200px;background:red" slot="right">这里是利用slot生成的right</div>
            <div slot="temp" slot-scope="props">这里是slot默认部分,可以拿到slot中的数据{{props.slotData}}</div>
      </slot-div>
      <directive-defined/>
    </div>
</template>

<script>
import OptionMergeStrategies from './pages/optionMergeStrategies/index.vue'
import SlotDiv from './pages/slot/index.vue'
import DirectiveDefined from './pages/directive/index.vue'
    export default {
        name:'App',
        components:{
            OptionMergeStrategies,
            SlotDiv,
            DirectiveDefined
        },
        data() {
            return {
                msg: 'hello world1111',
                // 默认值由工厂函数返回
                // 工厂函数：调用的时候实际上创建了一个类实例（对象），（它是一个函数，它用来创建一个对象）
                slotData:{
                    name:'这里是父亲的数据'
                }
            }
        },
    } 
</script>

