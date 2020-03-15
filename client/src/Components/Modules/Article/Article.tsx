import React, { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import IArticle from "./IArticle";
import { SetState } from "../../../Utils/StateHandler";
import styles from "./Article.module.scss";

const Article: FC<IArticle> = (props: IArticle) => {
    const { favorite, unfavorite, article } = props;

    const handleClick = (ev: MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        if (article.favorited) {
            unfavorite(article.slug);
        } else {
            favorite(article.slug);
        }
    };

    return (
        <div data-testid="rtl-article-id" id="article-item" className={styles.articlePreview}>
            <div className={styles.articleMeta}>
                <Link to={`/@${article.author.username}`}>
                    <img
                        className={styles.articleMetaImg}
                        src={article.author.image ? article.author.image : "https://loremflickr.com/320/240"}
                        alt={article.author.username}
                    />
                </Link>

                <div className={styles.info}>
                    <Link id="author" className={styles.author} to={`/@${article.author.username}`}>
                        {article.author.username}
                    </Link>
                    <span id="createdAt" className={styles.date}>
                        {new Date(article.createdAt).toDateString()}
                    </span>
                </div>

                <div className={styles.pullXsRight}>
                    <button id="favoritesCount" className={styles.tagBtn} onClick={handleClick}>
                        <i className={styles.ionHeart} /> {article.favoritesCount}
                    </button>
                </div>
            </div>

            <Link id="article-body" target="_blank" to={`/article/${article.slug}`} className={styles.previewLink}>
                <h1 className={styles.articlePreviewH1} id="articleTitle">
                    {article.title}
                </h1>
                <p id="articleDescription">{article.description}</p>
                <span>Read more...</span>
                <ul id="tags-list" className={styles.tagList}>
                    {article.tagList.map((tag: string) => {
                        const id = `articleTag_${tag}`;
                        return (
                            <li id={id} className={styles.tag} key={tag}>
                                {tag}
                            </li>
                        );
                    })}
                </ul>
            </Link>
        </div>
    );
};

export default SetState(Article);
