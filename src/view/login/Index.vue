<template>
    <div><span>{{count}}</span></div>
</template>
<script>
import { ref } from 'vue'
export default {
    name:'login',
    setup(){
        const count=ref(0)
        return {
            count
        }
    }
}
</script>