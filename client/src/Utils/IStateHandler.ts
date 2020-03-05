import { Dispatch } from "react";
import { ActionFromReducer } from "redux";
import reducer from "../store/reducer";
import { MapStateToPropsParam } from "react-redux";

interface IProps {
    mapStateToProps: () => MapStateToPropsParam<any, any, any>;
    // tslint:disable-next-line:ban-types
    mapDispatchToProps?: (dispatch?: Dispatch<ActionFromReducer<typeof reducer>>) => Object;
}

export default IProps;
