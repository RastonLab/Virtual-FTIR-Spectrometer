import { Dialog, DialogTitle, Button } from "@mui/material";
import { useState } from "react";

export default function Popup({title, text}) {

    const [open, setOpen] = useState(false);

    return(
        <div>
            <Button onClick={() => {setOpen(true)}} >Click</Button>
            <Dialog onClose={() => {setOpen(false)}} open={open}>
                <DialogTitle>{title}</DialogTitle>
                <p>{text}</p>
            </Dialog>
        </div>
    );
    

}