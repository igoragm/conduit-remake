import React, { FC } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { SetState } from "../../../Utils/StateHandler";
import IButtonComponent from "./IButtonSecondary";

/**
 * ButtonComponent - Custom wrapper around Material UI Button component
 * @param props label, eventHandler, customStyle, customProperties
 */
const ButtonComponent: FC<IButtonComponent> = (props: IButtonComponent) => {
    const { label, id } = props;

    const style = makeStyles(() => {
        return {
            buttons: {
                margin: "2px",
                backgroundColor: "#85144b"
            }
        };
    });

    return (
        <Button id={id} variant="contained" color="secondary" className={style().buttons}>
            {label}
        </Button>
    );
};

export default SetState(ButtonComponent);
