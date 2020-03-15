import React, { useState } from "react";
import PopUpBox from "Components/Modules/PopUpBox/PopUpBox";

export const Article = (props: any) => {
    const [showPopUp, setShowPopUp] = useState(false);

    const popup = () => {
        setShowPopUp(true);
    };

    if (showPopUp) {
        return <PopUpBox />;
    }
    return (
        <a href="#" onClick={popup}>
            <div id="article-page">Article page</div>
        </a>
    );
};

export default Article;
