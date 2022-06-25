export const svgColorHandler = (icon: any): string | undefined => {


    if (icon) {
        return `data:image/svg+xml;utf8,${encodeURIComponent(
            icon?.replace("<svg", `<svg fill=\"#FFFFFF\"`)
        )}`;
    }

    return
};


export const svgHandler = (icon: any): string | undefined => {
    if (icon) {
        return `data:image/svg+xml;utf8,${encodeURIComponent(
            icon
        )}`;
    }
};