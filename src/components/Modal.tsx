import React, { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import clsx from "clsx";

export interface IModalProps {
  show: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  backdrop?: boolean;
  scrollable?: boolean;
  isCenter?: boolean;
  showTitleSection?: boolean;
}

function Modal({
  show = false,
  onClose,
  backdrop = true,
  children,
  isCenter = false,
}: IModalProps): JSX.Element | null {
  
  const useStyles = () => ({
    modalRoot: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: isCenter ? "center" : "end",
      margin: 0,
      padding: 0,
    },
    modalPaper: {
      width: "100%",
      height: isCenter ? "" : "100%",
      borderRadius: 0,
    },
  });
  
  const classes = useStyles();

  const close = () => {
    onClose();
  };

  return (
    <Fragment>
      <Dialog
        open={show}
        onClose={close}
        BackdropProps={{ invisible: !backdrop }}
        TransitionComponent={Slide}
        transitionDuration={500}
        className={clsx(classes.modalRoot)}
        classes={{ paper: clsx(classes.modalPaper) }}
        fullWidth
        fullScreen={!isCenter}
        maxWidth={false}
      >
        <div className={clsx("w-full bg-white", {})}>{children}</div>
      </Dialog>
    </Fragment>
  );
}

export default Modal;
