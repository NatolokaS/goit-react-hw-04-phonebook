import css from './Filter.module.css';
const Filter = ({ filter, onChangeFilter }) => {
  return (
      <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};
export default Filter;