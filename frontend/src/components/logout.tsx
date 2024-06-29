import React, { useState } from "react"
import { Link, Button } from "@mui/material"

export function LogOut() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <Link href="/landing">
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginLeft: 2 }}
        onClick={() => setIsDialogOpen(true)}
      >
        Log Out
      </Button>
    </Link>
  )
}

export default LogOut
