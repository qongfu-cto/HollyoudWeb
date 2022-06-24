import React from "react";
import {ReactElement} from "react-markdown/lib/react-markdown";
import {InputFieldOutLined} from "../../Atoms/inputField";
import Text from "../../Atoms/text";
import {useChatSearchBoxStylesEN} from "./styleEN";

interface ChatSearchBoxProps {
    placeholder: string;
    endIcon?: ReactElement | ReactElement[];
    onChangeText: (text: string) => void;
    height?: number | string;
    inputValue?: string;
    defaultValue?: string;
}

/**
 * Component to render search box in chat view
 * @param placeholder - Placeholder to show
 * @param endIcon - End search icon
 * @param onChangeText - handler function for changing text
 * @param height - height of the search box
 */
const ChatSearchBox = ({
                           placeholder,
                           endIcon,
                           onChangeText,
                           height,
                       }: ChatSearchBoxProps) => {
    const styles = useChatSearchBoxStylesEN({height});
    return (
        <div className={styles.container}>
            <InputFieldOutLined
                padding={`0px 5px 0px 0px`}
                endIcon={endIcon}
                borderRadius={8}
                containerMargin={5}
                placeholder={placeholder}
                disableBorder={true}
                inputStyle={styles.input}
                outlinedInputProps={{
                    size: "medium",
                    inputProps: {className: styles.input},
                    type: "Text",
                    onChange: (e) => onChangeText(e.target.value),
                }}
            />
        </div>
    );
};

export default ChatSearchBox;
