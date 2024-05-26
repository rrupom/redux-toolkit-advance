const store = require("./app/store")

const { counterActions } = require("./features/counter/counterSlice")
const { dynamiCounterActions } = require("./features/dynamicCounter/dynamicCounterSlice")

// initial state
console.log(`Initial state: ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
    console.log(store.getState());
})

// counter
store.dispatch(counterActions.increment());