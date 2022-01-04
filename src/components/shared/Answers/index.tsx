import { TextInput } from "../TextInput";
import { Answer, AnswersContainer } from "./Answers.style";
import { useState } from "react";
export default function Answers() {
  const [correctAnswer, setCorrectAnswer] = useState<Boolean>();
  return (
    <AnswersContainer>
      <Answer>
        <TextInput placeholder="Answer 1." />
      </Answer>
      <Answer>
        <TextInput placeholder="Answer 2." />
      </Answer>
      <Answer>
        <TextInput placeholder="Answer 3." />
      </Answer>
      <Answer>
        <TextInput placeholder="Answer 4." />
      </Answer>
    </AnswersContainer>
  );
}
