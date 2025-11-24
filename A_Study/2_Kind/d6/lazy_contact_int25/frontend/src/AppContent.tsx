import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Contacts from "./components/Contacts";

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {isAuthenticated ? (
        <Contacts />
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Contact Management App
          </h1>
          <Register />
          <Login />
        </div>
      )}
    </div>
  );
}

export default AppContent;
