import { FC, useState } from "react";
import { ButtonProps } from "types/props/ButtonProps";

export const Button: FC<ButtonProps> = ({ clicked, children, ...attributes }) => {
    const [isClicked, setClicked] = useState(clicked);
    return (
        <button {...attributes} className={`${isClicked ? 'btn-clicked' : ''}`}>
            {children}
        </button>
    )
}