import IArticleList from "Components/Modules/ArticleList/IArticleList";
export const mockStateData = {
    activeTag: "",
    loadingIndicator: false,
    articles: {} as IArticleList,
    currentPage: 1,
    pageNumber: 1,
    tag: "",
    pageManager: () => {
        console.log("test");
    },
    articlesCount: 1
};

export const mockInitArticlesData = {
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

export const mockStatePayloadData = {
    data: mockInitArticlesData,
    pageNumber: 55,
    tags: ["tags_payload_mock"],
    currentPage: 66,
    pageManager: () => console.log("test"),
    tag: "mock_tag"
};
