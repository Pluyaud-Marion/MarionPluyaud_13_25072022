import { configureStore } from "@reduxjs/toolkit"
import logReducer from "../feature/log.slice"
import userReducer from "../feature/user.slice"
import statusReducer from "../feature/status.slice"

export default configureStore({
    reducer: {
        log: logReducer,
        user: userReducer,
        status: statusReducer
    },
})