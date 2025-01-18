// Initialization for ES Users
import {
  Collapse,
  Dropdown,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Dropdown });


window.onload = function() {
            // Seleccionamos el elemento que contiene el texto
            const texto = document.getElementById('texto');
            
            // Cambiamos la clase a opacity-100 para hacerlo visible
            texto.classList.remove('opacity-0');
            texto.classList.add('opacity-100');
        };
    
        // Carrito de compras
const cart = [];

// Añadir productos al carrito
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.getAttribute('data-name');
        const servicePrice = card.getAttribute('data-price');
        const service = { name: serviceName, price: servicePrice };
        cart.push(service);
        alert(`${serviceName} agregado al carrito. Precio: $${servicePrice}`);
    });
});

// Mostrar el carrito
document.getElementById('view-cart-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    let cartDetails = 'Servicios en tu carrito:\n';
    let totalPrice = 0;
    cart.forEach(item => {
        cartDetails += `${item.name} - $${item.price}\n`;
        totalPrice += parseFloat(item.price);
    });

    cartDetails += `\nTotal: $${totalPrice}`;
    alert(cartDetails);
});
