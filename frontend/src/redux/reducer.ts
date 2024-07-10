import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "userid",
  initialState: {
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload.userId
    },
  },
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer
