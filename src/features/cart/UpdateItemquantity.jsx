import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantiy, increseItemQuantiy } from './cartSlice';

const UpdateItemquantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  pizzaId;
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantiy(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium"> {currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increseItemQuantiy(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemquantity;
