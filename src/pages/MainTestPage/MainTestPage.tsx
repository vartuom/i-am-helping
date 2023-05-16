import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./MainTestPage.module.scss";

const TestPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.page}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/volunteer">Волонтёр</Link>
        </li>
        <li className={styles.item}>
          <Link to="/recipient">Реципиент</Link>
        </li>
        <li className={styles.item}>
          <Link to="/admin">Администратор</Link>
        </li>
        <li className={styles.item}>
          <Link to="/mainadmin">Главный администратор</Link>
        </li>
      </ul>
    </div>
  );
};

export default TestPage;
