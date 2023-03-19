import Vue from 'vue'
import router from '@clapjs/vue-core/lib/router'
import NProgress from 'nprogress'

const checkLogin=()=>{
    return (process.env.IS_ELECTRON?Vue.ls:Vue.$cookies).get('ACCESS_TOKEN')!==null
}

router.addRoute({path: '/login', name: 'login', component: ()=>import('@clapjs/vue-core/views/authority/login'),})
router.addRoute({path: '/', name: 'index', component: ()=>import('@clapjs/vue-core/components/CLayout'), redirect: () => {return 'dash'}})
router.addRoute('index',{path: '/dash', name: 'dash', component: ()=>import('@clapjs/vue-core/views/uban/dash')})

router.loadDynamicRoutes=async (application)=>{
    if(!checkLogin()){
        return;
    }
    const routes=(await Vue.prototype.$clap.http.get('/clap/authority/menu',{params:{application}})).data.records;
    for (let route of routes) {
        if (route.type==='MWR') {
            let meta = route.meta ? JSON.parse(route.meta) : {};
            router.getRoutes().filter(item=>item.name===route.routeName).length<1&& router.addRoute('index',{
                name: route.routeName,
                path: route.routePath,
                component: () => route.resolveType==='LocalPkg'?import('@/'+route.resolvePath):import('@clapjs/vue-core/'+route.resolvePath),
                meta
            });
        }
    }
    router.getRoutes().filter(item=>item.name==='other').length<1&&router.addRoute({name:'other',path: '*', redirect: '/404'});
}

router.beforeEach( (to, from, next) => {
    NProgress.start();
    if(!checkLogin()&&['login'].indexOf(to.name)<0){
        router.replace({name: 'login'})
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

router.onReady( () => {

});

export default router
