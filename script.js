function changeLinkColor() {
    var navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
    link.addEventListener("mouseover", function() {
        this.style.color = "chocolate";
    });
    link.addEventListener("mouseout", function() {
        this.style.color = ""; 
    });
    });
}


function changeContactCardColor() {
    var contactCards = document.querySelectorAll(".contact-card");

    contactCards.forEach(function(card) {
    var spans = card.querySelectorAll("span");

    card.addEventListener("mouseover", function() {
        card.style.color = "chocolate";

        spans.forEach(function(span) {
        span.style.color = "chocolate";
        });
    });

    card.addEventListener("mouseout", function() {
        card.style.color = ""; 

        spans.forEach(function(span) {
        span.style.color = ""; 
        });
    });
    });
}



function applyImageTransform() {
    var discoverCards = document.querySelectorAll(".discover-card");

    discoverCards.forEach(function(card) {
    var image = card.querySelector("img");
    image.addEventListener("mouseover", function() {
        image.style.transform = "translateY(-15px)";
    });

    image.addEventListener("mouseout", function() {
        image.style.transform = ""; 
    });
    });
}


function applyGalleryContentStyle() {
    var galleryCards = document.querySelectorAll(".gallery-card");

    galleryCards.forEach(function(card) {
    var galleryContent = card.querySelector(".gallery-content");

    card.addEventListener("mouseover", function() {
        galleryContent.style.bottom = "0";
    });
    card.addEventListener("mouseout", function() {
        galleryContent.style.bottom = ""; 
    });
    });
}




function applyButtonStyle() {
    var discoverCardContents = document.querySelectorAll(".discover-card-content");

    discoverCardContents.forEach(function(content) {
        var button = content.querySelector("button");

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "chocolate";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = ""; 
    });
    });
}


function applyButtonStyle() {
    var col1Buttons = document.querySelectorAll(".about-us .col1 button");

    col1Buttons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "transparent";
        button.style.border = "1px solid white";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = ""; 
        button.style.border = ""; 
    });
    });
}


function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "") {
    alert("Please enter your email.");
    return false;
    }

    if (password === "") {
    alert("Please enter your password.");
    return false;
    }

    return true;
}

function validateSignUp(){
    var email=document.getElementById("E-mail").value;
    var password=document.getElementById("password").value;
    var gender=document.getElementById("gender").value;

    if (email === "") {
        alert("Please enter your email.");
        return false;
        }
    
        if (password === "") {
        alert("Please enter your password.");
        return false;
        }

        if (gender === "Select gender") {
            alert("Please enter your gender.");
            return false;
            }
            

}

function buttonScale(){

    let mainButton = document.getElementById("mainButton");

    
    mainButton.addEventListener("mouseover", function() {
    mainButton.style.transform = "scale(1.1)";
    
    });
    
    mainButton.addEventListener("mouseout", function() {
    mainButton.style.transform = "scale(1)";
    });
}

function discoverButton(){
    let Buttons=document.querySelectorAll(".discover-card-content button")

    Buttons.forEach((button)=>{
        button.addEventListener("mouseover",()=>{
            button.style.backgroundColor="chocolate"
        });


        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = ""; 
        });

    })
}
