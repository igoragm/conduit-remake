/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import ArticleList from "Components/Modules/ArticleList/ArticleList";
import styles from "./MainView.module.scss";
import IMainView from "./IMainView";
import { SetState } from "../../../Utils/StateHandler";

const GlobalFeedTab = () => {
    return (
        <li className="nav-item">
            <a href="" className={"nav-link active"}>
                Global Feed
            </a>
        </li>
    );
};

const MainView: FC<IMainView> = (props: IMainView) => {
    return (
        <div className={styles.homeContainer}>
            <ul className={styles.globalFeedOutline}>
                <GlobalFeedTab />
            </ul>

            <ArticleList
                pageManager={props.pageManager}
                articles={props.articles ? props.articles.articles : []}
                loadingIndicator={props.loadingIndicator}
                articlesCount={props.articles ? props.articles.articlesCount : 0}
                currentPage={props.currentPage}
                activeTag={props.activeTag}
                tags={props.articles ? props.articles.tags : []}
            />
        </div>
    );
};

export default SetState(MainView);
