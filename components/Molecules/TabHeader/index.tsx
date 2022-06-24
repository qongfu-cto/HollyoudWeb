import React from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Tab} from "@mui/material";
import {useTabHeaderStylesEN} from "./styleEN";

interface QTextButtonProps {
    id?: number;
    label?: string;
}

interface TabHeaderProps {
    tabsTitle: QTextButtonProps[];
    tabsContent: React.ReactElement[];
}

function TabHeader({tabsContent, tabsTitle}: TabHeaderProps) {
    const [value, setValue] = React.useState("1");

    const style = useTabHeaderStylesEN();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext value={value}>
                <TabList onChange={handleChange}>
                    {tabsTitle?.map((title: QTextButtonProps, index) => (
                        <Tab
                            key={index}
                            label={title.label}
                            value={(index + 1).toString()}
                            //style={{ color: Branding.Colors.primary.normal }}
                            className={style.tabs}
                        />
                    ))}
                </TabList>
                {tabsContent?.map((content, index) => (
                    <TabPanel key={index} value={(index + 1).toString()}>
                        {content}
                    </TabPanel>
                ))}
            </TabContext>
        </div>
    );
}

export default TabHeader;
