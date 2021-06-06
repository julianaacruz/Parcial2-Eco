class Movie{

    constructor (name,score){
        this.name = name;
        this.score = score;
        this.stars;

    }

    render = () =>{
        let component = document.createElement('div'); //Componente completo
        component.className = 'filaPelicula';

        let nameContainer = document.createElement('div'); //Nombre
        nameContainer.className = 'nombrePelicula';
        nameContainer.innerHTML = 
            this.name;

        let scoreContainer = document.createElement('div'); //Punatje en numeros
        scoreContainer.className = 'scorePelicula';

        scoreContainer.innerHTML = 
            this.score;

        let starsContainer = document.createElement('fieldset'); //Contenedor entrellas
        starsContainer.className = 'rating';

        component.appendChild(nameContainer);
        component.appendChild(scoreContainer);
        component.appendChild(starsContainer);

        let showValue = document.createElement('h3');


        for (let i = 5; i > 0; i--) { //Estrellas que no son estrellas :c
            let star = document.createElement("input"); //Inputs
            star.type='radio';
            star.id= this.name +"star"+i;
            star.name="rating"+this.name;
            star.value=i;

            let label = document.createElement("label");
            label.htmlFor = this.name +"star"+i;

				
            star.addEventListener('click', ()=>{
                this.stars=star.value;
                showValue.innerHTML = i + "/5";

            });

            starsContainer.appendChild(star);
            component.appendChild(showValue);


        }

        return component;
    }
}