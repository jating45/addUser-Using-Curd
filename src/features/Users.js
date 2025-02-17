import { createSlice } from "@reduxjs/toolkit";

let UsersData = [{ id: 1, firstName: "", lastName: "" }];
export const UsersSlice = createSlice({
  name: "Users",
  initialState: { value: UsersData },
  reducers: {
    addUsers: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUsers: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsers: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, firstName: action.payload.firstName, lastName: action.payload.lastName };
        }
        return user;
      });
    },
  },
});

export default UsersSlice.reducer;
export const { addUsers, deleteUsers, updateUsers } = UsersSlice.actions;
