const { combineReducers, createStore } = require("redux")
const counterReducer = require("./counter/reducer")
const { increment, decrement } = require("./counter/actions")

const rootReducer = combineReducers({
    counter: counterReducer,
})

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());