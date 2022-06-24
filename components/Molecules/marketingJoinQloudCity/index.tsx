import React from "react";
import joinNow from "../../../assets/images/joinNow.png";
import QloudCityImage from "../../../assets/images/city.png";
import {Button} from "@mui/material";
import {joinQloudCityStylesEN} from "./stylesEN";
import Img from "components/Atoms/img";
import QText from "components/Atoms/text";
import {Branding} from "utilities/branding";
import {useRouter} from "next/router";

interface SignUpButtonProps {
    onClick?: () => {};
}

const MarketingJoinQloudCity = ({onClick}: SignUpButtonProps) => {
    const stylesEN = joinQloudCityStylesEN();
    const {push} = useRouter();

    return (
        <div className={stylesEN.parentContainer}>
            <Img
                imgProps={{layout: "fill", src: QloudCityImage}}
                container={{width: "100%"}}
            />

            <div className={stylesEN.childContainer}>
                {/* < className={stylesEN.spanStyleOne}>“We believe in Life Made Simple.” */}
                <QText
                    labelColor={Branding.Colors.primary.dark}
                    label={`"We believe in Life Made Simple."`}
                    textProps={{variant: "h3", fontWeight: "bold", lineHeight: 1.5}}
                />
                <Img source={joinNow}/>

                <div>
                    <Button
                        className={stylesEN.buttonStyles}
                        style={{
                            backgroundColor: "#45A0BC",
                            borderRadius: 12,
                            border: `1px solid ${Branding.Colors.white}`,
                        }}
                        onClick={() => push("/signup")}
                    >
            <span
                style={{
                    textTransform: "none",
                    color: Branding.Colors.white,
                    fontSize: 24,
                }}
            >
              {"Signup here"} &nbsp;
                <span
                    style={{fontSize: 18, fontWeight: 300, textTransform: "none"}}
                >{`It's Free!`}</span>
            </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MarketingJoinQloudCity;
