import React from "react";
import {useAvatarWithStatusStylesEN} from "./styleEN";
import {Branding} from "../../../utilities/branding";
import QAvatar from "../../Atoms/avatar";

interface AvatarWithStatusProps {
    src: string;
    avatarStyle: object;
    status: string;
}

/**
 * View to render avatar with status dot.
 * @param src - avatar image url
 * @param avatarStyle - Avatar styles
 * @param status - Status of the user
 */
const AvatarWithStatus = ({
                              src,
                              avatarStyle,
                              status,
                          }: AvatarWithStatusProps) => {
    const styles = useAvatarWithStatusStylesEN();
    const backgroundColor =
        status === "ACTIVE"
            ? Branding.Colors.green.variant_1
            : Branding.Colors.black["36"];
    return (
        <div className={styles.avatarStatusWrapper}>
            <QAvatar avatar={src} avatarStyle={avatarStyle}/>
            <div className={styles.status} style={{backgroundColor}}/>
        </div>
    );
};

export default AvatarWithStatus;
