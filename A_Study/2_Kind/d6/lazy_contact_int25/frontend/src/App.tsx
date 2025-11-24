import { AuthProvider } from "./context/AuthContext";
import AppContent from "./AppContent";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
