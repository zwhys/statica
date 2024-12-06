import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialUserState: UserState = { userId: null }
const initialModeState: ModeState = { mode: "dark" }

const userSlice = createSlice({
  name: "userid",
  initialState: initialUserState,
  reducers: {
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload
    },
  },
})

const modeSlice = createSlice({
  name: "mode",
  initialState: initialModeState,
  reducers: {
    setMode: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload
    },
  },
})

export const { setUserId } = userSlice.actions
export const { setMode } = modeSlice.actions

export { userSlice, modeSlice }
