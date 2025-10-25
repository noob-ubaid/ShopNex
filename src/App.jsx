import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto my-8 px-4 xl:px-0">
        <Outlet />
      </main>
    </>
  );
}

export default App;
