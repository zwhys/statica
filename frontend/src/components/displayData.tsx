import React, { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material"

type User = {
  id: number
  username: string
  password: string
}

const DisplayData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [records, setRecords] = useState<any[]>([])
  const [exerciseTypes, setExerciseTypes] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("localhost:3001/users") // URL to fetch from
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }

        console.log(response)

        const responseData = await response.json() // Extract JSON data from response
        // const recordsData = await getRecords()
        // const exerciseTypesData = await getExercise_types()

        setUsers(responseData)
        // setRecords(recordsData)
        // setExerciseTypes(exerciseTypesData)
      } catch (error) {
        console.error("Error fetching data:", error)
        // Handle error gracefully, e.g., set state for error message
      }
      console.log("users", users)
    }

    fetchData()
  }, [])

  return (
    <TableContainer component={Paper}>
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
  )
}

export default DisplayData
