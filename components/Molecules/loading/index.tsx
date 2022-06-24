import React from "react";
import * as animationData from "../../../assets/lotties/loaders/loader.json";
import LottieAnimation from "../../Atoms/lottie";

/**
 * Error500
 *
 * Molecule component for the Error 500 popups.
 *
 * @param title - Optional props for the title.
 * @param message - Optional props for the message body.
 * @param ctaLabel - Optional props for the button label.
 * @param onClick - Optional function when the button is clicked.
 * @param previewOnly - Only used for previewing this component. Do not use.
 */
const Loading = () => {
    return (
        <LottieAnimation animationData={animationData} width={80} height={80}/>
    );
};
export default Loading;
