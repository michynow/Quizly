import { useEffect } from "react";

const Overlay = ():JSX.Element => {
    useEffect(() => {
        setTimeout(function() {
            document.querySelector('.overlay')?.classList.add('--ready')
        },100)
    })
    return (
        <div className="overlay">
            
        </div>
    )
}

export default Overlay;
