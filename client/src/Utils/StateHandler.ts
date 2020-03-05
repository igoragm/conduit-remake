import { connect } from "react-redux";
import IStateHandler from "./IStateHandler";

export const SetState = (Component: React.FC<any>, GetProps?: IStateHandler) => {
    if (GetProps && GetProps.mapStateToProps) {
        const { mapStateToProps, mapDispatchToProps } = GetProps;

        const ComponentState = mapDispatchToProps ? connect(mapStateToProps(), mapDispatchToProps())(Component) : connect(mapStateToProps())(Component);

        return ComponentState;
    }

    return Component;
};
