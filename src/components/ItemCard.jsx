export const ItemCard = ({ item }) => {
  return (
    <div className="item" key={item.id}>
      <h2>{item.name}</h2>
      <p>Age: {item.age}</p>
    </div>
  );
};

export default ItemCard;
