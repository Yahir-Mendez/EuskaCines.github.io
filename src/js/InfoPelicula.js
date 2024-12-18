// Recupera la información de la película seleccionada desde localStorage
const Data = JSON.parse(localStorage.getItem("movie"));

// Función principal para mostrar la información de la película
const peliculaInfo = () => {
    // Se asigna el objeto de datos de la película
    const DataPelicula = Data;

    // Actualiza el slider con los detalles de la película seleccionada
    slider2(DataPelicula.urlPortada, DataPelicula.nombre.toUpperCase());

    // Muestra la información detallada de la película
    infoPelis(DataPelicula.duracion, DataPelicula.actores, DataPelicula.genero, DataPelicula.directores, DataPelicula.descripcion);
}

// Función para actualizar la imagen y el título en el slider
const slider2 = (src, nombre) => {
    // Se obtiene el elemento de la imagen en el slider
    const sliderImg = document.getElementById("slider2-image");

    // Se obtiene el elemento del título en el slider
    const sliderTitle = document.getElementById("slider2-title");

    // Actualiza la imagen del slider con la URL proporcionada
    sliderImg.setAttribute("src", src);

    // Actualiza el alt de la imgen con el nombre de la pelicula
    sliderImg.setAttribute("alt",nombre);

    sliderImg.setAttribute("width","150px"); //asigna explicitamente un width ( para mejorar SEO )

    // Actualiza el título del slider con el nombre de la película (en mayúsculas)
    sliderTitle.textContent = nombre;
};

// Función para actualizar la información detallada de la película
const infoPelis = (duracion, actores, genero, directores, descripcion) => {
    // Se obtiene y actualiza cada párrafo con la información correspondiente
    const duracionParrafo = document.getElementById("duracionParrafo");
    duracionParrafo.innerText = duracion; // Duración de la película

    const actoresParrafo = document.getElementById("actoresParrafo");
    actoresParrafo.innerText = actores; // Actores de la película

    const generoParrafo = document.getElementById("generoParrafo");
    generoParrafo.innerText = genero; // Género de la película

    const directoresParrafo = document.getElementById("directoresParrafo");
    directoresParrafo.innerText = directores; // Directores de la película

    const descripcionParrafo = document.getElementById("descripcionParrafo");
    descripcionParrafo.innerText = descripcion; // Descripción de la película

     // Mostrar la valoración de la película con estrellitas
     const valoracionContainer = document.getElementById('valoracionPelicula');
     valoracionContainer.innerHTML = ''; // Limpiar contenido previo
     for (let i = 0; i < Data.valoracion; i++) {
         const star = document.createElement('span');
         star.classList.add('star');
         star.textContent = '★';
         const contain = document.createElement('a');
         contain.setAttribute('href', '/src/pages/valoracion.html');
         contain.appendChild(star);
         valoracionContainer.appendChild(contain);
         
     }
     for (let i = Data.valoracion; i < 5; i++) {
         const star = document.createElement('span');
         star.classList.add('star');
         star.textContent = '☆';
         const contain = document.createElement('a');
         contain.setAttribute('href', '/src/pages/valoracion.html');
         contain.appendChild(star);
         valoracionContainer.appendChild(contain);
     }
};

// Llama a la función principal para mostrar la información de la película
peliculaInfo();