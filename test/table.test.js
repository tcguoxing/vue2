import testTable from '../src/components/fileForTest/table.vue'
import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, beforeEach, afterEach } from '@jest/globals'

// 测试table表
describe('table测试', () => {
    let wrapper
    it('快照样式', () => {
        wrapper = shallowMount(testTable, {
            propsData: {
                columns: ['tian', 'gan', 'di', 'zhi'],
                tableData: [
                {tian: 'this is tian', gan: 'this is gan', di: 'this is di', zhi:'this is zhi'},
                {tian: 'this is tian', gan: 'this is gan', di: 'this is di', zhi:'this is zhi'},
                {tian: 'this is tian', gan: 'this is gan', di: 'this is di', zhi:'this is zhi'}
            ]
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})
