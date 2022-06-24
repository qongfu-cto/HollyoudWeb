import React from "react";
import PropertyRegister from "../../Molecules/propertyRegister";
import {usePropertyRegisterLayoutStylesEN} from "./styleEN";

const PropertyRegisterLayout = () => {
    const styles = usePropertyRegisterLayoutStylesEN();
    return (
        <div className={styles.container}>
            <PropertyRegister/>
        </div>
    );
};

export default PropertyRegisterLayout;
