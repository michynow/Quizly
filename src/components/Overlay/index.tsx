import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';
interface Props {
  isVisible?: Boolean,
}
const OverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: calc(100%);
    z-index: 10;
  `;
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
