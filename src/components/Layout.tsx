//import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import React from "react";
// import HeaderResponsive from "./HeaderResponsive.tsx";
import HeaderCrud from "@/components/HeaderCrud.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <>
            {/*<Header/>*/}
            <HeaderCrud />
            <div className="container mx-auto min-h-[85vh] pt-24">
                {children}
            </div>
            <Footer/>
        </>
    )
}
export default Layout;