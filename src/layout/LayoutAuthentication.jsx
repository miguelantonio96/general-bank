import { Outlet } from "react-router";

export const LayoutAuthentication = () => {
  return (
    <section className="auth__layout__container">
       <ul className="breadcrumb">
        <li>Home</li>
        <li className="breadcrumb__pagina">Open Account</li>
      </ul>
      <Outlet />
    </section>
  );
};
