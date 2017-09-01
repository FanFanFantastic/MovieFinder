$(document).ready(()=>{
    
 $('#searchButton').on('click',(e)=>{
     e.preventDefault();
     
     let searchText = $('#searchForm').val();
     getMovies(searchText);
     
 }) 
    
});


function getMovies(searchText)
{
    $.ajax({
        url: 'http://www.omdbapi.com?s='+searchText+'&apikey=thewdb',
        type: 'GET',
        dataType: 'json',
        success: displayMovies   
    })
}

function displayMovies(response)
{
    //console.log(response);
    let movieList = response.Search;
    
    let output = '';
    
    $.each(movieList,(index,movie)=>{
        
        output +=`
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>
                `;
    });
    
    $('#dynamic_info').html(output);
    
    
}