import { useEffect } from "react";
import NameChanger from "../components/NameChanger.tsx";

const NameChangerPage = () => {
    useEffect(()=>{
        document.title= "CF7 name changer"
    }, [])
    return (
        <>
            <NameChanger/>
        </>
    )
};
export default NameChangerPage;