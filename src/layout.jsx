import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export function Layout() {
  return (
    <>
      {/* NavBar using MUI AppBar */}
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" href="#/">Home</Button>
          <Button color="inherit" href="#/contact">Contact</Button>
          <Button color="inherit" href="#/robot">Robot</Button>
          <Button color="inherit" href="#/work">Work</Button>


          
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
