<template>
    <div>
        <my-header/>
        <my-table/>
    </div>
</template>

<script>
import MyTable from '@/components/LayoutMain/Page/Analytics/Table.vue';
import MyHeader from '@/components/LayoutMain/Page/MyHeader.vue'

export default{
    components:{
        MyTable,
        MyHeader
    }
}
</script>

<style lang="scss">
    div{
        background-color: #fbfcfd;
    }
</style>