import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = { userId: 0 }

const userSlice = createSlice({
  name: "userid",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload
    },
  },
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer
