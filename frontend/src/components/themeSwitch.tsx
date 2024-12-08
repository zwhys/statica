import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Switch } from "@mui/material"
import { RootState } from "../redux/store"
import { setMode } from "../redux/reducer"

const ThemeSwitch: React.FC = () => {
  const mode = useSelector((state: RootState) => state.mode.mode)
  const dispatch = useDispatch()

  return (
    <Switch
      checked={mode === "dark"}
      onChange={() => {
        const newMode = mode === "light" ? "dark" : "light"
        dispatch(setMode(newMode))
      }}
    />
  )
}

export default ThemeSwitch
