import './main.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './states/app'
import {
    picker,
    modal,
    toast,
    alert,
    preloader,
    indicator,
    actions,
    pullToRefresh,
    infiniteScroll,
    popup,
    calendar,
    datetimePicker
} from '../src/index'

Vue.use(VueRouter);
Vue.prototype.goBack = function(_this){
    window.history.back();
};
Vue.component('picker',picker);
Vue.component('modal',modal);
Vue.component('toast',toast);
Vue.component('alert',alert);
Vue.component('preloader',preloader);
Vue.component('indicator',indicator);
Vue.component('actions',actions);
Vue.component('calendar',calendar);
Vue.component('datetime-picker',datetimePicker)

Vue.directive('pull-to-refresh',pullToRefresh)
Vue.directive('infinite-scroll',infiniteScroll)
Vue.directive('popup',popup)

var router = new VueRouter({
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true //记住页面的滚动位置 html5模式适用
})

router.map({
    '/demo/index': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/index/route').default;
                resolve(route);
            })
        }
    },
    '/demo/picker': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/picker/route').default;
                resolve(route);
            })
        }
    },
    '/demo/toast': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/toast/route').default;
                resolve(route);
            })
        }
    },
    '/demo/alert': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/alert/route').default;
                resolve(route);
            })
        }
    },
    '/demo/preloader': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/preloader/route').default;
                resolve(route);
            })
        }
    },
    '/demo/indicator': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/indicator/route').default;
                resolve(route);
            })
        }
    },
    '/demo/actions': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/actions/route').default;
                resolve(route);
            })
        }
    },
    '/demo/pullToRefresh': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/pullToRefresh/route').default;
                resolve(route);
            })
        }
    },
    '/demo/infiniteScroll': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/infiniteScroll/route').default;
                resolve(route);
            })
        }
    },
    '/demo/popup': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/popup/route').default;
                resolve(route);
            })
        }
    },
    '/demo/calendar': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/calendar/route').default;
                resolve(route);
            })
        }
    },
    '/demo/datetime': {
        component: function (resolve) {
            //webpack自带功能 实现异步加载路由
            require.ensure([], function () {
                let route = require('./states/datetime-picker/route').default;
                resolve(route);
            })
        }
    },
})
router.redirect({
    '*': '/demo/index'
})

router.start(App,'#demo');