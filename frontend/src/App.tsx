import AppRoutes from "@/routes/AppRoutes";
import GlobalStyle from "@styles/GlobalStyle";
import { ThemeProvider } from "@contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
