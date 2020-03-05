interface IListPagination {
    setPageCallback: (page: number) => void;
    pageManager: (tag: string, page: number) => void;
    activeTag: string;
    articlesCount: number;
    currentPage: number;
    loadingIndicator: boolean;
}

export default IListPagination;
