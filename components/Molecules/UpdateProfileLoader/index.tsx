import React from "react";
import {useUpdateProfileStylesEN} from "./stylesEN";
import {useGlobalsStylesEn} from "../../../styles/globalStylesEn";

// Imported Lottie File
import * as animationData from "../../../assets/lotties/loaders/update_profile.json";
import LottieAnimation from "../../Atoms/lottie";
import ModalLayout from "../../Atoms/modal";

type UpdateProfileProps = {
    previewOnly?: boolean;
    title?: string;
    message?: string;
    openModal: boolean;
};

export const sampleData = {
    title: "Please wait",
    message: "We are currently updating your profile",
};

/**
 * UpdateProfile
 *
 * Molecule component for updating the profile.
 *
 * @param title - Optional props for the title.
 * @param message - Optional props for the message body.
 * @param previewOnly - Only used for previewing this component. Do not use.
 */
const UpdateProfileLoader = ({
                                 previewOnly,
                                 title,
                                 message,
                                 openModal,
                             }: UpdateProfileProps) => {
    const useStylesEN = useUpdateProfileStylesEN();
    const useGlobalStyles = useGlobalsStylesEn();

    return (
        <ModalLayout openModal={openModal}>
            <div className={previewOnly ? useGlobalStyles.popupContainer : ""}>
                <div className={useStylesEN.mainContainer} style={{width: 448}}>
                    <div className={useStylesEN.lottieContainer}>
                        <LottieAnimation
                            animationData={animationData}
                            height={256}
                            width={256}
                        />
                    </div>
                    <h1 className={useStylesEN.header}>{title ?? sampleData.title}</h1>
                    <p className={useStylesEN.message}>{message ?? sampleData.message}</p>
                </div>
            </div>
        </ModalLayout>
    );
};
export default UpdateProfileLoader;
