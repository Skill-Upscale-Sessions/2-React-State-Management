import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  educationLevel: string;
  isActive: boolean;
  createdAt: number;
}

interface UserState {
  isDataLoading: boolean;
  users: User[];
}

const initialState: UserState = {
  isDataLoading: false,
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    dataLoading: (state) => {
      state.isDataLoading = true;
    },
    dataLoaded: (state, action) => {
      state.isDataLoading = false;
      state.users = action.payload;
    },
  },
});

export const { dataLoading, dataLoaded } = userSlice.actions;
export default userSlice.reducer;
