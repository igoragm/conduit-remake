import { Action } from "redux";
import {
    HOME_PAGE_LOADED_START,
    APPLY_TAG_FILTER_START,
    APPLY_TAG_FILTER_END,
    HOME_PAGE_LOADED_END,
    SET_PAGE_START,
    SET_PAGE_END,
    UPDATE_TAG,
    SET_LOADING
} from "../../constants/actionTypes";
import IStatePayload from "./IStatePayload";
import IArticleList from "Components/Modules/ArticleList/IArticleList";

export interface ISetLoading extends Action<typeof SET_LOADING> {}

export interface IUpdateTag extends Action<typeof UPDATE_TAG> {
    activeTag: string;
}

export interface IPageLoadedStart extends Action<typeof HOME_PAGE_LOADED_START> {}

export interface IPageLoadedEnd extends Action<typeof HOME_PAGE_LOADED_END> {
    loadingIndicator: boolean;
    data: IArticleList;
}

export interface ISetPageStart extends Action<typeof SET_PAGE_START> {
    data?: IArticleList;
    pageNumber: number;
    loadingIndicator?: boolean;
}

export interface ISetPageEnd extends Action<typeof SET_PAGE_END> {
    payload: IStatePayload;
    pageNumber: IStatePayload;
}

export interface IFilterTagsStart extends Action<typeof APPLY_TAG_FILTER_START> {
    tag: string;
    page?: number;
    pageManager?: () => void;
}

export interface IFilterTagsEnd extends Action<typeof APPLY_TAG_FILTER_END> {
    payload: IStatePayload;
    tag: string;
    loadingIndicator: boolean;
}

export type IArticlesActions = IPageLoadedStart | IUpdateTag | IPageLoadedEnd | ISetPageStart | ISetPageEnd | IFilterTagsStart | IFilterTagsEnd | ISetLoading;
