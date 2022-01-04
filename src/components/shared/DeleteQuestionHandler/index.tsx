import {
  DeleteBtnIcon,
  DeleteQuestionBtn,
} from "./DeleteQuestionBtn.style";
interface Props {
  title?: string;
  handleQuestionRemove: (e: React.MouseEvent) => void;
}
export default function DeleteQuestionHandler({
  title,
  handleQuestionRemove,
}: Props) {
  return (
    <DeleteQuestionBtn title={title} onClick={handleQuestionRemove}>
      <DeleteBtnIcon className="icon-cancel-circled" />
    </DeleteQuestionBtn>
  );
}
