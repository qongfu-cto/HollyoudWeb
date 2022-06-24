import {useState} from "react";

export const useMenu = (onMenuClicked: (index: number) => void) => {
    const [anchorElUser, setAnchorElUser] = useState<any>();

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (index: number) => {
        setAnchorElUser(null);
        onMenuClicked(index);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return {
        anchorElUser,
        handleCloseNavMenu,
        handleOpenUserMenu,
        handleCloseUserMenu,
        setAnchorElUser
    }
}
