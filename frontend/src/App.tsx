import AppRoutes from "@/routes/AppRoutes";
import GlobalStyle from "@styles/GlobalStyle";
import { ThemeProvider } from "@contexts/ThemeContext";
import { OpenSettingProvider } from "@/contexts/OpenSettingsContext";
import { MobileChatProvider } from "@/contexts/MobileChatContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { FriendsProvider } from "@/contexts/FriendsContext";
import { MessagesProvider } from "@/contexts/MessagesContext";
import { SocketProvider } from "@/contexts/SocketContext";
import { GroupsProvider } from "@/contexts/GroupsContext"; 

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <FriendsProvider>
          <GroupsProvider>
            <MessagesProvider>
              <OpenSettingProvider>
                <MobileChatProvider>
                  <ThemeProvider>
                    <GlobalStyle />
                    <AppRoutes />
                  </ThemeProvider>
                </MobileChatProvider>
              </OpenSettingProvider>
            </MessagesProvider>
          </GroupsProvider>
        </FriendsProvider>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;