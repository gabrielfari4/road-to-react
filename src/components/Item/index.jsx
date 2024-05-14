const Item = ({ item, onRemoveItem }) => {
    const handleRemoveItem = () => {
      onRemoveItem(item)
    }
  
    return (
        // key é um atributo importante a ser usado sempre com algum tipo de id único para garantir a fidelidade de organização de listas
        <div>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> - {item.author}, </span>
              <span>{item.num_comments}, </span>
              <span>{item.points}</span>
              <span>
              &nbsp;
                {/* Ao clicar no botão é chamado o handler que vai retirar este item */}
                {/* Outra opção é o inline handler, que dispensa a implementação do handler no componente e resume a lógica a uma linha dentro do JSX */}
                {/* Inline handler: <button type='button' onClick={() => onRemoveItem(item)}> */}
                <button type='button' onClick={handleRemoveItem}>
                  Dismiss
                </button>
              </span>
        </div>
    );
}

export default Item;