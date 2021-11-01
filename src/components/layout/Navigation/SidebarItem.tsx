
interface Props{
    purpose:string,
    children:JSX.Element,
}
export default function SidebarItem({purpose,children}:Props):JSX.Element {
    return (
        <li className="sidebar__item" data-purpose={purpose}>
            {children}
        </li>
    )
}
