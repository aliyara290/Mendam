import AppRoutes from "@/routes/AppRoutes";
import GlobalStyle from "@styles/GlobalStyle";
import { ThemeProvider } from "@contexts/ThemeContext";
import { OpenSettingProvider } from "./contexts/openSettingContext";

function App() {
  return (
    <OpenSettingProvider>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </OpenSettingProvider>
  );
}

export default App;
