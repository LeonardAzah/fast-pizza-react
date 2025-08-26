import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type={'small'} onClick={handleDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteItem;
