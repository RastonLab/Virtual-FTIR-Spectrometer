import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close"
import DialogTitle from "@mui/material/DialogTitle";

export default function CloseButton(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }