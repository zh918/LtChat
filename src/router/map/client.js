import layout from '../../components/common/layout/layout'
const client = r => require.ensure([], () => r(require('../../page/client/index.vue')), 'client')

export default {
	name:'联系中心',
	path:'/',
	component:layout,
	children:[
		{
        name:'联系客服',
        path:'/chat',
        component:client
    }

	]
}
