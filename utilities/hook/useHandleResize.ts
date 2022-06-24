import {useCallback, useEffect, useState} from "react";

export const useHandleResize = (): [number, () => void, boolean] => {
    const getWidth = () =>
        typeof window !== "undefined" ? window.innerWidth : 0;


    const [openSideBar, setOpenSideBar] = useState(true);
    const [width, setWidth] = useState(getWidth());


    const handleResize = () => {
        const width = getWidth();

        width > 768 ? setOpenSideBar(true) : setOpenSideBar(false);

        setWidth(getWidth());
    };

    useEffect(() => {
        const width = getWidth();
        width > 768 ? setOpenSideBar(true) : setOpenSideBar(false);
        setWidth(getWidth());
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSideBarClick = useCallback(() => {
        setOpenSideBar(!openSideBar);
    }, [openSideBar]);

    return [
        width,
        handleSideBarClick,
        openSideBar
    ]
}
