import Article from "Components/Modules/Article/Article";
import ListPagination from "Components/Modules/ListPagination/index";
import React, { FC, Fragment } from "react";
import IArticleList from "./IArticleList";
import IArticleListItem from "./IArticleListItem";
import LoaderDefault from "Components/Patterns/Loader/LoaderDefault/LoaderDefault";

export const ArticleList: FC<IArticleList> = (props: IArticleList) => {
    if (props.articles.length === 0) {
        return (
            <div>
                <LoaderDefault loadingIndicator={true} />
            </div>
        );
    }

    const favorite = (slug: string) => {
        console.log("Favorite!", slug);
    };

    const unfavorite = (slug: string) => {
        console.log("Not Favorite!", slug);
    };

    return (
        <Fragment>
            {props.articles ? (
                props.articles.map((article: IArticleListItem) => {
                    return (
                        <div id="articles-list" key={article.createdAt}>
                            <Article favorite={favorite} unfavorite={unfavorite} article={article} />
                        </div>
                    );
                })
            ) : (
                <div />
            )}

            <ListPagination
                pageManager={props.pageManager}
                activeTag={props.activeTag}
                articlesCount={props.articlesCount}
                currentPage={props.currentPage || 0}
                loadingIndicator={props.loadingIndicator}
            />
        </Fragment>
    );
};

// export default SetState(ArticleList);
export default ArticleList;
