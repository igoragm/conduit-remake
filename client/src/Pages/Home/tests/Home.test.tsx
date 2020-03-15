/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Enzyme, { ReactWrapper } from "enzyme";
import { Home } from "../Home";
import IHome from "../IHome";
// disconnected component - great for testing

describe("Home init data", () => {
    let useEffect: jest.SpyInstance<void, [React.EffectCallback, React.DependencyList?]>;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    it("calls getArticles", () => {
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

        const props: IHome = {
            getArticles: jest.fn(),
            articles: {
                articleListReducer: {}
            },
            onClickTag: jest.fn(),
            loading: false,
            onClickTagByPage: jest.fn()
        };

        const wrapper: ReactWrapper<typeof Home> = Enzyme.mount(<Home {...props} />);
        const bannerContainer = wrapper.find("[data-testid='app-banner']").text();

        console.log(bannerContainer);
        expect(bannerContainer).toBe("conduit app remake");
        expect(props.getArticles).toHaveBeenCalled();
    });
});
