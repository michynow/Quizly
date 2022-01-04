import {
  PageWrapper,
  PageHeadingMain,
} from "../../components/shared/PageWrapper";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// interface Props {
//   theme: any,
// }
export default function DashboardPage(): JSX.Element {
  const focusRef = useRef<HTMLHeadingElement>(null);
  useEffect(()=> {
    focusRef?.current?.focus();
  })
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.3, delay: 0.1, type: "tween" }}
    >
      <PageWrapper>
        <PageHeadingMain ref={focusRef} tabIndex={-1}>Dashboard</PageHeadingMain>
      </PageWrapper>
    </motion.div>
  );
}
