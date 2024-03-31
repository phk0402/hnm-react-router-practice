import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// pages
import Navbar from "./components/Navbar";
import ProductAll from "../src/pages/ProductAll";
import Login from "../src/pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. navigation bar 생성
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지가 나옴
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어있을 경우 로그인 페이지가 먼저 나옴
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {
  const [auth, setAuth] = useState(false); // true면 로그인이 됨, false면 로그인이 안됨

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
