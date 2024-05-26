const store = require("./app/store")

const { counterActions } = require("./features/counter/counterSlice")

// initial state
console.log(`Initial state: ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());