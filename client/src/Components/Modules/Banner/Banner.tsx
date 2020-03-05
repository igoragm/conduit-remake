import React, { FC } from "react";
import styles from "./Banner.module.scss";
import IBanner from "./IBanner";

/**
 * Conduit app banner
 * @param props app name
 */
export const Banner: FC<IBanner> = (props: IBanner) => {
    const { appName } = props;
    return (
        <div className={styles.banner}>
            <h1 id="banner" className={styles.logoFont}>
                {appName.toLowerCase()}
            </h1>
            <p>A place to share your knowledge.</p>
        </div>
    );
};

// export default SetState(Banner);
