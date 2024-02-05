import { useSelector } from "react-redux";
import  ProtectedRoutes  from './routes/protectedRoutes';
import PublicRoutes from "./routes/publicRoutes";
import './App.css'
function App() {
  const {
    auth: {
      authReducer: { token },
    },
  } = useSelector((state) => state) || {};
  return !token ? <ProtectedRoutes /> : <PublicRoutes />;
}

export default App;
