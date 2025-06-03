import {useEffect, useState} from "react";

const OnlineStatus = ()=> {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
      const handler=()=>setIsOnline(navigator.onLine);
      const pollingId: number = setInterval(handler, 5000);
      window.addEventListener("online", handler);
      window.addEventListener("offline", handler);
      return()=>{
          clearInterval(pollingId)
          window.removeEventListener("online", handler);
          window.removeEventListener("offline", handler);
      }
    }, [])

    return (
        <>
            {/*<div className="bg-green-500 text-white text-center mx-4 mt-12 p-4 rounded">*/}
            <div className={`text-white text-center mx-4 mt-12 p-4 rounded ${ isOnline ? "bg-green-500" : "bg-cf-dark-red" }`}>
                { isOnline ? "You are online!": "You are offline!" }
            </div>
        </>
    )
}
export default OnlineStatus;