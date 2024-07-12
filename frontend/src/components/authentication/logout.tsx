import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setUserId } from "../../redux/reducer"
import { Link, Button } from "@mui/material"

export function LogOut() {
  const dispatch = useDispatch()
  return (
    <Link href="/landing">
      <Button
        variant="contained"
        size="large"
        sx={{
          marginLeft: 2,
          color: "white",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        }}
        onClick={() => dispatch(setUserId(0))}
      >
        Log Out
      </Button>
    </Link>
  )
}

export default LogOut
