import "./css/pizza_template.css";

function Pizza({ nombre,
    ingredientes,
    precio,
    imagen
}) {

    return (
        <div className="pizza-card">
            <img src={imagen} alt={nombre} className="pizza-image"/>
            <h2>{nombre}</h2>
            <p>{ingredientes.join(", ")}</p>
            <p>{precio}</p>
        </div>
    )

}

export default function PizzaDetailList() {
    const pizzas = [
    { id: 1, nombre: "Margherita", ingredientes: ["Tomate", "Mozzarella", "Albahaca"], precio: 12, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/960px-Eq_it-na_pizza-margherita_sep2005_sml.jpg" },
    { id: 2, nombre: "Pepperoni", ingredientes: ["Pepperoni", "Mozzarella", "Salsa de tomate"], precio: 15, imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg" },
    { id: 3, nombre: "Hawaiana", ingredientes: ["Piña", "Jamón", "Queso"], precio: 14, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Pizza_Hawaii_02.jpg/960px-Pizza_Hawaii_02.jpg" },
    { id: 4, nombre: "Cuatro Quesos", ingredientes: ["Gorgonzola", "Parmesano", "Mozzarella", "Fontina"], precio: 16, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg/960px-Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg" },
    { id: 5, nombre: "Vegetariana", ingredientes: ["Pimientos", "Cebolla", "Aceitunas", "Champiñones"], precio: 13, imagen: "https://www.goya.com/wp-content/uploads/2023/10/skinny-pizza-450x450.jpg" },
    { id: 6, nombre: "Mexicana", ingredientes: ["Chorizo", "Jalapeños", "Carne molida","Salsa de tomate","tomate"], precio: 15, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2019-01-22_21_07_29_A_Mexican_pizza_from_Taco_Bell_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/960px-2019-01-22_21_07_29_A_Mexican_pizza_from_Taco_Bell_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg" },
    ];
            
    return (
        pizzas.map((pizza) => (
            <Pizza
                key={pizza.id}
                nombre={pizza.nombre}
                ingredientes={pizza.ingredientes}
                precio={pizza.precio}
                imagen={pizza.imagen}
            />
        ))
    )
};
