import IArticleList from "Components/Modules/ArticleList/IArticleList";

interface IAppState {
    readonly activeTag: string;
    readonly loadingIndicator: boolean;
    readonly articles?: IArticleList;
    readonly currentPage: number;
    readonly pageNumber: number;
    readonly tag: string;
    readonly pageManager: () => void;
    readonly articlesCount: number;
}

export default IAppState;
