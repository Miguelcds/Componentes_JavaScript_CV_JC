

// Creo funcion de redireccion de pagina
const linkPage = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => page())
};

export default linkPage;

