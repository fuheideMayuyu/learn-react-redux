
function bindActionCreator(actionCreator, dispatch) {
    return function () {
        dispatch(actionCreator.apply(this, arguments));
    }
}

export default function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators == 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    const boundActionCreators = {};
    for (const key in actionCreators) {
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
        }
    }
    return boundActionCreators;//最终要返回这个新对象
}