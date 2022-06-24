import React from "react";
import {Branding} from "../../../utilities/branding";
import ModalLayout from "../../Atoms/modal";
import QText from "../../Atoms/text";
import ModalHeader from "../modalHeader";
import {useNoteModalStylesEN} from "./styleEN";

interface NoteModalProps {
    openModal: boolean;
    title: string;
    closeModal: () => void;
}

const NoteModal = ({openModal, title, closeModal}: NoteModalProps) => {
    const styles = useNoteModalStylesEN();

    return (
        <div>
            <ModalLayout
                openModal={openModal}
                handleCloseModal={(event, reason) => {
                }}
            >
                <div>
                    <ModalHeader
                        title={title}
                        closeButton
                        onCloseButtonClick={closeModal}
                    />
                    <div className={styles.container}>
                        <QText
                            label={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et mollitia expedit
                 facilis delectus ipsum pariatur? Minus eveniet architecto porro maiores animi, 
                 aspernatur placeat id? Doloribus numquam libero dignissimos minus!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et mollitia expedit
                 facilis delectus ipsum pariatur? Minus eveniet architecto porro maiores animi, 
                 aspernatur placeat id? Doloribus numquam libero dignissimos minus!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et mollitia expedit
                 facilis delectus ipsum pariatur? Minus eveniet architecto porro maiores animi, 
                 aspernatur placeat id? Doloribus numquam libero dignissimos minus!`}
                            labelStyle={{fontSize: 14, fontWeight: "bolder"}}
                            labelColor={Branding.Colors.black[100]}
                        />
                    </div>
                </div>
            </ModalLayout>
        </div>
    );
};

export default NoteModal;
