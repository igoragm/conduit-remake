import { createLogger } from "redux-logger";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { Saga } from "redux-saga";
import { watchRequestArticlesAndTagsAction, watchSetPageAction, watchApplyFilterTagAction } from "./articleList/articlesActionsSaga";

const sagaMiddleware = createSagaMiddleware();

const getMiddleware = () => {
    if (process.env.NODE_ENV === "production") {
        return createStore(reducer, applyMiddleware(sagaMiddleware));
    } else {
        // Enable additional logging in non-production environments.
        return createStore(reducer, applyMiddleware(sagaMiddleware, createLogger()));
    }
};

const _store = getMiddleware();

sagaMiddleware.run(watchRequestArticlesAndTagsAction as Saga);
sagaMiddleware.run(watchSetPageAction as Saga);
sagaMiddleware.run(watchApplyFilterTagAction as Saga);

export const store = _store;
