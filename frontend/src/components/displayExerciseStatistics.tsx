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
        flexDirection: "column",
        gap: 2,
        width: "80%",
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
          <Line type="monotone" dataKey="Personal Best" stroke="#673ab7" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default DisplayExerciseStatistics
