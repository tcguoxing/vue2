import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui'
// import { Button, MessageBox } from 'element-ui'
import router from '@/router/index.js'
/* eslint-disable */
// extends中注释掉了 "eslint:recommended"，为了调试顺利。上边这行可以把整个文件的错误忽略掉。

const allElementNames = [ 'CollapseTransition', 'Loading', 'Pagination', 'Dialog', 'Autocomplete', 'Dropdown', 'DropdownMenu', 'DropdownItem', 'Menu', 'Submenu', 'MenuItem', 'MenuItemGroup', 'Input', 'InputNumber', 'Radio', 'RadioGroup', 'RadioButton', 'Checkbox', 'CheckboxButton', 'CheckboxGroup', 'Switch', 'Select', 'Option', 'OptionGroup', 'Button', 'ButtonGroup', 'Table', 'TableColumn', 'DatePicker', 'TimeSelect', 'TimePicker', 'Popover', 'Tooltip', 'MessageBox', 'Breadcrumb', 'BreadcrumbItem', 'Form', 'FormItem', 'Tabs', 'TabPane', 'Tag', 'Tree', 'Alert', 'Notification', 'Slider', 'Icon', 'Row', 'Col', 'Upload', 'Progress', 'Spinner', 'Message', 'Badge', 'Card', 'Rate', 'Steps', 'Step', 'Carousel', 'Scrollbar', 'CarouselItem', 'Collapse', 'CollapseItem', 'Cascader', 'ColorPicker', 'Transfer', 'Container', 'Header', 'Aside', 'Main', 'Footer', 'Timeline', 'TimelineItem', 'Link', 'Divider', 'Image', 'Calendar', 'Backtop', 'InfiniteScroll', 'PageHeader', 'CascaderPanel', 'Avatar', 'Drawer', 'Popconfirm', 'Skeleton', 'SkeletonItem', 'Empty', 'Descriptions', 'DescriptionsItem', 'Result']
console.log('confirm: ', Object.getOwnPropertyDescriptors(element.MessageBox.confirm))
Vue.config.productionTip = false
for (const [key, val] of allElementNames.entries()) {
  Vue.use(element[val])
}
Vue.prototype.$Message = element.Message

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
