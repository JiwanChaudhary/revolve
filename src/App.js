import "./GlobalStyle.css"
import { useEffect } from "react"
import { Typography } from "@mui/material";

function App() {
  useEffect(() => {
    document.title = "Revolve Nepal"
  }, []);

  return (
    <Typography variant="h2">Revolve Nepal</Typography>
  );
}

export default App;
