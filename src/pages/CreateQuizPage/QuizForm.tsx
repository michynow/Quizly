import { TextInput } from "../../components/shared/TextInput";
import { QuizformWrapper } from "./QuizFormWrapper";
import { useState } from "react";
export default function QuizForm() {
const [focusState, setFocusState] = useState<Boolean>(false);
    return (
        <QuizformWrapper>
            Follow the instructions to create your own quiz
            <TextInput background="white"/>
        </QuizformWrapper>
    )
}
