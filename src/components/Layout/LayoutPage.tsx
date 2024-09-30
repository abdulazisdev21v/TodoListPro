import React, { FC } from "react";
import Header from "./Header/Header";
interface LayoutPageProps {
  children: React.ReactNode;
}
const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default LayoutPage;
