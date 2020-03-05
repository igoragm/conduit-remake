import React from "react";
import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";

describe("App Test Suite", () => {
    let wrapper: ShallowWrapper<typeof App>;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test("App snapshot renders", () => {
        const appJson = toJson(wrapper);

        expect(appJson).toMatchSnapshot();
    });

    test("App component ID", () => {
        const appComponent = wrapper.find("#app");

        expect(appComponent).toHaveLength(1);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});
