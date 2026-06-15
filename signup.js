function togglePassword(id){

    const password =
    document.getElementById(id);

    if(password.type === "password"){

        password.type = "text";

    }
    else{

        password.type = "password";

    }

}

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const signupForm =
        document.getElementById("signupForm");

        if(signupForm){

            signupForm.addEventListener(
                "submit",
                function(event){

                    event.preventDefault();

                    const userName =
                    document.getElementById(
                        "userName"
                    ).value;

                    const collegeName =
                    document.getElementById(
                        "collegeName"
                    ).value;

                    const email =
                    document.getElementById(
                        "email"
                    ).value;

                    localStorage.setItem(
                        "userName",
                        userName
                    );

                    localStorage.setItem(
                        "collegeName",
                        collegeName
                    );

                    localStorage.setItem(
                        "userEmail",
                        email
                    );

                    alert(
                        "Signup Successful!"
                    );

                    window.location.href =
                    "home.html";

                }
            );

        }

    }
);
