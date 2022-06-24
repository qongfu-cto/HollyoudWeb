import React from "react";
import ActiveView from "../../../assets/icons/ViewPasswordActive.svg";
import InactiveView from "../../../assets/icons/ViewPasswordInactive.svg";
import Img from "../../Atoms/img";

type ShowPasswordIconProps = {
    enable: boolean;
    showPassword: React.Dispatch<boolean>;
    show: boolean;
};

/**
 * BackTextButton
 *
 * A component that let's the user go back to the previous page
 * or back to the home page.
 *
 * @param label - optional label that defaults to "Back to Home".
 * @param hrefLink - optional "/url" that defaults to home page "/".
 */
const ShowPasswordIcon = ({
                              enable,
                              showPassword,
                              show,
                          }: ShowPasswordIconProps) => {
    //const styles = useInputFieldStylesEN();
    if (enable)
        return (
            <div onClick={() => showPassword(!show)}>
                {show ? (
                    <Img
                        source={InactiveView}
                        alt="hide password"
                        click={() => showPassword(show)}
                        container={{cursor: "pointer"}}
                    />
                ) : (
                    <Img
                        source={ActiveView}
                        alt="view password"
                        click={() => showPassword(show)}
                        container={{cursor: "pointer"}}
                    />
                )}
            </div>
        );

    return <Img source={InactiveView} alt="disable"/>;
};

export default ShowPasswordIcon;
