import { useState, useContext } from "react";

import DataContext from "../../context";
import Btn from "../Btn/index";

import styles from "./header.module.scss";

export default function Header() {
  const { users, currentUser, setCurrentUser } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const userData = users.find((u) => u.uuid === currentUser);
  const openClass = isOpen ? styles.open : styles.close;

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar__brand}>Merqueo Test</h1>
      <div className={`${styles.headerMenu} ${openClass}`}>
        {userData && <p className={styles.userActive}>Hola {userData.name}!</p>}
        {users && (
          <div className={styles.users}>
            <p>¿Quieres cambiar de usuario?</p>
            <ul>
              {users.map((user) => {
                const { uuid, name } = user;
                return (
                  userData.uuid !== uuid && (
                    <li
                      onClick={() => {
                        setCurrentUser(uuid);
                        setIsOpen(false);
                      }}
                      key={uuid}
                    >
                      {name}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        )}
        <span
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cerrar
        </span>
      </div>
      <Btn
        clickHandler={() => {
          setIsOpen(true);
        }}
        icon="menu"
      />
    </nav>
  );
}
