import {
  PageWrapper,
  PageHeadingMain,
  PageHeadingMainCaption,
} from "../../components/shared/PageWrapper";
import { motion } from "framer-motion";
import QuizForm from "./QuizForm";
import { useEffect, useRef } from "react";

export default function DashboardPage(): JSX.Element {
  const focusRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    focusRef?.current?.focus();
  });
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
        <PageHeadingMain tabIndex={-1} ref={focusRef}>
          Create a new quiz!
        </PageHeadingMain>
        <PageHeadingMainCaption>
          Follow the instructions below to create your new, unique
          quiz.
          <br /> At minimum, you have to include at least{" "}
          <strong>5 questions</strong> and a title.
        </PageHeadingMainCaption>
        <QuizForm />
      </PageWrapper>
    </motion.div>
  );
}
