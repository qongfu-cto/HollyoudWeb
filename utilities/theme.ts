import {useTheme} from "@emotion/react";
import {PaletteMode, PaletteOptions, ThemeOptions,} from "@mui/material";

declare module "@mui/material/styles" {
    interface PaletteColor {
        light: string;
        main: string;
        dark: string;
        tint: string;
    }

    interface PaletteColorOptions {
        light: string;
        main: string;
        dark: string;
        tint: string;
    }

    // allow configuration using `createTheme`
    interface Palette {
        primary: PaletteColor;
        white: string;
        offWhite: string;
        black: {
            100: string;
            86: string;
            60: string;
            48: string;
            36: string;
            24: string;
            16: string;
            6: string;
            4: string;
        };
        //info: string,
        secondary: PaletteColor;
        tertiary: PaletteColor;
        quaternary: PaletteColor;
        success: PaletteColor;
        danger: PaletteColor;
        warning: PaletteColor;
    }

    interface SimplePaletteColorOptions {
        primary?: PaletteColorOptions;
        white: string;
        offWhite: string;
        black: {
            100: string;
            86: string;
            60: string;
            48: string;
            36: string;
            24: string;
            16: string;
            6: string;
            4: string;
        };
        info?: string;
        secondary?: PaletteColorOptions;
        tertiary?: PaletteColorOptions;
        quaternary?: PaletteColorOptions;
        success?: PaletteColorOptions;
        danger?: PaletteColorOptions;
        warning?: PaletteColorOptions;
    }

    interface PaletteOptions {
        primary?: PaletteColorOptions;
        white: string;
        offWhite: string;
        black: {
            100: string;
            86: string;
            60: string;
            48: string;
            36: string;
            24: string;
            16: string;
            6: string;
            4: string;
        };
        // info?: string,
        secondary?: PaletteColorOptions;
        tertiary?: PaletteColorOptions;
        quaternary?: PaletteColorOptions;
        success?: PaletteColorOptions;
        danger?: PaletteColorOptions;
        warning?: PaletteColorOptions;
    }

    interface ThemeOptions {
        palette?: PaletteOptions;
    }
}

export const useBranding = () => {
    const theme: ThemeOptions = useTheme();

    return theme;
};

export const convertPixelsToRems = (pixels: number) => {
    return `${(pixels / 16).toFixed(2)}rem`;
};

export const branding = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            ...(mode === "light"
                ? {
                    //dummy for dark mode
                    dark: "#DD9900",
                    main: "#E2BC65",
                    light: "#FAEFD6",
                }
                : {
                    dark: "#1E5065",
                    main: "#3190AF",
                    light: "#C2E5F7",
                }
                ),
            white: "#FFFFFF",
            offWhite: "#F8FCFF",
            black: {
                100: "#333333",
                86: "#4F4F4F",
                60: "#858585",
                48: "#919191",
                36: "#B5B5B5",
                24: "#CECECE",
                16: "#DEDEDE",
                6: "#F3F3F3",
                4: "#F7F7F7",
            },
            info: "#61C2FF",
            secondary: {
                dark: "#DD9900",
                main: "#E2BC65",
                light: "#FAEFD6",
            },
            tertiary: {
                dark: "#C700DD",
                main: "#E6A0F2",
                light: "#EFD2F9",
            },
            quaternary: {
                dark: "#990000",
                main: "#C26666",
                light: "#E7C2C2",
            },
            success: {
                bright: "#1DFF00",
                main: "#54B948",
                tint: "#D6EED3",
            },
            danger: {
                bright: "#FF0000",
                main: "#EF5E5E",
                tint: "#FFC2C2",
            },
            warning: {
                bright: "#E2BC65",
                main: "#E2BC65",
                tint: "#FAEFD6",
            },
        },
    },

    transitions: {
        duration: {
            shortest: 100,
        },
    },
});
