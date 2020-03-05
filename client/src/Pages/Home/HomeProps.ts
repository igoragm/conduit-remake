import IArticleListItem from "Components/Modules/ArticleList/IArticleListItem";
import { ActionFromReducer, Dispatch } from "redux";
import articlesReducer from "../../store/articleList/articleListReducer";
import { HOME_PAGE_LOADED_START, UPDATE_TAG, APPLY_TAG_FILTER_START, SET_LOADING } from "../../constants/actionTypes";

// tslint:disable-next-line:no-empty
export const GetProps = () => {};

export const mapStateToProps = () => (articles: IArticleListItem[], loadingIndicator: boolean) => ({
    articles,
    loadingIndicator
});

export const mapDispatchToProps = () => (dispatch: Dispatch<ActionFromReducer<typeof articlesReducer>>) => ({
    getArticles: () => {
        dispatch({ type: HOME_PAGE_LOADED_START });
    },
    onClickTag: (tag: string, pageManager: () => void) => {
        dispatch({ type: UPDATE_TAG, activeTag: tag });
        dispatch({ type: APPLY_TAG_FILTER_START, tag, pageManager });
    },
    onClickTagByPage: (tag: string, page: number) => {
        dispatch({ type: SET_LOADING });
        dispatch({ type: APPLY_TAG_FILTER_START, tag, page });
    }
});
