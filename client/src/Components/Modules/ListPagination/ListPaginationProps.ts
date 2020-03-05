/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from "react";
import { ActionFromReducer, Action } from "redux";
import reducer from "../../../store/reducer";
import { SET_PAGE_START } from "../../../constants/actionTypes";

// tslint:disable-next-line:no-empty
const GetProps = () => {};

export const mapStateToProps = () => (pageNumber: number, loading: boolean) => ({
    pageNumber,
    loading
});

export const mapDispatchToProps = () => (dispatch: Dispatch<ActionFromReducer<typeof reducer>>) => ({
    setPageCallback: (pageNumber: number) => {
        dispatch({ type: SET_PAGE_START, pageNumber } as Action<any>);
    }
});
