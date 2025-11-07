const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <p className="fw-bold mt-2">Precio: ${price}</p>
        <button className="btn btn-danger">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
