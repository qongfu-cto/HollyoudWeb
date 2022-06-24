import React, {useEffect, useState} from "react";
import QIcon from "../../Atoms/icon";
import male_active from "../../../assets/icons/male_active.svg";
import male_inactive from "../../../assets/icons/male_inactive.svg";
import female_active from "../../../assets/icons/female_active.svg";
import female_inactive from "../../../assets/icons/female_inactive.svg";
import {useGenderStylesEN} from "./styleEn";
import QText from "../../Atoms/text";

interface GenderProps {
    setGenderValue: (gender: { male: boolean; female: boolean }) => void;
}

const Gender = ({setGenderValue}: GenderProps) => {
    const styles = useGenderStylesEN();
    const [gender, setGender] = useState({
        male: true,
        female: false,
        value: {
            male: true,
            female: false,
        },
    });

    useEffect(() => {
        setGenderValue(gender.value);
    }, [gender]);

    return (
        <div className={styles.container}>
            <QText label="GENDER" labelStyle={{fontSize: 12, fontWeight: "bold"}}/>
            <div>
                {gender.male ? (
                    <QIcon
                        source={male_active}
                        click={() =>
                            setGender({
                                female: false,
                                male: true,
                                value: {male: true, female: false},
                            })
                        }
                    />
                ) : (
                    <QIcon
                        source={male_inactive}
                        click={() =>
                            setGender({
                                female: false,
                                male: true,
                                value: {male: true, female: false},
                            })
                        }
                    />
                )}
                {gender.female ? (
                    <QIcon
                        source={female_active}
                        click={() =>
                            setGender({
                                female: true,
                                male: false,
                                value: {male: false, female: true},
                            })
                        }
                    />
                ) : (
                    <QIcon
                        source={female_inactive}
                        click={() =>
                            setGender({
                                female: true,
                                male: false,
                                value: {male: false, female: true},
                            })
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Gender;
