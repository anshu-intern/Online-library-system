import {createSlice} from "@reduxjs/toolkit";
import bookData from "../assets/data.json";

const bookSlice = createSlice({
    name : "bookLib",
    initialState : {
        books : bookData
    },
    reducers : {
        addBook : (state,action) => {
            state.books.push(action.payload)
        }
    }
});

export const {addBook} = bookSlice.actions;

export default bookSlice.reducer;

