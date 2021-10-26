import { SwitchProps } from "react-router"
import Sidebar from "./Navigation/Sidebar"
import Topbar from "./Navigation/Topbar"
export default function Layout(props: SwitchProps) {
    return (
        <>
        <Topbar/>
        <main className="main-container">
            <Sidebar/>
            <div className="content">{props.children}</div>
        </main>
        </>
    )
}
