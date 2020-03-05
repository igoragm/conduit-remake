import React, { FC } from "react";
import { CommonLoading } from "react-loadingg";
import ILoaderTags from "./ILoaderTags";
import { SetState } from "../../../../Utils/StateHandler";
import { makeStyles } from "@material-ui/core";

/**
 * BoxComponent - Custom wrapper arround Material UI Box component
 * @param props customStyle
 */
const LoaderTags: FC<ILoaderTags> = (props: ILoaderTags) => {
    const { loadingIndicator } = props;

    const style = makeStyles(() => {
        return {
            loader: {
                position: "relative",
                paddingTop: "50px"
            }
        };
    });

    return <div className={style().loader}>{loadingIndicator ? <CommonLoading /> : <div />}</div>;
};

export default SetState(LoaderTags);
