import layout from '../../components/common/layout/layout'
const admin = r => require.ensure([], () => r(require('../../page/admin/index.vue')), 'admin')

export default {
	name:'客服管理',
	path:'/',
	component:layout,
	children:[
		{
        name:'客服',
        path:'/admin/chat',
        component:admin
    }

	]
}
