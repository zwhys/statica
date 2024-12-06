import React from "react"
import { Switch } from "@mui/material"

export default function ChangeThemeSwitch({ checked, onChange }: ChangeThemeSwitchProps) {
  return <Switch checked={checked} onChange={onChange} />
}
