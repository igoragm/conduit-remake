import IArticleListItem from "./IArticleListItem";

interface IArticleList {
    pageManager: (tag: string, page: number) => void;
    articles: IArticleListItem[];
    activeTag: string;
    articlesCount: number;
    currentPage: number;
    loadingIndicator: boolean;
    tags: string[];
}

export default IArticleList;
