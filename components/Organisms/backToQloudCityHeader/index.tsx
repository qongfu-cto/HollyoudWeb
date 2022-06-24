import React from "react";
import Home from "../../../assets/icons/home.svg";
import Img from "../../Atoms/img";
import TextButton from "../../Atoms/textButton";
import HeaderLayoutRightSide from "../../Molecules/headerLayoutRightSide";
import {useBackToQloudCityStylesEN} from "./styleEN";
import QloudCityLogo from "../../../assets/images/QloudCitySimpleLogo.svg";

interface BackToQloudCityHeaderProps {
    withLogo?: boolean;
}

const BackToQloudCityHeader = ({withLogo}: BackToQloudCityHeaderProps) => {
    const styles = useBackToQloudCityStylesEN();
    {
        if (withLogo)
            return (
                <div className={styles.container}>
                    <Img source={QloudCityLogo} alt="QloudCity"/>
                    <HeaderLayoutRightSide
                        right={<TextButton label="Back To QloudCity(Quest)"/>}
                        center={
                            <div className={styles.imgcontainer}>
                                <Img source={Home} alt="QloudCityHome"/>
                            </div>
                        }
                        unStyled
                    />
                </div>
            );
    }

    return (
        <HeaderLayoutRightSide
            right={<TextButton label="Back To QloudCity(Quest)"/>}
            center={
                <div className={styles.imgcontainer}>
                    <Img source={Home} alt="QloudCityHome"/>
                </div>
            }
        />
    );
};

export default BackToQloudCityHeader;
