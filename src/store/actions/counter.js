import * as types from '../action-types';

export default {
    add(amount) {
        return { type: types.ADD, amount };
    },
    minus() {
        return { type: types.MINUS };
    }
}

/* //bindActionCreators 说明是把actionCreator和store.dispatch方法绑定在一起
//因为有s说明复数，说明一定可以绑定多个
function add(amount) {//actionCreator  action的创建者
    return { type: types.ADD, amount };
    //return store.dispatch({ type: types.ADD });
}
//传进去老的add创建action的方法，返回一个新的函数 函数体变成store.dispatch(action);
//add = bindActionCreators(add, store.dispatch);
function minus() {
    return { type: types.MINUS };
}
//minus = bindActionCreators(minus, store.dispatch);

let actions = { add, minus }; */