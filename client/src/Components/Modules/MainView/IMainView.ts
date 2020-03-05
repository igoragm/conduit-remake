import IArticles from "./IArticles";

interface IMainView {
    articles: IArticles;
    pageManager: (tag: string, page: number) => void;
    activeTag: string;
    articlesCount: number;
    currentPage: number;
    loadingIndicator: boolean;
}

export default IMainView;
