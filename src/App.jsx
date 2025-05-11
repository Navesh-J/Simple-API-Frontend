import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import UsersList from "./components/Pages/User/UsersList";
import CreateUser from "./components/Pages/User/CreateUser";
import RetrieveUser from "./components/Pages/User/RetrieveUser";
import EditUser from "./components/Pages/User/EditUser";
import DeleteUser from "./components/Pages/User/DeleteUser";
import Contact from "./components/Pages/Static/Contact";
import About from "./components/Pages/Static/About";

function App() {

  return (
    <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/all" element={<UsersList />} />
                <Route path="/add" element={<CreateUser />} />
                <Route path="/:userId" element={<RetrieveUser />} />
                <Route path="/update/:userId" element={<EditUser />} />
                <Route path="/delete/:userId" element={<DeleteUser />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;