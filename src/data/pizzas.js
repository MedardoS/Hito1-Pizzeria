// 📦 src/data/pizzas.js

// 👉 Importamos las imágenes locales
import napolitana from "../assets/img/napolitana.webp";
import espanola from "../assets/img/espanola.webp";
import pepperoni from "../assets/img/pepperoni.webp";
import cuatroquesos from "../assets/img/cuatro-quesos.webp";
import hawaiana from "../assets/img/hawaiana.webp";
import vegetariana from "../assets/img/vegetariana.webp";

// 👉 Creamos el array con las pizzas
export const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: napolitana,
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: espanola,
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: pepperoni,
  },
  {
    id: 4,
    name: "Cuatro Quesos",
    price: 7250,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: cuatroquesos,
  },
  {
    id: 5,
    name: "Hawaiana",
    price: 6550,
    ingredients: ["mozzarella", "piña", "jamón", "salsa de tomate"],
    img: hawaiana,
  },
  {
    id: 6,
    name: "Vegetariana",
    price: 6750,
    ingredients: ["mozzarella", "pimentón", "aceitunas", "champiñones"],
    img: vegetariana,
  },
];

// 👉 Simulamos el carrito
export const pizzaCart = [
  { id: 1, name: "Napolitana", price: 5950, quantity: 1, img: napolitana },
  { id: 3, name: "Pepperoni", price: 6950, quantity: 2, img: pepperoni },
];
