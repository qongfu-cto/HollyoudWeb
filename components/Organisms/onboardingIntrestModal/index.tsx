import React from "react";
import {useSelector} from "react-redux";
import {useOnBoarding} from "../../../container/onBoarding";
import {RootState} from "../../../redux/Reducer/root";
import QButton from "../../Atoms/button";
import ModalLayout from "../../Atoms/modal";
import SearchInput from "../../Atoms/searchInput";
import InterestCard from "../../Molecules/intrestCard";
import ModalHeader from "../../Molecules/modalHeader";
import {useOnBoardingInterestModalStylesEN} from "./styleEN";

const OnBoardingInterestModal = () => {
    const styles = useOnBoardingInterestModalStylesEN();
    const {onBoardingFlowStepper, backButtonHandler, onboardingComplete} =
        useOnBoarding();

    const {
        trending,
        fitness,
        business,
        social,
        educational,
        personal,
        recreational,
    } = useSelector((state: RootState) => {
        return {
            trending: state.app.interests.Trending,
            fitness: state.app.interests.Fitness,
            business: state.app.interests.Business,
            educational: state.app.interests.Educational,
            personal: state.app.interests.Personal,
            recreational: state.app.interests.Recreational,
            social: state.app.interests.Social,
        };
    });

    const stepper = onBoardingFlowStepper();
    return (
        <div>
            <ModalLayout
                openModal={true}
                handleCloseModal={(event, reason) => {
                }}
                modalHeight={650}
                layoutPadding={0}
            >
                <div className={styles.headerContainer}>
                    <ModalHeader
                        title={stepper.title}
                        subTitle={stepper.subTitle}
                        backButton={stepper.headerButton === "backButton"}
                        onBackButtonClick={backButtonHandler}
                    />

                    <SearchInput searchOptions={[]}/>
                </div>
                <div className={styles.container}>
                    <InterestCard interestLabel="Trending in Bahrain" data={trending}/>
                    <InterestCard interestLabel="Fitness" data={fitness}/>
                    <InterestCard interestLabel="business" data={business}/>
                    <InterestCard interestLabel="personal" data={personal}/>
                    <InterestCard interestLabel="social" data={social}/>
                    <InterestCard interestLabel="educational" data={educational}/>
                    <InterestCard interestLabel="recreational" data={recreational}/>
                </div>
                <div className={styles.buttonContainer}>
                    <QButton
                        label="COMPLETE ONBOARDING"
                        btnWidth="100%"
                        style={{borderRadius: 12}}
                        onClick={onboardingComplete}
                    />
                </div>
            </ModalLayout>
        </div>
    );
};

export default OnBoardingInterestModal;
