import React, { FC } from "react";
import { CommonLoading } from "react-loadingg";
import ILoaderDefault from "./ILoaderDefault";
import { SetState } from "../../../../Utils/StateHandler";
import { makeStyles } from "@material-ui/core";

const LoaderDefault: FC<ILoaderDefault> = (props: ILoaderDefault) => {
    const { loadingIndicator } = props;

    const style = makeStyles(() => {
        return {
            loader: {
                margin: "20px",
                padding: "20px",
                position: "relative"
            }
        };
    });

    return <div className={style().loader}>{loadingIndicator ? <CommonLoading /> : <div />}</div>;
};

export default SetState(LoaderDefault);
