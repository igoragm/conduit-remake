import React from "react";
import "./PopUpBox.css";

export const PopUpBox = () => {
    const clickMe = () => {
        const kurcina = {
            classList: {
                toggle: () => {
                    console.log("urcina");
                }
            }
        };
        const popup = document.getElementById("myPopup") || kurcina;
        popup.classList.toggle("show");
        console.log("metak");
    };

    return (
        <div className="popup" onClick={clickMe}>
            Click me!
            <span className="popuptext" id="myPopup">
                Popup text...
            </span>
        </div>
    );
};

export default PopUpBox;
