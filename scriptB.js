        //Eliminamos el párrafo 1
        let parrafo1 = document.getElementById("parrafo1");
        parrafo1.remove();
        
        // ***** Creamos el HEADER para el parrafo*****        
        
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        header.classList.add("estiloHeader");
        h1.textContent = "Encabezado de la página";
        header.appendChild(h1);
        document.body.appendChild(header);



        // ***** Creamos la SECTION1 para el parrafo*****        
        
        // Primera seccion y su article como hijo
        const section1 = document.createElement("section");

        //Le asignamos su id y el estilo que le corresponde
        section1.setAttribute("id", "seccion1");
        section1.classList.add("estiloSecciones");

        //Creamos el article donde irá el párrafo
        const article = document.createElement("article");
        
        //Incluimos el parrafo2 en el article creado
        article.appendChild(document.getElementById("parrafo2"));
        section1.appendChild(article);
        document.body.appendChild(section1);

        // ***** Creamos la SECTION2 para la Tabla*****        
        
        //Creamos la seccion de la tabla
        const section2 = document.createElement('section');
        
        //Le asignamos su id y su estilo
        section2.setAttribute("id", "seccion2");
        section2.classList.add("estiloSecciones");

        //Creamos la tabla
        const table = document.createElement('table');

        //Creamos la fila thead
        const row1 = document.createElement('thead');

        //Creamos el evento para cambiar el estilo al pasar con el ratón por el thead
        row1.addEventListener("mouseover", () => {
            table.classList.add("estiloTabla");
        })

        //Creamos el evento para quitar el estilo
        row1.addEventListener("mouseout", () => {
            table.classList.remove("estiloTabla");
        })

        //Creamos el primer th
        const header1 = document.createElement('th');
        header1.textContent = "Nombre";

        //Creamos el segundo th
        const header2 = document.createElement('th');
        header2.textContent = "Edad";

        //Las apendizamos a la fila
        row1.appendChild(header1);
        row1.appendChild(header2);

        //Creamos la segunda fila
        const row2 = document.createElement('tr');

        //Creamos las celdas y su contenido
        const data1 = document.createElement('td');
        data1.textContent = "Juan";
        const data2 = document.createElement('td');
        data2.textContent = "25";
       
        //Las apendizamos a la fila
        row2.appendChild(data1);
        row2.appendChild(data2);

        //Apendizamos ambas filas a la tabla
        table.appendChild(row1);
        table.appendChild(row2);

        //Apendizamos la tabla a la section2
        section2.appendChild(table);

        //Apendizamos la section al body
        document.body.appendChild(section2);
