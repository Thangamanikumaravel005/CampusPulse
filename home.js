document.addEventListener("DOMContentLoaded", function(){

    const userName =
    localStorage.getItem("userName");

    const userEmail =
    localStorage.getItem("userEmail");

    if(userName){

        document.getElementById(
            "userName"
        ).textContent = userName;

    }
    else if(userEmail){

        document.getElementById(
            "userName"
        ).textContent = userEmail;

    }
localStorage.setItem(
    "userEmail",
    document.getElementById("email").value
);
});
document.addEventListener(
    "DOMContentLoaded",
    function(){

        const userName =
        localStorage.getItem(
            "userName"
        );

        if(userName){

            document.getElementById(
                "userName"
            ).textContent =
            userName;

        }

    }
);
function showDetails(eventId){

    const details =
    document.getElementById(eventId + "-details");

    if(details.style.display === "block"){
        details.style.display = "none";
    }
    else{
        details.style.display = "block";
    }

}

function showRegister(eventId){

    const register =
    document.getElementById(eventId + "-register");

    if(register.style.display === "block"){
        register.style.display = "none";
    }
    else{
        register.style.display = "block";
    }

}