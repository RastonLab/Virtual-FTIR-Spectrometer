import React from "react";

export default function MenuButton({label, link}) {

    return (
        <a href={link}>{label}</a>
    );
}