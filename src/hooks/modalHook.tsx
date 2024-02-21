import { useState } from "react";
import Modal, { IModalProps } from "../components/Modal";

type IModalStates = Pick<
  IModalProps,
  "show" | "children" | "backdrop" | "scrollable" | "onClose" | "isCenter"
> & { static?: boolean };

function useModal() {
  const [modalState, setModalState] = useState<IModalStates>({
    show: false,
    children: null,
    backdrop: true,
    scrollable: false,
    onClose: () => {},
    static: false,
    isCenter: false,
  });

  const updateModalStates = (states: Partial<IModalStates>) => {
    setModalState({ ...modalState, ...states });
  };

  const showModal = () => {
    setModalState({
      ...modalState,
      show: true,
    });
  };

  const closeModal = () => {
    setModalState({
      ...modalState,
      show: false,
    });
  };

  const ModalComponent = () => (
    <Modal
      show={modalState.show ?? false}
      onClose={closeModal}
      scrollable={modalState.scrollable}
      isCenter={modalState.isCenter}
      backdrop={modalState.backdrop}
    >
      {modalState.children}
    </Modal>
  );

  return { ModalComponent, showModal, closeModal, updateModalStates };
}
export default useModal;
