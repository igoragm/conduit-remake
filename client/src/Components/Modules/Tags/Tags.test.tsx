import React, { Dispatch } from "react";
import Enzyme from "enzyme";
import { Tags } from "./Tags";

describe("Tags setTag handler", () => {
    const tags = ["tag1", "tag2", "baby", "flowers", "money", "caramel", "cars", "japan"];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("sets state randomTag", () => {
        const setRandomTag: Dispatch<any> = jest.fn();
        const useStateSpy: any = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((init: any) => [init, setRandomTag]);
        // tslint:disable-next-line:no-empty
        const wrapper: any = Enzyme.shallow(<Tags tags={tags} onClickTagByPage={() => {}} onClickTag={() => {}} />);

        // tslint:disable-next-line:no-empty
        const ev = { preventDefault: () => {} };

        wrapper
            .find("#flowers")
            .props()
            .onClick(ev);

        expect(setRandomTag).toHaveBeenCalledWith("flowers");

        wrapper
            .find("#tag2")
            .props()
            .onClick(ev);

        expect(setRandomTag).toHaveBeenCalledWith("tag2");
    });
});
