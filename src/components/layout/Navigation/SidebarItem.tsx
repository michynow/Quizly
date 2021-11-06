import { SidebarListItem } from "./styles/SidebarListItem";

interface Props{
    purpose:string,
    children:JSX.Element,
}
export default function SidebarItem({purpose,children}:Props):JSX.Element {
    return (
        <SidebarListItem data-purpose={purpose}>{children}</SidebarListItem>
    )
}
