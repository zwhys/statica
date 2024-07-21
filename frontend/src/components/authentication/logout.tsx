import { useDispatch } from "react-redux"
import { setUserId } from "../../redux/reducer"
import { Link, Button } from "@mui/material"

export function LogOut() {
  const dispatch = useDispatch()
  return (
    <Link href="/landing">
      <Button
        variant="contained"
        size="large"
        sx={{
          marginLeft: 2,
          color: "white",
          background: "#8390FA",
        }}
        onClick={() => dispatch(setUserId(null))}
      >
        Log Out
      </Button>
    </Link>
  )
}

export default LogOut
