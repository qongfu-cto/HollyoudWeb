import React from "react";
import {aboutUsContent} from "./data";
import {aboutUsStyling} from "./stylesEN";

interface aboutUsProps {
    content?: string;
    onClick?: () => {};
}

const MarketingAboutUS = ({content, onClick}: aboutUsProps) => {
    const stylesEN = aboutUsStyling();
    const contentEN = aboutUsContent;

    return (
        <div className={stylesEN.container}>
            <div className={stylesEN.aboutUsContainer}>
                <h1 className={stylesEN.aboutUsHeaderStyle}> About us </h1>
                <p className={stylesEN.aboutUSContentStyle}>
                    {" "}
                    {content ?? contentEN.aboutUsParaOne}{" "}
                </p>
                <p className={stylesEN.aboutUSContentStyle}>
                    {" "}
                    {content ?? contentEN.aboutUsParaTwo}{" "}
                </p>

                <div style={{position: "relative", top: 145, left: 25}}>
                    <p className={stylesEN.aboutUSContentStyle}>
                        {" "}
                        {content ?? contentEN.aboutUsParaThree}{" "}
                    </p>
                    <p
                        className={stylesEN.aboutUSContentStyle}
                        style={{position: "relative", top: 15}}
                    >
                        {" "}
                        {content ?? contentEN.aboutUsParaFour}{" "}
                    </p>
                </div>
            </div>

            <p className={stylesEN.quoteStyling}>{contentEN.quote}</p>
        </div>
    );
};

export default MarketingAboutUS;
