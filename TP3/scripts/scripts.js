// Affiche/cache les stocks
function toggleStock() {
    const stockElements = document.querySelectorAll('.stock');
    stockElements.forEach(stock => {
        stock.style.display = (stock.style.display === 'none' || stock.style.display === '') ? 'block' : 'none';
    });
}


function changeQuantity(button, change) {
    const input = button.parentElement.querySelector('.quantity-input');
    let currentQuantity = parseInt(input.value);
    const maxQuantity = parseInt(input.getAttribute('max'));

    currentQuantity += change;
    if (currentQuantity < 0) {
        currentQuantity = 0;
    } else if (currentQuantity > maxQuantity) {
        currentQuantity = maxQuantity;
    }

    input.value = currentQuantity;

    // Désactivation du bouton lorsque la quantité > stock
    const addToCartButton = button.parentElement.parentElement.querySelector('.add-to-cart');
    addToCartButton.disabled = currentQuantity === 0;
}

function openImageModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}


