import React from "react";
import {useOnBoarding} from "../../../container/onBoarding";
import ModalLayout from "../../Atoms/modal";
import ModalFooterHorizontal from "../../Molecules/modalFootherHorizontal";
import ModalHeader from "../../Molecules/modalHeader";
import {useOnBoardingFlowStylesEN} from "./styleEN";

const OnBoardingFlowModal = () => {
    const {onBoardingFlowStepper, InactiveNextButton, skip, backButtonHandler} =
        useOnBoarding();
    const stepper = onBoardingFlowStepper();
    const styles = useOnBoardingFlowStylesEN();

    return (
        <div>
            <ModalLayout openModal={true} handleCloseModal={(event, reason) => {
            }}>
                <div className={styles.container}>
                    <ModalHeader
                        title={stepper.title}
                        subTitle={stepper.subTitle}
                        backButton={stepper.headerButton === "backButton"}
                        closeButton={stepper.headerButton === "closeButton"}
                        onBackButtonClick={backButtonHandler}
                    />
                    <div
                        className={styles.stepperContainer}
                        style={{
                            flexDirection: stepper.direction ?? "row",
                            alignItems: stepper.direction ? "center" : "flex-start",
                            justifyContent: stepper.direction ? "space-between" : "center",
                        }}
                    >
                        {stepper.component}
                    </div>

                    <ModalFooterHorizontal
                        skip={skip}
                        disable={InactiveNextButton}
                        nextButtonHandler={stepper.onClick}
                        skipButtonHandler={stepper.onSkip}
                    />
                </div>
            </ModalLayout>
        </div>
    );
};

export default OnBoardingFlowModal;
