import { SwitchProps } from "react-router"
import Sidebar from "./Navigation/Sidebar"
import Topbar from "./Navigation/Topbar"
import Overlay from '../Overlay';
import { useEffect, useState } from "react";
export default function Layout(props: SwitchProps):JSX.Element {
const [sidebarOpen, setSidebarOpen] = useState<Boolean>(true);
let windowWidth:number = window.innerWidth;
function checkViewport():void{
windowWidth > 979 ? setSidebarOpen(false) : setSidebarOpen(false);
}
useEffect(checkViewport,[])
    return (
        <>
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="main-container">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            {sidebarOpen ? <Overlay/> : null}
            <div className="content">{props.children}</div>
        </main>
        </>
    )
}
