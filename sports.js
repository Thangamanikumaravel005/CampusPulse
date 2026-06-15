const sportsEvents = [
    {
        name: "Inter College Cricket Tournament",
        category: "Cricket",
        date: "2026-07-05"
    },

    {
        name: "Football League Championship",
        category: "Football",
        date: "2026-07-10"
    },

    {
        name: "Volleyball Tournament",
        category: "Volleyball",
        date: "2026-07-15"
    },

    {
        name: "Track & Field Meet",
        category: "Athletics",
        date: "2026-07-20"
    },

    {
        name: "Basketball Championship",
        category: "Basketball",
        date: "2026-07-25"
    },

    {
        name: "Badminton Open",
        category: "Indoor Sports",
        date: "2026-07-30"
    }
];

/* Search and Filter Elements */

const searchInput =
document.getElementById("searchInput");

const dateFilter =
document.getElementById("dateFilter");

const categoryFilter =
document.getElementById("categoryFilter");

const cards =
document.querySelectorAll(".event-card");

function filterSports(){

    const searchText =
    searchInput.value.toLowerCase();

    const selectedDate =
    dateFilter.value;

    const selectedCategory =
    
    categoryFilter.value;

    cards.forEach(card => {

        const title =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        const categoryText =
        card.querySelector("p")
        .textContent;

        const cardText =
        card.textContent;

        let matchesSearch =
        title.includes(searchText);

        let matchesDate =
        true;

        let matchesCategory =
        true;

        if(selectedDate){

            matchesDate =
            cardText.includes(selectedDate);
        }

        if(selectedCategory !== "all"){

            matchesCategory =
            categoryText.includes(
                selectedCategory
            );
        }

        if(
            matchesSearch &&
            matchesDate &&
            matchesCategory
        ){

            card.style.display =
            "block";

        }
        else{

            card.style.display =
            "none";

        }

    });

}

/* Event Listeners */

searchInput.addEventListener(
    "input",
    filterSports
);

dateFilter.addEventListener(
    "change",
    filterSports
);

categoryFilter.addEventListener(
    "change",
    filterSports
);

/* Register Button */

const registerButtons =
document.querySelectorAll(
    ".event-card button"
);

registerButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(){

            const eventName =
            this.parentElement
            .querySelector("h3")
            .textContent;

            alert(
                "Successfully registered for:\n\n" +
                eventName
            );

        }
    );

});
function openRegisterForm(){

    document.getElementById(
        "registerPopup"
    ).style.display = "block";

}

function closeRegisterForm(){

    document.getElementById(
        "registerPopup"
    ).style.display = "none";

}

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const form =
        document.getElementById(
            "registerForm"
        );

        if(form){

            form.addEventListener(
                "submit",
                function(event){

                    event.preventDefault();

                    alert(
                        "Registration Successful!"
                    );

                    this.reset();

                    closeRegisterForm();

                }
            );

        }

    }
);
// Open Registration Form

function openRegisterForm(){

    document.getElementById(
        "registerPopup"
    ).style.display = "block";

}

// Close Registration Form

function closeRegisterForm(){

    document.getElementById(
        "registerPopup"
    ).style.display = "none";

}

// Registration Submit

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const form =
        document.getElementById(
            "registerForm"
        );

        if(form){

            form.addEventListener(
                "submit",
                function(event){

                    event.preventDefault();

                    alert(
                        "Sports Event Registration Successful!"
                    );

                    this.reset();

                    closeRegisterForm();

                }
            );

        }

    }
);

// Close Popup When Clicking Outside

window.addEventListener(
    "click",
    function(event){

        const popup =
        document.getElementById(
            "registerPopup"
        );

        if(event.target === popup){

            closeRegisterForm();

        }

    }
);