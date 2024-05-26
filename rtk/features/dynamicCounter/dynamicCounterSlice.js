const { createSlice } = require("@reduxjs/toolkit")
const { counterActions } = require("../counter/counterSlice")

const initialState = {
    count: 0
}

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        }
    },
    extraReducers: (builder) => {
        // recommeded way
        builder.addCase(counterActions.increment, (state, _action) => {
            state.count += 1
        }).addCase(counterActions.decrement, (state, _action) => {
            state.count -= 1
        })

        //* hardcoded
        // builder
        //     .addCase("counter/increment", (state, action) => {
        //         state.count += 1
        //     })
        //     .addCase("counter/decrement", (state, action) => {
        //         state.count -= 1
        //     })
    }

})

module.exports = dynamicCounterSlice.reducer
module.exports.dynamiCounterActions = dynamicCounterSlice.actions;