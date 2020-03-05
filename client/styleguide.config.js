module.exports = {
    sections: [
        {
            name: "Components",
            sections: [
                {
                    name: "Modules",
                    sections: [
                        {
                            name: "Article",
                            content: "src/Components/Modules/Article/Article.md"
                        },
                        {
                            name: "ArticleList",
                            content: "src/Components/Modules/ArticleList/ArticleList.md"
                        },
                        {
                            name: "Banner",
                            content: "src/Components/Modules/Banner/Banner.md"
                        },
                        {
                            name: "Header",
                            content: "src/Components/Modules/Header/Header.md"
                        },
                        {
                            name: "ListPagination",
                            content: "src/Components/Modules/ListPagination/ListPagination.md"
                        },
                        {
                            name: "MainView",
                            content: "src/Components/Modules/MainView/MainView.md"
                        },
                        {
                            name: "Tags",
                            content: "src/Components/Modules/Tags/Tags.md"
                        }
                    ]
                },
                {
                    name: "Patterns",
                    sections: [
                        {
                            name: "ButtonSecondary",
                            content: "src/Components/Patterns/ButtonSecondary/ButtonSecondary.md"
                        },
                        {
                            name: "Loader",
                            sections: [
                                {
                                    name: "LoaderDefault",
                                    content: "src/Components/Patterns/Loader/LoaderDefault/LoaderDefault.md"
                                },
                                {
                                    name: "LoaderTags",
                                    content: "src/Components/Patterns/Loader/LoaderTags/LoaderTags.md"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "constants"
        },
        {
            name: "Pages"
        },
        {
            name: "store",
            sections: [
                {
                    name: "articleList",
                    content: "src/store/articleList/articleList.md"
                }
            ]
        },
        {
            name: "Utils",
            content: "src/Utils/StateHandler.md"
        }
    ]
};
