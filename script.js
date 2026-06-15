function togglePassword(){

    const password =
    document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";

    }
    else{

        password.type = "password";

    }

}

/* Login Form */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        document.getElementById("loginForm")
        .addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                alert("Login Successful!");

                window.location.href =
                "home.html";

            }
        );

    }
);
document.addEventListener(
    
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