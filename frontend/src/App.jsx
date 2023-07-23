import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Blog from "./pages/blog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="blog/:id" element={<Blog />}></Route>
            <Route path="createBlog" element={<CreateBlog />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>
            <Route path="forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
