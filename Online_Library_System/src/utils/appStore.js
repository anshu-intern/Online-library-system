import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js";

const appStore = configureStore({
    reducer : {
        book : bookReducer
    }
});

export default appStore;