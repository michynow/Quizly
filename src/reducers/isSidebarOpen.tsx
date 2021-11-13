interface isSidebarOpenAction {
    action:'OPEN' | 'CLOSED',
    type:string,
}
const isSidebarOpen = (state:Boolean = false,action:isSidebarOpenAction ) => {
      switch (action.type) {
        case "OPEN":
          return (state = true);
        case "CLOSED":
          return (state = false);
        default:
          return state;
      }
}
export default isSidebarOpen;