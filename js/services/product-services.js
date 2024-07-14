//DEV
// const apiURL = "http://localhost:3000/products";

//PROD
const apiURL = "https://alurageek-api-chi.vercel.app/products";

const getItemsList = async () => {
    try {
        const response = await fetch(apiURL);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
};

const createItem = async (name, price, image) => {
    try {
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                price,
                image,
            })
        });
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}

const deleteItem = async (id) => {
    try {
        const response = await fetch(`${apiURL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
}

export const productServices = {
    getItemsList,
    createItem,
    deleteItem,
};