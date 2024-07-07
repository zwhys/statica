import React, { useState, useEffect } from "react"
import { EventInput } from "@fullcalendar/core"



export const RetrieveColour: React.FC = () => {
  const [records, setRecords] = useState<Records[]>([])

  useEffect(() => {
    const fetchExercise_types = async () => {
      try {
        const response = await fetch("http://localhost:3001/exercise_types", {
          method: "get",
        })
        const responseExercise_types = await response.json()

      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchExercise_types()
  }, )


  return null
}

export default RetrieveColour
