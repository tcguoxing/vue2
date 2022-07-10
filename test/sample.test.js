import cal from './calculate'
import { describe, it } from '@jest/globals'
import { Vuewrapper } from '@vue/test-utils'

describe('乘法计算单元测试', () => {
    it('正数相乘', () => {
        expect(cal(1, 1)).toEqual(1)
    })
})