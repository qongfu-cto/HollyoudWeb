import React from "react";
import Img from "../../Atoms/img";
import Text from "../../Atoms/text";
import QloudEstateImg from "../../../assets/images/QloudEstate_Image.svg";
import QloudEstateLogo from "../../../assets/images/QloudEstateSimpleLogo.svg";
import {Branding} from "../../../utilities/branding";
import {usePropertyRegisterStylesEN} from "./styleEN";
import TextButton from "../../Atoms/textButton";

const PropertyRegister = () => {
    const styles = usePropertyRegisterStylesEN();

    return (
        <div className={styles.container}>
            <Img
                source={QloudEstateImg}
                alt="Qloud Estate image"
                container={{margin: 18}}
            />
            <Img source={QloudEstateLogo} alt="Qloud Estate"/>

            <Text
                label="Do you own Properties?"
                labelStyle={{
                    fontSize: 32,
                    marginTop: 10,
                }}
                labelColor={Branding.Colors.black[86]}
            />
            <TextButton
                label="Register as a Property Owner"
                labelColor={Branding.Colors.primary.normal}
            />
        </div>
    );
};

export default PropertyRegister;
