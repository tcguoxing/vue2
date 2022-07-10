<template >
    <el-table
    :data="tableData"
    stripe
    border
    >
    <template
        v-for="(item, index) in columns"
    >
        <el-table-column :key="index"
        :prop="item"
        >
        </el-table-column>
    </template>
    </el-table>
</template>
<script>
export default {
    name: 'tableTest',
    props: ['tableData', 'columns'],
    data() {
        return {
            
        }
    }
}
</script>
<style lang="">
    
</style>