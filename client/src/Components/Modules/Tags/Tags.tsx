/* eslint-disable no-lone-blocks */
import React, { FC, MouseEvent, Fragment } from "react";
import ITags from "./ITags";
import styles from "./Tags.module.scss";
import LoaderTags from "Components/Patterns/Loader/LoaderTags/LoaderTags";

export const Tags: FC<ITags> = ({ tags, onClickTag, onClickTagByPage }) => {
    const [randomTag, setRandomTag] = React.useState("default_tag");

    const setRandomTagHandler = (tag: string) => {
        setRandomTag(tag);
        return randomTag;
    };

    if (tags) {
        if (tags.length > 0) {
            return (
                <Fragment>
                    {tags.map((tag: string) => {
                        const handleClick = (ev: MouseEvent<HTMLElement>) => {
                            ev.preventDefault();
                            setRandomTagHandler(tag);
                            onClickTag(tag, onClickTagByPage);
                        };
                        return (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a id={tag} href="" className={`${styles.tagDefault} ${styles.tagPill}`} key={tag} onClick={handleClick}>
                                {tag}
                            </a>
                        );
                    })}
                </Fragment>
            );
        }
    }
    return (
        <Fragment>
            <LoaderTags loadingIndicator={true} />
        </Fragment>
    );
};
