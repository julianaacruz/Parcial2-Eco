
const database= firebase.database();
const movieContainer = document.getElementById('movieContainer');
const sendScoreBtn = document.getElementById('sendScoreBtn');

let arrayMovies=[];
let j;

/* --------------Enviar peliculas a base de datos

let movie ={name: 'Sound of Metal',score: 0.0};


addMovie = () => {  
    alert('send movie');
    database.ref('peliculas/'+movie.name).set(movie.score); //Enviar peliculas a database

}
sendScoreBtn.addEventListener('click', addMovie); // Use el mismo boton de enviar para no hacer otro

*/



//Lectura en consola de peliculas y puntajes
database.ref('peliculas').on('value', function(data) {
    //console.log(data.val()).
    data.forEach(
        function(movie){
            let valor = movie.val();
            let name = movie.key;
            let score = movie.val().score;
            console.log(name);
            console.log(score);
            let pelicula = new Movie(name,score);
            movieContainer.appendChild(pelicula.render());
            arrayMovies.push(pelicula);

        }
    );

});

vote = () => { 
    if (
        arrayMovies[0].stars == null ||
        arrayMovies[1].stars == null ||
        arrayMovies[2].stars == null ||
        arrayMovies[3].stars == null ||
        arrayMovies[4].stars == null
      ) {
      
        alert("Debe votar por todas las peliculas");
    }

    j++;

    for (let i = 0; i < arrayMovies.length; i++) {
    let vote = parseInt(arrayMovies[i].stars);
    let currentScore = parseInt(arrayMovies[i].score);
    let newScore= (currentScore*(j-1)+vote/j); //promedio

    let update ={
        name:arrayMovies[i].name,
        score:newScore
    }
    database.ref('peliculas/'+arrayMovies[i].name).set(update);

    }



}

sendScoreBtn.addEventListener('click', vote); 


