import {Grid, GridSize} from "@mui/material";
import React from "react";
import {Branding} from "../../../utilities/branding";
import Text from "../../Atoms/text";

interface gridHeaderProps {
    label: string;
    col: GridSize;
}

const GridHeader = ({label, col}: gridHeaderProps) => {
    return (
        <Grid item xs={col}>
            <Text
                label={label}
                labelStyle={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                }}
                labelColor={Branding.Colors.black[86]}
            />
        </Grid>
    );
};

export default GridHeader;
