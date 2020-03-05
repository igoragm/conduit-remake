import IArticleListItem from "../ArticleList/IArticleListItem";

interface IArticle {
    favorite: (slug: string) => void;
    unfavorite: (slug: string) => void;
    article: IArticleListItem;
}

export default IArticle;
