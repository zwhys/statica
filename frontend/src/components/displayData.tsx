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

const DisplayData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("127.0.0.1:3001/users")
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }

        console.log(response)

        const responseData = await response.json() // Extract JSON data from response

        setUsers(responseData)
        // setRecords(recordsData)
        // setExerciseTypes(exerciseTypesData)
      } catch (error) {
        console.error("Error fetching data:", error) // Handle error gracefully, e.g., set state for error message
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
