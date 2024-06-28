import React, { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"

type User = {
  id: number
  username: string
  password: string
}

type Records = {
  id: number
  userid: number
  date_of_entry: string
  exercise_type: string
  sets: number
  reps: number
  remarks: string
}

type Exercise_types = {
  id: number
  exercise_type: string
}

const DisplayData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [records, setRecords] = useState<Records[]>([])
  const [exercise_types, setExercise_types] = useState<Exercise_types[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "get",
        })
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        console.log(response)
        const responseUsers = await response.json() // Extract JSON data from response
        setUsers(responseUsers)
      } catch (error) {
        console.error("Error fetching data:", error) // Handle error gracefully, e.g., set state for error message
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch("http://localhost:3001/records", {
          method: "get",
        })
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        console.log(response)
        const responseRecords = await response.json()
        setRecords(responseRecords)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchRecords()
  }, [])

  useEffect(() => {
    const fetchExercise_types = async () => {
      try {
        const response = await fetch("http://localhost:3001/exercise_types", {
          method: "get",
        })
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        console.log(response)
        const responseExercise_types = await response.json() // Extract JSON data from response
        setExercise_types(responseExercise_types)
      } catch (error) {
        console.error("Error fetching data:", error) // Handle error gracefully, e.g., set state for error message
      }
    }

    fetchExercise_types()
  }, [])

  return (
    <>
      <TableContainer component={Paper} sx={{ margin: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ margin: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>UserID</TableCell>
              <TableCell>Date of Entries</TableCell>
              <TableCell>Exercise Types</TableCell>
              <TableCell>Sets</TableCell>
              <TableCell>Reps</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map(record => (
              <TableRow key={record.id}>
                <TableCell>{record.userid}</TableCell>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.date_of_entry}</TableCell>
                <TableCell>{record.exercise_type}</TableCell>
                <TableCell>{record.sets}</TableCell>
                <TableCell>{record.reps}</TableCell>
                <TableCell>{record.remarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ margin: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Exercise Types</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercise_types.map(exercise_type => (
              <TableRow key={exercise_type.id}>
                <TableCell>{exercise_type.id}</TableCell>
                <TableCell>{exercise_type.exercise_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default DisplayData
