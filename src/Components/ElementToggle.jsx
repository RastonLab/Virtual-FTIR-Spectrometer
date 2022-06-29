import React, { useState } from "react";
import {ReactComponent as ElementOne} from './svgs/ElementOne.svg'
import {ReactComponent as ElementTwo} from './svgs/ElementTwo.svg'
import '../style/ElementToggle.css';

export default function ElementToggle() {

    const [renderedElement, setElement] = useState(ElementOne);

    const onClick = () => {
        if(renderedElement === ElementOne) {
            setElement(ElementTwo);
        } else {
            setElement(ElementOne);
        }
    }

    const Component = renderedElement;

    return (
        <Component className='svg' onClick={onClick} />
    );
}