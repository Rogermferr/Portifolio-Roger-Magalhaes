import { stackData } from '../../utils';
import StackCard from './StackCard/index,';
import { ListStacksStyle } from './style';

const ListStacks = () => {
  return (
    <ListStacksStyle>
      {stackData.map((stack, index) => (
        <StackCard key={index} {...stack} />
      ))}
    </ListStacksStyle>
  );
};

export default ListStacks;
