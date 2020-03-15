import React from "react";
import ArticleList from "../ArticleList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import Enzyme from "enzyme";
import articlesReducer from "store/articleList/articleListReducer";
import { wait, waitForDomChange } from "@testing-library/react";

const mockStore = configureStore();

describe("<ArticleList />", () => {
    it("renders the ArticleList", () => {
        const expectedArticlesData = {
            pageManager: (tag: string, page: number) => console.log("test"),
            articles: [
                {
                    title: "title",
                    slug: "slug",
                    body: "body",
                    createdAt: "October 13, 2015 11:13:00",
                    updatedAt: "updatedAt",
                    tagList: ["tagList"],
                    description: "description",
                    author: {
                        username: "username",
                        bio: "bio",
                        image: "image",
                        following: true
                    },
                    favorited: true,
                    favoritesCount: 77
                },
                {
                    title: "title",
                    slug: "slug",
                    body: "body",
                    createdAt: "October 13, 2014 11:13:00",
                    updatedAt: "updatedAt",
                    tagList: ["tagList"],
                    description: "description",
                    author: {
                        username: "username",
                        bio: "bio",
                        image: "image",
                        following: true
                    },
                    favorited: true,
                    favoritesCount: 77
                }
            ],
            activeTag: "activeTag",
            articlesCount: 777,
            currentPage: 7,
            loadingIndicator: false,
            tags: ["tags"]
        };
        const history = createMemoryHistory();
        const store = mockStore(expectedArticlesData);
        const articleListWrapper = Enzyme.mount(
            <Provider store={store}>
                <Router history={history}>
                    <ArticleList {...expectedArticlesData} />
                </Router>
            </Provider>
        );

        expect(articleListWrapper.find("#article-item").length).toEqual(2);

        expectedArticlesData.articles.splice(0, 1);
        articleListWrapper.setProps({ expectedArticlesData });

        console.log(articleListWrapper.props().expectedArticlesData.articles.length);
        expect(articleListWrapper.props().expectedArticlesData.articles.length).toBe(1);
    });
});

export default {};
