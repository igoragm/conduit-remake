import { put, takeLatest, delay } from "redux-saga/effects";
import {
    HOME_PAGE_LOADED_START,
    APPLY_TAG_FILTER_END,
    HOME_PAGE_LOADED_END,
    SET_PAGE_START,
    SET_PAGE_END,
    APPLY_TAG_FILTER_START
} from "../../constants/actionTypes";
import { AnyAction } from "redux";
import { ISetPageStart } from "./IArticlesAction";
import IArticleListItem from "Components/Modules/ArticleList/IArticleListItem.js";

const API_ROOT = "https://conduit.productionready.io/api";
const encode = encodeURIComponent;
const limit = (count: number, offset: number) => `limit=${count}&offset=${offset ? offset * count : 0}`;

export function* watchRequestArticlesAndTagsAction(pageNumber: number) {
    yield takeLatest(HOME_PAGE_LOADED_START, function*(num) {
        const data = yield _getArticlesAndTags(pageNumber);

        yield put({
            type: HOME_PAGE_LOADED_END,
            data
        });
    });
}

export function* watchSetPageAction() {
    yield takeLatest(SET_PAGE_START, function*(props: ISetPageStart) {
        const { pageNumber } = props;
        const data = yield _getArticlesAndTags(pageNumber);
        yield put({
            type: SET_PAGE_END,
            payload: { data, pageNumber }
        });
    });
}

export function* _getArticlesAndTags(page: number) {
    const articlesUrl = `${API_ROOT}/articles?${limit(10, page)}`;
    const tagsUrl = API_ROOT + "/tags";

    const { articles, articlesCount } = yield fetch(articlesUrl).then(response => response.json());

    articles.forEach((element: IArticleListItem) => {
        if (!element.author.bio) {
            element.author.bio = "no bio!";
        }
    });

    const { tags } = yield fetch(tagsUrl).then(response => response.json());

    return { articles, articlesCount, tags };
}

export function* watchApplyFilterTagAction() {
    yield takeLatest(APPLY_TAG_FILTER_START, filterTagsHandler);
}

function* filterTagsHandler(params: AnyAction) {
    const { tag, pageManager, page } = params;

    let tags = [];
    const currentPage = page || 0;

    const filterByTagUrl = `${API_ROOT}/articles?tag=${encode(tag)}&${limit(10, currentPage)}`;

    if (page) {
        yield delay(3000);
        tags = yield fetch(API_ROOT + "/tags").then(response => response.json());
    }

    const data = yield fetch(filterByTagUrl).then(response => response.json());

    yield put({
        type: APPLY_TAG_FILTER_END,
        payload: {
            data,
            currentPage,
            tag,
            pageManager,
            tags
        }
    });
}
