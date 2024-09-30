import React from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Todo</h1>
          <Link href="/admin">
          <h3>Admin</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
