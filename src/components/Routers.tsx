import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h1> You are lost. 404 Not found</h1>} />
            </Routes>
        </Router>
    )
}

export default Routers;