import React from "react";
import Lottie from "react-lottie";
import {Styles} from "./style";
//import { useGlobalsStylesEn } from "../../../styles/globalStylesEn";
// Imported Lottie File
import * as animationData from "../../../assets/lotties/Errors/error_500.json";
import ModalLayout from "../../Atoms/modal";

type Error500Props = {
    previewOnly?: boolean;
    title?: string;
    message?: string;
    ctaLabel?: string;
    onClick?: () => void;
};
export const sampleData = {
    title: "Sorry! Server Error!",
    message:
        "It seems our servers are down at the moment. We will try to have them up as soon as possible. Please try again later.",
    ctaLabel: "Understood",
};
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
const Error500 = ({
                      previewOnly,
                      title,
                      message,
                      ctaLabel,
                      onClick,
                  }: Error500Props) => {
    const style = Styles();
    //const useGlobalStyles = useGlobalsStylesEn();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <ModalLayout openModal={true} modalHeight={500}>
            <div className={style.mainContainer} style={{width: 448}}>
                <div className={style.lottieContainer}>
                    <Lottie options={defaultOptions} height={256} width={256}/>
                </div>
                <h1 className={style.header}>{title ?? sampleData.title}</h1>
                <p className={style.message}>{message ?? sampleData.message}</p>
            </div>
        </ModalLayout>
    );
};
export default Error500;
