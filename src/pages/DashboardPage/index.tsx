import { DashboardPageHeadingMain } from "./DashboardPageHeadingMain";
import { DashboardPageWrapper } from "./DashboardPageWrapper";

export default function DashboardPage():JSX.Element {
    return (
        <DashboardPageWrapper className="container" >
            <DashboardPageHeadingMain>Dashboard</DashboardPageHeadingMain>
        </DashboardPageWrapper>
    )
}
