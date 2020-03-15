/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment } from "react";
import { Banner } from "Components/Modules/Banner/Banner";
import MainView from "Components/Modules/MainView/MainView";
import Tags from "Components/Modules/Tags";
import IHome from "./IHome";
import styles from "./Home.module.scss";
import { mapStateToProps, mapDispatchToProps } from "./HomeProps";
import { connect } from "react-redux";

export const Home: FC<IHome> = (props: IHome) => {
    React.useEffect(() => {
        props.getArticles();
    }, []);

    return (
        <Fragment>
            <Banner appName="conduit app remake" />

            <div data-testid="home" className={styles.splitscreen}>
                <MainView className={styles.left} {...props.articles.articleListReducer} />

                <div className={styles.right}>
                    <>
                        <p>Popular Tags</p>

                        <Tags
                            tags={props.articles.articleListReducer.articles ? props.articles.articleListReducer.articles.tags : []}
                            onClickTag={props.onClickTag}
                            onClickTagByPage={props.onClickTagByPage}
                        />
                    </>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(mapStateToProps(), mapDispatchToProps())(Home);

// https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850
