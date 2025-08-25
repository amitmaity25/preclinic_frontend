
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
