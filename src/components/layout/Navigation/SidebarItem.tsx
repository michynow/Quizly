
interface Props{
    name?:string,
    link?:string,
    data?:string,
    children:JSX.Element,
    
}
export default function SidebarItem({name,link,data,children}:Props) {
    return (
        <li className="sidebar__item">
            {children}
        </li>
    )
}
