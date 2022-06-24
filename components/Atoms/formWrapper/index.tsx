import React from "react";
import {FormControl, FormHelperText} from "@mui/material";
import {Branding} from "../../../utilities/branding";

interface FormWrapperProps {
    error?: boolean;
    errorMessage?: string;
    successMessage?: string;
    messageCenter?: boolean;
    formStyle?: string;
    children: React.ReactElement | React.ReactElement[];
}

const FormWrapper = ({
                         error,
                         errorMessage,
                         successMessage,
                         children,
                         formStyle,
                         messageCenter,
                     }: FormWrapperProps) => {
    return (
        <FormControl error={error} className={formStyle}>
            {children}
            {error ? (
                <FormHelperText sx={{textAlign: messageCenter ? "center" : "start"}}>
                    {errorMessage}
                </FormHelperText>
            ) : (
                <FormHelperText
                    sx={{
                        color: Branding.Colors.success.normal,
                        textAlign: messageCenter ? "center" : "start",
                    }}
                >
                    {successMessage}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default FormWrapper;
