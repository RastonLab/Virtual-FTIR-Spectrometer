import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Popup({label, title, text}) {

    const [open, setOpen] = useState(false);

    return(
        <div>
            <button className="popup-button" onClick={() => {setOpen(true)}} >{label}</button>
            <Dialog className="popup" onClose={() => {setOpen(false)}} open={open}>
                <DialogTitle>{title}</DialogTitle>
                <p>{text}</p>
            </Dialog>
        </div>
    );
    

}