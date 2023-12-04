import { FilterStyled } from './FilterStyled';

export const Filter = ({ name, onUpdateFilter }) => {
  return (
    <FilterStyled
      type="text"
      value={name}
      onChange={evt => onUpdateFilter(evt.target.value)}
    />
  );
};
