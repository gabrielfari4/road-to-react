import Item from '../Item'

// componente funcional que recebe a props (um array), faz o map para gerar elementos
const List = ({ list, onRemoveItem }) => 
    list.map(item => (
      <Item 
        key={item.objectID} 
        item={item}
        onRemoveItem={onRemoveItem} 
      />
      )  
    );

export default List;