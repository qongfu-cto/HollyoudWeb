import React from "react";
import {Branding} from "../../../utilities/branding";
import QButton from "../../Atoms/button";
import Text from "../../Atoms/text";
import {useLandingPageFooterStylesEN} from "./styleEN";

interface LandingPageProps {
    showFooter: () => void;
    label: string;
}

const LandingPageFooter = ({showFooter, label}: LandingPageProps) => {
    const styles = useLandingPageFooterStylesEN();
    const year = new Date().getFullYear();
    return (
        <footer className={styles.container}>
            <Text
                labelColor={Branding.Colors.white}
                label={`Copyright © ${year} by Qloudcity Technologies W.L.L. All Rights Reserved.`}
                labelStyle={{fontSize: 12}}
            />
            <QButton
                onClick={showFooter}
                label={label}
                outline
                labelStyles={{color: Branding.Colors.primary.normal}}
            />
        </footer>
    );
};

export default LandingPageFooter;
