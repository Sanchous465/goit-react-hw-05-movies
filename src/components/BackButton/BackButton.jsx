import { FiArrowLeft } from "react-icons/fi";
import { StyledLink } from 'components/BackButton/BackButton.styled'; 
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <FiArrowLeft />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired
}