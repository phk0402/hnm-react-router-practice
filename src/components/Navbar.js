import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
  const routeTo = useNavigate();

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;

      //url을 바꿔준다.
      routeTo(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      {auth ? (
        <div className="login-button" onClick={() => setAuth(false)}>
          <button>로그아웃</button>
        </div>
      ) : (
        <div className="login-button" onClick={() => routeTo("/login")}>
          <FontAwesomeIcon icon={faUser} />
          <button type="button">로그인</button>
        </div>
      )}
      <div className="logo-wrap" onClick={() => routeTo("/")}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"
          alt="로고"
        />
      </div>
      <div className="menu-wrap">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index} className="menu-item">
              {menu}
            </li>
          ))}
        </ul>
        <div className="search-wrap">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            className="c__search"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
