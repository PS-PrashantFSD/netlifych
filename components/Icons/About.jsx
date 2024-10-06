import { motion } from 'framer-motion';
import colors from '../../styles/colors';

const AboutIcon = ({ fillColor = colors.white, ...props }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
      fill={fillColor}
    />
  </motion.svg>
);

export default AboutIcon;
