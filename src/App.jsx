import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Robot } from "./pages/robot";
import { Layout } from "./layout";
import { Work } from "./pages/work";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/robot" element={<Robot />} />
            <Route path="/work" element={<Work />} />

          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
