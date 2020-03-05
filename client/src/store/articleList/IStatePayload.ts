import IArticleList from "Components/Modules/ArticleList/IArticleList";

interface IStatePayload {
    data: IArticleList;
    pageNumber: number;
    tags: string[];
    currentPage: number;
    pageManager: () => void;
    tag: string;
}

export default IStatePayload;
