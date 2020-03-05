import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Home } from "../Home";
import IHome from "../IHome";

describe("<Home />", () => {
    it("renders the Home page", async () => {
        const props: IHome = {
            getArticles: jest.fn(),
            articles: {
                articleListReducer: {}
            },
            onClickTag: jest.fn(),
            loading: false,
            onClickTagByPage: jest.fn()
        };

        const homeContainer = render(<Home {...props} />);

        expect(homeContainer).toMatchSnapshot();

        expect(document.querySelector("#banner")?.innerHTML).toBe("conduit app remake");
    });
});

// great tutorial for RTL with TS
// https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript
// for css scss modules use "identity-obj-proxy" for mock in jest config moduleNameMapper npm i identity-obj-proxy -D
// or maybe:
// "transform": {
//     "^.+\\.js$": "babel-jest", - ts-jest in my case
//     ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
//   }
