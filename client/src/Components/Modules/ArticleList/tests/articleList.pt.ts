// tslint:disable-next-line:no-var-requires
const puppeteer = require("puppeteer");

describe("Article List test suite", () => {
    test("loads the articles", async () => {
        const pageUrl: string = "http://localhost:3000/";
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(pageUrl, { waitUntil: "domcontentloaded" });

        await page.waitForFunction(() => {
            return document.querySelector("#article-item");
        });

        const articles = await page.$$("#article-item");

        expect(articles.length).toBeGreaterThan(0);

        await page.close();
        await browser.close();
    });

    it("applies the tag filter", async () => {
        const pageUrl: string = "http://localhost:3000/";
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(pageUrl, { waitUntil: "domcontentloaded" });

        await page.waitForFunction(() => {
            return document.querySelector("#article-item");
        });

        const atag = await page.$("a#dragons");
        await atag.evaluate((btn: { click: () => any }) => btn.click());

        expect(atag).toBeTruthy();

        await page.waitForFunction(() => {
            return document.querySelector("#articleTag_dragons");
        });

        const filteredArticles = await page.$$("#articleTag_dragons");
        expect(filteredArticles.length).toBeGreaterThan(0);

        await page.close();
        await browser.close();
    });
});

export default {};
