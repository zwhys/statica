import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
  userId: number | null;
}

const initialState: State = { userId: null };


const userSlice = createSlice({
  name: "userid",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload
    },
  },
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer
