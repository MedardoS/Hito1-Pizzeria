# 🍕 Pizzería Mamma Mía

Proyecto del Hito 1 - Introducción a React (Desafío Latam)

## 🚀 Vista previa
![Vista del proyecto](./src/views/captura.png)

## 💡 Descripción
Aplicación React que muestra un menú de pizzas con componentes reutilizables.
Incluye Navbar, Header, Cards y Footer.  

## ⚙️ Hito 2 - Estados y Eventos en React
En esta etapa se implementaron los **formularios de Registro y Login**, manejando el **estado (`useState`)** y los **eventos (`onChange`, `onSubmit`)**.

**Funciones agregadas:**
- Validaciones de campos obligatorios.  
- Contraseñas con mínimo 6 caracteres.  
- Confirmación de contraseña igual a la original.  
- Mensajes dinámicos de error o éxito.  

---

## 💻 Tecnologías utilizadas
- React  
- JavaScript (ES6+)  
- CSS / Bootstrap  

---

---

## 🍕 Hito 3 - Renderización dinámica de componentes
Se implementó la carga dinámica de pizzas desde el archivo `pizzas.js`, 
utilizando `.map()` para renderizar componentes en `Home.jsx` y `CardPizza.jsx`.

Además, se creó un carrito de compras (`Cart.jsx`) que permite:
- Aumentar y disminuir la cantidad de productos.
- Eliminar pizzas al llegar a 0 unidades.
- Calcular automáticamente el total del pedido.

## 🌐 Hito 4 – Consumo de API externa

En este hito la aplicación dejó de usar datos locales y comenzó a consumir una **API real** desde un backend propio.

### ✔️ Cambios realizados
- Se levantó el backend en `http://localhost:5000`.
- Se consumió el endpoint **GET /api/pizzas** desde `Home.jsx` usando `fetch` y `useEffect`.
- Se reemplazó el archivo de datos local `pizzas.js` por la información entregada por la API.
- Se creó el componente `Pizza.jsx` que consume **GET /api/pizzas/p001** y muestra:
  - Nombre  
  - Imagen  
  - Precio  
  - Ingredientes  
  - Descripción

El botón “Añadir al carrito” aún no tiene funcionalidad, tal como indica este hito.

## 🧭 Hito 5 – Implementación de React Router

En esta etapa se incorporó el sistema de enrutamiento con **React Router**, permitiendo navegar entre las diferentes vistas de la aplicación.

### ✔️ Cambios realizados
- Instalación y configuración de `react-router-dom`.
- Se movieron los componentes principales a la carpeta `pages/`.
- Se implementaron las rutas para:
  - `/` → Home
  - `/register` → Register
  - `/login` → Login
  - `/cart` → Cart
  - `/pizza/p001` → Pizza (por ahora ID fijo)
  - `/profile` → Perfil del usuario
  - `*` → Página NotFound (404)

### ✔️ Nuevos componentes
- **Profile.jsx:** muestra un email estático y un botón de cierre de sesión.
- **NotFound.jsx:** página de error con un enlace para volver al Home.

### ✔️ Navbar actualizado
- Se reemplazaron los `<a>` por `<Link>` de React Router.
- El botón **🛒 Total** redirige correctamente al carrito (`/cart`).

Este hito permite estructurar la navegación completa de la aplicación para continuar con la lógica de usuario y carrito en los próximos módulos.

## 🛒 Hito 6 – Manejo de estado global con Context API

En este hito se implementó el manejo del **carrito de compras** utilizando **React Context**, permitiendo compartir el estado global entre todos los componentes de la aplicación.

### ✔ Funcionalidades desarrolladas:
- Creación de un **CartContext** para manejar el estado global del carrito.
- Implementación de un **CartProvider** que administra:
  - `addToCart()` → añade productos al carrito.
  - `increase()` → incrementa la cantidad.
  - `decrease()` → reduce la cantidad y elimina el producto si llega a 0.
  - `total` → calcula el total de la compra.
- Consumo del CartContext en:
  - **Navbar** → muestra el total del carrito en tiempo real.
  - **Home** → cada card puede añadir productos al carrito.
  - **Pizza** → permite añadir una pizza desde la vista individual.
  - **Cart** → muestra los productos agregados, permite sumar/restar y calcular el total.
- El total mostrado en el navbar y en el carrito es siempre consistente gracias al estado global compartido.

Este hito integra el manejo de estado global en la aplicación, permitiendo un flujo completo del carrito de compras desde cualquier parte del sitio.

## 🔐 Hito 7 – Autenticación con Context API

En este hito se implementó el **manejo de autenticación global** utilizando **UserContext** y React Context API.

### ✔️ Funcionalidades implementadas
- Creación de **UserContext** y **UserProvider** para manejar:
  - Email del usuario.
  - Token recibido desde el backend.
  - Función `login()` para iniciar sesión.
  - Función `logout()` para cerrar sesión.
- Integración del UserProvider en toda la aplicación.
- El componente **LoginPage** ahora realiza la petición al backend y guarda el token globalmente.
- El componente **Profile** muestra la información del usuario y permite cerrar sesión.
- El **Navbar** se actualiza dinámicamente según si el usuario está autenticado o no:
  - Si NO hay usuario → muestra “Login” y “Register”.
  - Si hay usuario → muestra “Profile” y “Logout”.
- Se validó que todo funcione correctamente con el backend local.

### 💡 Resultado
La aplicación ahora cuenta con un sistema de autenticación global funcional, listo para continuar con la protección de rutas en próximos hitos.

## 🔐 Hito 8 – Autenticación real con JWT + Checkout conectado al backend

En este hito se integró la autenticación real utilizando **JWT** y se completó el flujo de compra conectado al backend, reemplazando la lógica simulada del hito anterior.

### ✔️ Funcionalidades implementadas
- Implementación de peticiones reales a la API:
  - `POST /api/auth/login` para iniciar sesión.
  - `POST /api/auth/register` para registrar usuarios.
  - `GET /api/auth/me` para obtener el perfil del usuario autenticado.
- El **UserProvider** ahora maneja:
  - Token JWT y persistencia en `localStorage`.
  - Email del usuario obtenido desde el backend.
  - Funciones `login()`, `register()`, `logout()` y `getProfile()`.
- La sesión del usuario se mantiene activa después de recargar la página.
- El **Navbar** se actualiza dinámicamente:
  - Si no hay token → muestra “Login” y “Register”.
  - Si hay token → muestra “Profile” y “Logout”.
  - El botón **Logout** limpia la sesión y redirige al Home.
- En la página **Cart.jsx** se implementó el checkout real:
  - Envío del carrito mediante `POST /api/checkouts`.
  - Validación de token en los headers.
  - Mensaje de compra exitosa.
  - Redirección automática al Home después del pago.

### 💡 Resultado
La aplicación queda completamente conectada al backend, con autenticación real mediante JWT, manejo persistente de sesión y un flujo de compra funcional que integra el carrito con el servidor.



## 🧑‍💻 Autor
**Medardo Enrique Sanchez Sequera**

