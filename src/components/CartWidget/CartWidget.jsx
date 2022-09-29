import carritoLogo from '../../assets/carritoLogo.png';

export const CartWidget = () => {
    return (
        <div>
            <img src={carritoLogo} alt="Carrito" className="carro" />
            <span className="contador">0</span>
        </div>
    )
}