/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
// import element from 'element-ui'


import router from '@/router/index.js'
import lazyLog from '@/utils/lazyLog.js'
// Vue.use(element)

// extends中注释掉了 "eslint:recommended"，为了调试顺利。上边这行可以把整个文件的错误忽略掉。

// const allElementNames = [ 'CollapseTransition', 'Loading', 'Pagination', 'Dialog', 'Autocomplete', 'Dropdown', 'DropdownMenu', 'DropdownItem', 'Menu', 'Submenu', 'MenuItem', 'MenuItemGroup', 'Input', 'InputNumber', 'Radio', 'RadioGroup', 'RadioButton', 'Checkbox', 'CheckboxButton', 'CheckboxGroup', 'Switch', 'Select', 'Option', 'OptionGroup', 'Button', 'ButtonGroup', 'Table', 'TableColumn', 'DatePicker', 'TimeSelect', 'TimePicker', 'Popover', 'Tooltip', 'Breadcrumb', 'BreadcrumbItem', 'Form', 'FormItem', 'Tabs', 'TabPane', 'Tag', 'Tree', 'Alert', 'Slider', 'Icon', 'Row', 'Col', 'Upload', 'Progress', 'Spinner', 'Badge', 'Card', 'Rate', 'Steps', 'Step', 'Carousel', 'Scrollbar', 'CarouselItem', 'Collapse', 'CollapseItem', 'Cascader', 'ColorPicker', 'Transfer', 'Container', 'Header', 'Aside', 'Main', 'Footer', 'Timeline', 'TimelineItem', 'Link', 'Divider', 'Image', 'Calendar', 'Backtop', 'InfiniteScroll', 'PageHeader', 'CascaderPanel', 'Avatar', 'Drawer', 'Popconfirm', 'Skeleton', 'SkeletonItem', 'Empty', 'Descriptions', 'DescriptionsItem', 'Result']

// Vue.config.productionTip = false
// for (const [key, val] of allElementNames.entries()) {
//   Vue.use(element[val])
// }
// Vue.component(element.MessageBox.name, MessageBox) // 存疑
Vue.prototype.$message = element.Message
Vue.prototype.$notification = element.Notification
Vue.prototype.$confirm = element.MessageBox.confirm
Vue.prototype.$log = lazyLog


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
