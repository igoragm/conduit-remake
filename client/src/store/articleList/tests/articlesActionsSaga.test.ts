import { _getArticlesAndTags } from "../articlesActionsSaga";
import { runSaga, Saga } from "redux-saga";
import { store } from "../../store";
import { JsonDecoder } from "ts.data.json";
import IAuthor from "Components/Modules/ArticleList/IAuthor";
import IArticleListItem from "Components/Modules/ArticleList/IArticleListItem";

test("get saga data and decode the JSON", async () => {
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

    interface IResponse {
        articles: IArticleListItem[];
        articlesCount: number;
        tags: string[];
    }

    let articlesData: IArticleListItem[] = [];
    let tagsData: string[] = [];

    const randomPageNumber = Math.floor(Math.random() * 40) + 1;

    await runSaga(store, _getArticlesAndTags as Saga, randomPageNumber)
        .toPromise()
        .then((response: IResponse) => {
            const { articles, tags } = response;
            articlesData = articles;
            tagsData = tags;
        });

    articlesData.forEach((article: IArticleListItem) => {
        // // @ts-ignore
        // article.author.username = 5;
        const decodedArticle = ArticlesDecoder.decode(article);
        // console.log("ORIGINAL ARTICLE DATA", article);
        // console.log("DECODED ARTICLE DATA", decodedArticle);
        expect(decodedArticle.isOk()).toEqual(true);
    });

    const decodedTags = StringArrayDecoder.decode(tagsData);
    expect(decodedTags.isOk()).toEqual(true);
});
