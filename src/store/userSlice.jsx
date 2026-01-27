import { createSlice } from "@reduxjs/toolkit";

// Get initial state from localStorage
const getInitialState = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
};

const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      // Save to localStorage when user is added
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    },
    removeUser: () => {
      // Remove from localStorage when user is removed
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
