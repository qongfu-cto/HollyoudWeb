import React from "react";
import {ReactElement} from "react-markdown/lib/react-markdown";
import {useHeaderLayoutRightSideStylesEN} from "./styleEN";

interface headerRightProps {
    right?: ReactElement;
    center?: ReactElement;
    left?: ReactElement;
    unStyled?: boolean;
}

const HeaderLayoutRightSide = ({
                                   right,
                                   center,
                                   left,
                                   unStyled,
                               }: headerRightProps) => {
    const styles = useHeaderLayoutRightSideStylesEN();

    if (unStyled) {
        return (
            <div style={{display: "inherit", alignItems: "inherit"}}>
                <div className={styles.btn}>{left}</div>

                {center}
                <div
                    style={{marginLeft: 5, display: "inherit", alignItems: "inherit"}}
                >
                    {right}
                </div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div style={{display: "inherit", alignItems: "inherit"}}>
                <div className={styles.btn}>{left}</div>

                {center}
                <div
                    style={{marginLeft: 5, display: "inherit", alignItems: "inherit"}}
                >
                    {right}
                </div>
            </div>
        </div>
    );
};

export default HeaderLayoutRightSide;
