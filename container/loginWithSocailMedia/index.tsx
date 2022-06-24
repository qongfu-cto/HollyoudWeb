import React, {createContext, useContext,} from "react";

interface LoginWithSocailMediaContextProps {
}

const LoginWithSocailMediaContext =
    createContext<LoginWithSocailMediaContextProps>(
        {} as LoginWithSocailMediaContextProps
    );
export const LoginWithSocailMediaContainer = ({children}: any) => {
    return (
        <LoginWithSocailMediaContext.Provider value={{}}>
            {children}
        </LoginWithSocailMediaContext.Provider>
    );
};

export function useLogin() {
    const context = useContext(LoginWithSocailMediaContext);

    return context;
}
