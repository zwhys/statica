import React, { useState, useEffect } from "react"
import { getUsers, getRecords, getExercise_types } from "../../../backend/src/api" // Adjust path as per your project structure
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@mui/material"

const DisplayData: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  const [records, setRecords] = useState<any[]>([])
  const [exerciseTypes, setExerciseTypes] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers()
        const recordsData = await getRecords()
        const exerciseTypesData = await getExercise_types()

        setUsers(usersData)
        setRecords(recordsData)
        setExerciseTypes(exerciseTypesData)
      } catch (error) {
        console.error("Error fetching data:", error)
        // Handle error gracefully, e.g., set state for error message
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Typography variant = "h2">Users</Typography>
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

      <h2>Records</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Entry ID</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Date of Entry</TableCell>
              <TableCell>Exercise Type</TableCell>
              <TableCell>Sets</TableCell>
              <TableCell>Reps</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map(record => (
              <TableRow key={record.entryid}>
                <TableCell>{record.entryid}</TableCell>
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

      <Typography variant = "h2">Exercise Types</Typography>
      <ul>
        {exerciseTypes.map(type => (
          <li key={type.exercise_types}>{type.exercise_types}</li>
        ))}
      </ul>
    </>
  )
}

export default DisplayData
