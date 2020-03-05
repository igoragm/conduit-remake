import reducer from "../articleListReducer";
import { mockStateData } from "./reducerMockData";
import * as mockActions from "./reducerMockActions";
import { JsonDecoder } from "ts.data.json";
import IAuthor from "Components/Modules/ArticleList/IAuthor";
import IArticleListItem from "Components/Modules/ArticleList/IArticleListItem";

const expectedArticlesData = {
    pageManager: (tag: string, page: number) => console.log("test"),
    articles: [
        {
            title: "title",
            slug: "slug",
            body: "body",
            createdAt: "createdAt",
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

const expectedStatePayloadData = {
    data: expectedArticlesData,
    pageNumber: 55,
    tags: ["tags_payload_mock"],
    currentPage: 66,
    pageManager: () => console.log("test"),
    tag: "mock_tag"
};

const StringArrayDecoder = JsonDecoder.array<string>(JsonDecoder.string, "TagListDecoder");

const AuthorDecoder = JsonDecoder.object<IAuthor>(
    { username: JsonDecoder.string, bio: JsonDecoder.string, image: JsonDecoder.string, following: JsonDecoder.boolean },
    "AuthorDecoder"
);

const ArticlesDecoder = JsonDecoder.object<IArticleListItem>(
    {
        title: JsonDecoder.string,
        slug: JsonDecoder.string,
        body: JsonDecoder.string,
        createdAt: JsonDecoder.string,
        updatedAt: JsonDecoder.string,
        tagList: StringArrayDecoder,
        description: JsonDecoder.string,
        author: AuthorDecoder,
        favorited: JsonDecoder.boolean,
        favoritesCount: JsonDecoder.number
    },
    "ArticlesDecoder"
);

describe("Reducer Suite", () => {
    it("should set loading indicator", () => {
        expect(reducer(mockStateData, mockActions.setLoading).loadingIndicator).toEqual(true);
    });

    it("should update the tag", () => {
        expect(reducer(mockStateData, mockActions.setUpdateTag).activeTag).toEqual("tagMock");
    });

    it("should start loading the initial data", () => {
        expect(reducer(mockStateData, mockActions.homePageLoadedStart).loadingIndicator).toEqual(true);
    });

    it("should finish loading the page with the following data present:", () => {
        expect(reducer(mockStateData, mockActions.homePageLoadedEnd).loadingIndicator).toEqual(false);
        expect(reducer(mockStateData, mockActions.homePageLoadedEnd).articles?.articles[0]).toEqual(expectedArticlesData.articles[0]);
    });

    it("should set the page with the following page number and the following data:", () => {
        expect(reducer(mockStateData, mockActions.setPageStart).loadingIndicator).toEqual(true);
        expect(reducer(mockStateData, mockActions.setPageStart).articles?.articles[0]).toEqual(expectedArticlesData.articles[0]);
        expect(reducer(mockStateData, mockActions.setPageStart).currentPage).toEqual(expectedArticlesData.currentPage);
    });

    it("should have the following data on set page end:", () => {
        expect(reducer(mockStateData, mockActions.setPageEnd).articles?.articles[0]).toEqual(expectedStatePayloadData.data.articles[0]);
        expect(reducer(mockStateData, mockActions.setPageEnd).pageNumber).toEqual(55);
    });

    it("should decode the data as expected", () => {
        const reducerArticles = reducer(mockStateData, mockActions.homePageLoadedEnd).articles?.articles;

        reducerArticles?.forEach((article: IArticleListItem) => {
            const decodedArticle = ArticlesDecoder.decode(article);
            console.log(decodedArticle);
            expect(decodedArticle.isOk()).toEqual(true);
        });
    });
});
