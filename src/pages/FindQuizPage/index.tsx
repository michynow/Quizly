import { motion } from "framer-motion";
import { PageHeadingMain } from "../../components/shared/PageHeadingMain";
import { PageWrapper } from "../../components/shared/PageWrapper";
export default function FindQuizPage(): JSX.Element {
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
      transition={{ duration: 0.5, delay: 0.1, type: "tween" }}
    >
      <PageWrapper>
        <PageHeadingMain>FindQuiz</PageHeadingMain>
      </PageWrapper>
    </motion.div>
  );
}
