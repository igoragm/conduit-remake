/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Enzyme, { ShallowWrapper } from "enzyme";
import { Home } from "../Home";
// disconnected component - great for testing

describe("Home init data", () => {
    let props: any = {};
    let useEffect: jest.SpyInstance<void, [React.EffectCallback, React.DependencyList?]>;
    let wrapper: ShallowWrapper<typeof Home>;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    it("calls getArticles", () => {
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

        props = {
            getArticles: jest.fn(),
            articles: {
                articleListReducer: {}
            }
        };

        wrapper = Enzyme.shallow(<Home {...props} />);
        expect(props.getArticles).toHaveBeenCalled();
    });
});
