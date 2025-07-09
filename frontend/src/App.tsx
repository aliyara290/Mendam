// frontend/src/App.tsx - Updated to include AuthProvider
import AppRoutes from "@/routes/AppRoutes";
import GlobalStyle from "@styles/GlobalStyle";
import { ThemeProvider } from "@contexts/ThemeContext";
import { OpenSettingProvider } from "./contexts/OpenSettingContext";
import { AuthProvider } from "./contexts/AuthContext"; // Add this import

function App() {
  return (
    <AuthProvider>
      <OpenSettingProvider>
        <ThemeProvider>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </OpenSettingProvider>
    </AuthProvider>
  );
}

export default App;