import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Article from "../Article";
import { Router } from "react-router";
import { favoriteMock, unfavoriteMock, articleMock } from "./articleMockData";

import { createMemoryHistory } from "history";

describe("Articles Test Suite", () => {
    const history = createMemoryHistory();
    const wrapper = render(
        <Router history={history}>
            <Article favorite={favoriteMock} unfavorite={unfavoriteMock} article={articleMock} />
        </Router>
    );

    test("Article snapshot renders", () => {
        const previewJson = toJson(wrapper);
        expect(previewJson).toMatchSnapshot();
    });

    it("displays the mock article with the following data", () => {
        const articleAuthor = wrapper.find("#author");
        const articleCreatedAt = wrapper.find("#createdAt");
        const articleFavoritesCount = wrapper.find("#favoritesCount");
        const articleTitle = wrapper.find("#articleTitle");
        const articleDescription = wrapper.find("#articleDescription");

        console.log(articleAuthor.text(), articleCreatedAt.text(), articleFavoritesCount.text(), articleTitle.text(), articleDescription.text());

        expect(articleAuthor.text()).toEqual("john smith");
        expect(articleCreatedAt.text()).toEqual("Wed Jan 01 2020");
        expect(articleFavoritesCount.text()).toEqual(" 77");
        expect(articleTitle.text()).toEqual("this is a story");
        expect(articleDescription.text()).toEqual("mock description");
    });
});
