import "./css/pizza_template.css";
import { pizzas } from "./data/pizzadata.js";

function Pizza({ nombre,
    ingredientes,
    precio,
    imagen,
    disponible
}) {

    return (
        <div className="pizza-card">
            <img src={imagen} alt={nombre} className="pizza-image" />
            <h2>{nombre}</h2>
            <p>{ingredientes.join(", ")}</p>
            {disponible ? <p>{precio}</p> : <p className="agotado">Agotado</p>}
        </div>
    )

}

export default function PizzaDetailList() {


    return (
        pizzas.map((pizza) => (
            <Pizza
                key={pizza.id}
                nombre={pizza.nombre}
                ingredientes={pizza.ingredientes}
                precio={pizza.precio}
                imagen={pizza.imagen}
                disponible={pizza.disponible}
            />
        )
        ))
};
