interface Props {
    sidebarOpen:Boolean,
    setSidebarOpen: Function,
}
const HamburgerBtn = ({sidebarOpen,setSidebarOpen}:Props):JSX.Element => {
    const sidebarHandler = ():void => {
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <button onClick={sidebarHandler} className={sidebarOpen ? "topbar__menu-open sidebar-open" : 'topbar__menu-open'}>
            <span className="topbar__menu-open-btn"></span>
        </button>
    )
}

export default HamburgerBtn
