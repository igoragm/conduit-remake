import IAuthor from "./IAuthor";

interface IArticleListItem {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: string[];
    description: string;
    author: IAuthor;
    favorited: boolean;
    favoritesCount: number;
}

export default IArticleListItem;
