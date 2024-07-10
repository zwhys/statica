import { Box } from "@mui/material"
import React from "react"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const data = [
  { name: "Jan", "Personal Best": 24, amt: 240 },
  { name: "Feb", "Personal Best": 13, amt: 221 },
  { name: "Mar", "Personal Best": 98, amt: 229 },
  { name: "Apr", "Personal Best": 39, amt: 200 },
  { name: "May", "Personal Best": 48, amt: 218 }
]
export function DisplayExerciseStatistics() {
  return (
    
    <Box
      textAlign="center"
      sx={{
        display: "flex",
        bgcolor: "#FF8E53",
        gap: 2,
        padding: 5,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 4,
        width: "90%",
        margin: "0 auto"
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Personal Best" stroke="#093170" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default DisplayExerciseStatistics
