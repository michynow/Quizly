import { PageHeadingMain } from "../../components/shared/PageHeadingMain";
import { PageWrapper } from "../../components/shared/PageWrapper";
import { motion } from "framer-motion";
// interface Props {
//   theme: any,
// }
export default function DashboardPage(): JSX.Element {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
          opacity:1,
      }}
      exit={{
          opacity:0,
      }}
      transition={{ duration: 0.5, delay:0.1, type: "tween" }}
    >
      <PageWrapper>
        <PageHeadingMain>Dashboard</PageHeadingMain>
      </PageWrapper>
    </motion.div>
  );
}
