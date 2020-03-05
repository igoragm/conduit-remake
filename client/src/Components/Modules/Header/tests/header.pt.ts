// tslint:disable-next-line:no-var-requires
const puppeteer = require("puppeteer");

describe("Header test suite", () => {
    test("loads the page and returns title name", async () => {
        const pageUrl: string = "http://localhost:3000/";
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(pageUrl, { waitUntil: "domcontentloaded" });

        const appTitle = await page.$("#appTitle");

        const name = await page.evaluate((banner: { innerHTML: any }) => banner.innerHTML, appTitle);

        expect(name).toBe("conduit app remake");

        await page.close();
        await browser.close();
    });
});

export default {};
