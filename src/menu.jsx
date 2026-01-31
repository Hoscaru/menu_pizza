import PizzaDetailList from "./pizza_template";
import Footer from "./Footer";
import "./css/menu.css";

export default function Menu() {
    return (
        <>
            <h1>PIZZERIA OSCARINI</h1>
            <p>Autenticas pizzas artesanales hechas por el poderoso <strong>Oscartiny</strong></p>
            <div className="menu">
                <PizzaDetailList />
            </div>
            <Footer />
        </>
    )
}