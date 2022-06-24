import {Container} from "@mui/material";
import type {NextPage} from "next";
import {useRouter} from "next/dist/client/router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import AuthenticationLayout from "../../components/Layouts/authenticationLayout";
import BackToQloudCityHeader from "../../components/Organisms/backToQloudCityHeader";
import PropertyRegisterLayout from "../../components/Organisms/PropertyRegisterLayout";
import {useAuthentication} from "../../container/authentication";
import {LoginWithSocailMediaContainer} from "../../container/loginWithSocailMedia";
import {RootState} from "../../redux/Reducer/root";

const SignUp: NextPage = () => {
    useEffect(() => {
        back();
    }, []);
    
    const {signinButtonHandler} = useAuthentication();
    const {back, push} = useRouter();
    const [terms, setTerms] = useState({
        state: false,
        title: "",
        content: "",
    });
    const {
        authLoading,
        userLoading,
        authUserIsLogged,
        userIsLogged,
        signinError,
    } = useSelector((state: RootState) => {
        return {
            authLoading: state.auth.loading.userSignIn,
            userLoading: state.user.loading.getUserData,
            authUserIsLogged: state.auth.userIsLogged,
            signinError: state.auth.errors.signin,
            userIsLogged: state.user.userIsLogged,
        };
    });

    // useEffect(() => {
    //     if (userIsLogged && authUserIsLogged) {
    //         // setShowToast({ state: false, message: "" });
    //         push("./").then(() => {
    //         });
    //     } else if (!userIsLogged && signinError) {
    //         // setShowToast({ state: true, message: signinError });
    //     }
    // }, [userIsLogged, signinError, authUserIsLogged]);

	

    return (
        <LoginWithSocailMediaContainer>
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
                    terms={setTerms}
                    buttonLabel="LOGIN"
                    switchLayoutButtonLabel=" Signup"
                    switchLayoutButtonLink="/signup"
                    onClickHandler={signinButtonHandler}
                    loading={authLoading || userLoading}
                />
                <PropertyRegisterLayout/>
            </Container>
        </LoginWithSocailMediaContainer>
    );
};

export default SignUp;
