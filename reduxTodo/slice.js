import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "Todoslice",
  initialState: {
    value: "",
    tasks: [],
    isEditing: false
  },
  reducers: {
    setInputValue: function () {},
    handleSubmit: function (state, action ) {
      state.tasks = [...state.tasks, state.value];

  },
    
    handleChange: function (state, action) {
      state.value = action.payload;
    },
    handleDelete: function (state, action) {
      state.tasks = state.tasks.filter((task , ind) => {
        return ind!== action.payload;
      });

    },
    handleEdit: function (state, action) {
      state.inputValue = state.tasks.find(
        (task) => task.index === action.payload
      ).task;
      state.isEditing = action.payload;
    },
  },
});

export const { setInputValue, handleChange,handleDelete, handleEdit, handleSubmit } = slice.actions;

const sliceReducer = slice.reducer;
export default sliceReducer;
