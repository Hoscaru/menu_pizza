export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>Estamos abiertos hasta las {closeHour}:00. ¡Ven a visitarnos o pide online!</p>
                    <button className="btn">Pedir ahora</button>
                </div>
            ) : (
                <p>Estamos cerrados. Te esperamos mañana a partir de las {openHour}:00.</p>
            )}
        </footer>
    );
}
