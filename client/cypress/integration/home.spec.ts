/// <reference types="cypress" />

type Url = string;
const url: Url = "http://localhost:3000/";

beforeEach(() => {
    cy.visit("/");
});

it("loads the page", () => {
    cy.contains("conduit app remake");
});

it("loads the articles", () => {
    const articles = cy.get("#articles-list > #article-item");
    articles.should("have.length", 10);
});

it("applies the tag filter", () => {
    const dragonsTag = cy.get("a#dragons");
    dragonsTag.click();

    const articles = cy.get("#tags-list > #articleTag_dragons");
    articles.should("have.length", 10);
});

it("opens the article details", () => {
    const articleBody = cy.get("#article-body");

    articleBody
        .invoke("attr", "href")
        .then(href => {
            cy.visit(href.toString());
        })
        .then(() => {
            cy.contains("Article page");
            const articlePage = cy.get("#article-page");
            articlePage.click();

            cy.contains("Click me!");

            const clickMeText = cy.get(".popup");
            clickMeText.click().then(() => {
                const popupTextClass = cy.get(".popuptext");
                cy.contains("Popup text...");
            });
        });
});

// cypress instructions
// install ts loader if neccecary
// add in index - on("file:preprocessor", cypressTypeScriptPreprocessor);
// install @cypress/webpack-preprocessor
// add /// <reference types="cypress" /> at the top of each spec file
