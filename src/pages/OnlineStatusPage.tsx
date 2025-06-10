import { useEffect } from "react";
import OnlineStatus from "../components/OnlineStatus.tsx";

const NameChangerPage = () => {
    useEffect(()=>{
        document.title= "CF7 online status"
    }, [])
    return (
        <>
            <OnlineStatus/>
        </>
    )
};
export default NameChangerPage;