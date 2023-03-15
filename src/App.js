
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"

import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ApolloProvider client={client}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

            <div className="app">
              <main className="content">
              {/**
              <Topbar />
            */}  
              
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                </Routes>
              </main>
            </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
