import {Avatar, Theme, Typography} from "@mui/material";
import {SxProps} from "@mui/system";
import React from "react";

interface PropsInterface {
    style?: string;
    avatarStyle?: SxProps<Theme> | undefined;
    alt?: string;
    text?: string;
    avatar: string;
    rootAvatarStyle?: string;
}

const QAvatar = ({
                     style,
                     avatarStyle,
                     alt,
                     text,
                     avatar,
                     rootAvatarStyle,
                 }: PropsInterface) => {
    return (
        <>
            <Avatar
                sx={avatarStyle}
                alt={alt}
                src={avatar}
                classes={{root: rootAvatarStyle}}
            />
            {text && <Typography className={style}>{text}</Typography>}
        </>
    );
};

export default QAvatar;
