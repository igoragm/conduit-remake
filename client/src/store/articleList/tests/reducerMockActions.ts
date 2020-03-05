import * as actions from "../../../constants/actionTypes";
import { IArticlesActions } from "../IArticlesAction";
import { mockInitArticlesData, mockStatePayloadData } from "./reducerMockData";

export const setLoading: IArticlesActions = {
    type: actions.SET_LOADING
};

export const setUpdateTag: IArticlesActions = {
    type: actions.UPDATE_TAG,
    activeTag: "tagMock"
};

export const homePageLoadedStart: IArticlesActions = {
    type: actions.HOME_PAGE_LOADED_START,
    loadingIndicator: true
};

export const homePageLoadedEnd: IArticlesActions = {
    type: actions.HOME_PAGE_LOADED_END,
    loadingIndicator: false,
    data: mockInitArticlesData
};

export const setPageStart: IArticlesActions = {
    type: actions.SET_PAGE_START,
    loadingIndicator: true,
    pageNumber: 7,
    data: mockInitArticlesData
};

export const setPageEnd: IArticlesActions = {
    type: actions.SET_PAGE_END,
    payload: mockStatePayloadData,
    pageNumber: mockStatePayloadData
};
