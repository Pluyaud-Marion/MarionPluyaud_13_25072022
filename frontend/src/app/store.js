import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../feature/users.slice"

export default configureStore({
    reducer: {
        users: usersReducer,
    },
})