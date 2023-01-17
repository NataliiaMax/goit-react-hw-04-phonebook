import PropTypes from 'prop-types';
import style from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={style.filterInput}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
