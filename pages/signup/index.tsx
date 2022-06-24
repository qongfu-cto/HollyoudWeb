import React, {useState, useEffect} from "react";
import {Container} from "@mui/material";
import type {NextPage} from "next";
import NoteModal from "../../components/Molecules/notesModal";
import AuthenticationLayout from "../../components/Layouts/authenticationLayout";
import BackToQloudCityHeader from "../../components/Organisms/backToQloudCityHeader";
import PropertyRegisterLayout from "../../components/Organisms/PropertyRegisterLayout";
import SignupFlowModal from "../../components/Organisms/signupFlowModal";
import {useAuthentication} from "../../container/authentication";
import {RootState} from "../../redux/Reducer/root";
import {useSelector} from "react-redux";
import SignupSubmitLoader from "../../components/Molecules/SignupSubmitLoader";
import {useRouter} from "next/dist/client/router";

const SignUp: NextPage = () => {
    useEffect(() => {
        back();
    }, []);

    const {
        signupButtonHandler,
        openSignupFlowModal,
        SignUpModalCloseHandler,
        SignUpModalOpenHandler,
    } = useAuthentication();
    const [terms, setTerms] = useState({
        state: false,
        title: "",
        content: "",
    });
		const {back} = useRouter();

	

    const {firebaseLoading, profileLoading} = useSelector(
        (state: RootState) => {
            return {
                firebaseLoading: state.auth.loading.createAccount,
                profileLoading: state.user.loading.createProfile,
            };
        }
    );

    if (profileLoading) {
        return <SignupSubmitLoader openModal={true}/>;
    }
    return (
        <>
            {!openSignupFlowModal ? (
                <>
                    <BackToQloudCityHeader/>

                    <Container
                        style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AuthenticationLayout
                            onClickHandler={signupButtonHandler}
                            buttonLabel="Sign Up Now"
                            switchLayoutButtonLabel={"Login"}
                            switchLayoutButtonLink="/signin"
                            signup
                            terms={setTerms}
                            loading={firebaseLoading || profileLoading}
                        />
                        <PropertyRegisterLayout/>
                    </Container>
                </>
            ) : (
                <>
                    <BackToQloudCityHeader withLogo/>
                    {terms.state ? (
                        <NoteModal
                            openModal={openSignupFlowModal}
                            title={terms.title}
                            closeModal={() => {
                                SignUpModalCloseHandler(), setTerms({...terms, state: false});
                            }}
                        />
                    ) : (
                        <SignupFlowModal openModal={openSignupFlowModal}/>
                    )}
                </>
            )}
        </>
    );
};

export default SignUp;
