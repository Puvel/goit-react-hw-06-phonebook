import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ filter, filterInput }) => (
  <div className={css.filterBox}>
    <label className={css.filterLable}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        name="filter"
        onChange={filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string,
  filterInput: PropTypes.func,
};
