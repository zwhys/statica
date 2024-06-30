import React, { useState } from "react"
import { Link, Button } from "@mui/material"

export function LogOut() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <Link href="/landing">
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginLeft: 2, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
        onClick={() => setIsDialogOpen(true)}
      >
        Log Out
      </Button>
    </Link>
  )
}

export default LogOut
