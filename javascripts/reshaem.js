document.addEventListener("DOMContentLoaded", function(){

    let button = document.querySelectorAll(".click_button");
    button.forEach(function(click_button){
        click_button.addEventListener("click", function(){
            if(click_button.style.backgroundColor === "sandybrown"){
                click_button.style.backgroundColor = "lightcoral";
                click_button.style.margin = '2vw';
                console.log("change color");
            }
            else{
                click_button.style.backgroundColor = "sandybrown";
                click_button.style.margin = '1vw';
            }
        });
    });
});
