import {useState, useEffect} from "react";


export const useIsSmallScreen = () => {
    const [isSmall, setIsSmall] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setIsSmall(window.innerWidth <= 1080);
            };

            handleResize();

            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);
    return isSmall;
};