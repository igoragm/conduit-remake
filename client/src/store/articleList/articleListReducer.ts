import {
    HOME_PAGE_LOADED_START,
    APPLY_TAG_FILTER_END,
    HOME_PAGE_LOADED_END,
    SET_PAGE_START,
    SET_PAGE_END,
    UPDATE_TAG,
    SET_LOADING
} from "../../constants/actionTypes";
import { Reducer } from "react";
import { IArticlesActions } from "./IArticlesAction";
import IAppState from "./IAppState";

const articlesReducer: Reducer<IAppState, IArticlesActions> = (state = {} as IAppState, action: IArticlesActions) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loadingIndicator: true };
        case UPDATE_TAG:
            return { ...state, activeTag: action.activeTag };
        case HOME_PAGE_LOADED_START:
            return { ...state, loadingIndicator: true };
        case HOME_PAGE_LOADED_END:
            return {
                ...state,
                loadingIndicator: false,
                articles: action.data
            };
        case SET_PAGE_START:
            return {
                ...state,
                articles: action.data,
                currentPage: action.pageNumber,
                loadingIndicator: true
            };
        case SET_PAGE_END:
            return {
                ...state,
                articles: action.payload.data,
                pageNumber: action.payload.pageNumber,
                loadingIndicator: false
            };
        case APPLY_TAG_FILTER_END:
            action.payload.data.tags = state.articles ? state.articles.tags : action.payload.tags;

            console.log("CURRENT PAGE", action.payload.currentPage);
            return {
                ...state,
                pageManager: state.pageManager || action.payload.pageManager,
                articles: action.payload.data,
                tag: action.tag,
                currentPage: action.payload.currentPage,
                activeTag: action.payload.tag,
                loadingIndicator: false
            };
        default:
            return state;
    }
};

export default articlesReducer;
