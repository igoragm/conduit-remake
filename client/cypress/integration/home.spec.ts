/// <reference types="cypress" />

type Url = string;
const url: Url = "http://localhost:3000/";
it("loads the page", () => {
    cy.visit(url);
    cy.contains("conduit app remake");
});

it("loads the articles", () => {
    cy.visit(url);

    const articles = cy.get("#articles-list > #article-item");
    articles.should("have.length", 10);
});

it("applies the tag filter", () => {
    cy.visit(url);

    const dragonsTag = cy.get("a#dragons");
    dragonsTag.click();

    const articles = cy.get("#tags-list > #articleTag_dragons");
    articles.should("have.length", 10);
});

it("opens the article details", () => {
    const articleBody = cy.get("#articleTitle");
    articleBody.click();

    cy.contains("Article page");
});

// cypress instructions
// install ts loader if neccecary
// add in index - on("file:preprocessor", cypressTypeScriptPreprocessor);
// install @cypress/webpack-preprocessor
// add /// <reference types="cypress" /> at the top of each spec file
