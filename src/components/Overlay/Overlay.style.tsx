import styled from 'styled-components';
import {motion} from 'framer-motion';
export const OverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100%);
  z-index: 10;
`;