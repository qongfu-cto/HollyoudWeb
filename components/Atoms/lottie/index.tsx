import React from "react";
import Lottie from "react-lottie";

interface LottieAnimation {
    animationData: {};
    height: number;
    width: number;
}

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
const LottieAnimation = ({animationData, height, width}: LottieAnimation) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return <Lottie options={defaultOptions} height={height} width={width}/>;
};
export default LottieAnimation;
