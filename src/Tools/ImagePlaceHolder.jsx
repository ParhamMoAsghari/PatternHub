import "./ImagePlaceHolder.css"
import React, {useEffect, useRef} from 'react';

const ImagePlaceHolder = ({placeholderSrc, children}) => {
    const ref = useRef(null);
    useEffect(() => {
        const blurredImageDiv = ref.current
        const img = blurredImageDiv.querySelector("img");
        function loaded() {
            blurredImageDiv.classList.add("loaded")
        }

        if (img.complete) {
            loaded()
        } else {
            img.addEventListener("load", loaded)
        }
    }, [])
    return (
        <div ref={ref} className="blurred-img" style={{backgroundImage: `url(${placeholderSrc})`}}>
            {children}
        </div>
    )
};

export default ImagePlaceHolder;
