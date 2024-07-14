import { productServices } from "../services/product-services.js";

const itemContainer = document.querySelector("[data-produto]");
const form = document.querySelector("[data-form]");

function createItem(id, name, price, image) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="contenedor__productos__imagen">
            <img src="${image}" alt="${name}">
        </div>
        <div class="contenedor__productos__nombre">
            <p>${name}</p>
        <div class="contenedor__productos__precio">
            <p>$${price}</p>
            <button class="boton__borrar" data-id="${id}">
                <img src="assets/boton-borrar.png" alt="borrar">
            </button>    
        </div>
        </div>
    `

    itemContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const productsList = await productServices.getItemsList();

        productsList.forEach(product => {
            itemContainer.appendChild(
                createItem(
                    product.id,
                    product.name,
                    product.price,
                    product.image
                )
            )
        });

    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    productServices.createItem(name, price, image)
        .then((response) => {
            console.log(response.status);
            if (response && response.id) {
                window.location.reload();
            }
        })
        .catch((error) => console.log(error));

});

itemContainer.addEventListener("click", async (e) => {
    if (e.target.classList.contains("boton__borrar") || e.target.closest(".boton__borrar")) {
        const btnDelete = e.target.closest(".boton__borrar");
        const id = btnDelete.dataset.id;
        try {
            await productServices.deleteItem(id);
            btnDelete.closest(".card").remove();
        } catch (error) {
            console.log(error);
        }
    }
});

render();