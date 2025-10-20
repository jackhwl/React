import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
export default function Modal({ children, buttonCaption, ref}) {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => ({
        open: () => {
            dialogRef.current.showModal();
        }
    }));
    return createPortal(
        <dialog ref={dialogRef}>
            {children}
            <form method="dialog">
                <button>{buttonCaption}</button>
            </form>
        </dialog>, document.getElementById('modal-root')
    );
}