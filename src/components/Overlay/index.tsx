import { AnimatePresence } from "framer-motion";
import {OverlayStyled} from './Overlay.style';
interface Props {
  isVisible?: Boolean,
}

const Overlay: React.FC<Props> = ({ isVisible }) => {
  
  return (
    <AnimatePresence>
      {isVisible && (<OverlayStyled
        initial={{ opacity: 0, backgroundColor:"#000" }}
        animate={{ opacity: 0.25, backgroundColor:"#000" }}
        transition={{duration:0.5}}
        exit={{backgroundColor:'#000', opacity:0.0}}
      />)}
    </AnimatePresence>
  );
};

export default Overlay;
