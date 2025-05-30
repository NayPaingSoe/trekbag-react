import { useItemStore } from '../stores/itemsStore';

export default function Counter() {
  const items = useItemStore(state=>state.items);
  const packedCount = items.filter(item=>item.packed==true).length;
  return (
    <p>
      {packedCount}/{items.length} packed 
    </p>
  )
}
