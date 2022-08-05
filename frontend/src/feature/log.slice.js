import { createSlice } from "@reduxjs/toolkit"

export const logSlice = createSlice({
    name: "log",
    initialState: {
        log: false
    },
    reducers: {
        setLog: (state, action) => {
            state.log = action.payload
        }
    }
})

export const { setLog } = logSlice.actions
export default logSlice.reducer;
