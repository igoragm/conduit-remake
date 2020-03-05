import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { SetState } from "../../../Utils/StateHandler";

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link id="appTitle" to="/" className={styles.navbarBrand}>
                    conduit app remake
                </Link>
            </div>
        </nav>
    );
};

export default SetState(Header);
