import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./assets/Routes/AppRoutes";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
