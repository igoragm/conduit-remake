/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, MouseEvent } from "react";
import IListPagination from "./IListPagination";

import styles from "./ListPagination.module.scss";
import ButtonComponent from "Components/Patterns/ButtonSecondary/ButtonSecondary";
import LoaderComponent from "Components/Patterns/Loader/LoaderDefault/LoaderDefault";
import { Link } from "react-router-dom";

export const ListPagination: FC<IListPagination> = (props: IListPagination) => {
    if (props.articlesCount <= 10) {
        return null;
    }

    const { pageManager, setPageCallback, activeTag, articlesCount, currentPage } = props;

    const range = [];
    for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
        range.push(i);
    }

    const setPage = (page: number) => {
        if (pageManager) {
            pageManager(activeTag, page);
        } else {
            setPageCallback(page);
        }
    };

    return (
        <ul className={styles.pagination}>
            <LoaderComponent loadingIndicator={props.loadingIndicator} />
            {range.map(v => {
                const isCurrent = v === currentPage;
                const onClick = (ev: MouseEvent<HTMLElement>) => {
                    ev.preventDefault();
                    setPage(v);
                };

                const pageItemClass = isCurrent ? "page-item active" : styles.pageItem;
                // <Link to={`/@${article.author.username}`}>
                return (
                    <Link to={`/home/${v + 1}`} className={pageItemClass} onClick={onClick} key={v.toString()}>
                        <ButtonComponent label={v + 1} />
                    </Link>
                );
            })}
        </ul>
    );
};
