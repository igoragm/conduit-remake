import IArticleListItem from "Components/Modules/ArticleList/IArticleListItem";

interface IArticles {
    articles: IArticleListItem[];
    articlesCount: number;
    tags: string[];
}

export default IArticles;
