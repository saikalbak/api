$.ajax({
    type: "GET",
    url: "https://rickandmortyapi.com/api/character",
    success: function (response) {
        for (let i = 0; i < response.results.length; i++) {
            function status(x){
            switch (x) {
            case "Alive":
                return "green"
            case "Dead":
                return "red"
            default:
                return "gray"
        }}}
        for (let i = 0; i < response.results.length; i++) {
            function gender(x){
            switch (x) {
            case "Female":
                return "female"
            case "Male":
                return "Male"
            default:
                return "gray"
        }}}
        // console.log(response.results);
        for (let i = 0; i < response.results.length; i++){
            $(".cards").append(`<div class="card"> 
            <div class="card_image"> 
            <img src="${response.results[i].image}" alt="" class="img"> 
            </div>
            <div class="card-content"> 
            <h1 class="name">${response.results[i].name}</h1> 
            <h4 class="status ${status(response.results[i].status)}">${response.results[i].status}</h4> 
            <h3 class="gender ${gender(response.results[i].gender)}">${response.results[i].gender}</h3>  
            </div> </div>`);
        }
    }
});