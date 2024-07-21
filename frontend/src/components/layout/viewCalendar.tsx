import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Box, Typography, Button } from "@mui/material"
import AddExerciseEntry from "../addExerciseEntry"
import Calendar from "../calendar"
import { RootState } from "../../redux/store"

export function ViewCalendar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [username, setUsername] = useState<string | null>(null)
  const userId = useSelector((state: RootState) => state.user.userId)

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch("http://localhost:3001/username", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        })

        if (!response.ok) {
          throw new Error("Failed to fetch username")
        }

        const data = await response.json()
        setUsername(data.username)
      } catch (error) {
        console.error("Error fetching username:", error)
      }
    }

    fetchUsername()
  }, [userId])

  return (
    <>
      <AddExerciseEntry open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />

      <Box sx={{ width: "25%" }}>
        <Typography variant="h3" sx={{ margin: 3 }}>
          Welcome, {username !== null ? username : "Loading..."}
        </Typography>
        <Button
          sx={{
            background: "#8390FA",
            color: "white",
          }}
          size="large"
          variant="contained"
          color="primary"
          onClick={() => setIsDialogOpen(true)}
        >
          Add Exercise Entry
        </Button>
      </Box>
      <Box sx={{ width: "75%" }}>
        <Calendar />
      </Box>
    </>
  )
}

export default ViewCalendar
