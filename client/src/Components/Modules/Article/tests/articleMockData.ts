// tslint:disable-next-line:only-arrow-functions
export const favoriteMock = function() {
    console.log("fav!");
};

// tslint:disable-next-line:only-arrow-functions
export const unfavoriteMock = function() {
    console.log("unfav!");
};

export const articleMock = {
    title: "this is a story",
    slug: "mock slug",
    body: "pozovi nekad zbog struje",
    createdAt: "02:02:2020",
    updatedAt: "03:03:2030",
    tagList: ["mock tagList"],
    description: "mock description",
    author: {
        username: "john smith",
        bio: "mock bio",
        image: "mock image",
        following: true
    },
    favorited: true,
    favoritesCount: 77
};
