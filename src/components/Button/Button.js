import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ loadMore }) {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more...
    </button>
  );
}

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func,
};
