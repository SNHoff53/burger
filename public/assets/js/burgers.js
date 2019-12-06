$(function() {
    $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");

        var isDevouredStatus = {
            devoured: isDevoured
        };

        // Sending the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevouredStatus
        }).then(function() {
            console.log("changed devoured status to", isDevoured); 
            //Reloading the page to get an updated list
            location.reload();
            }
        );
    });

$(".create-form").on("submit", function(event) {
    // === Make sure to preventDefault on a submit event ===
    event.preventDefault();

    var newBurger = {
        burger_name: $("burger_name").val().trim(),
        devoured: $("[devoured]:checked").val().trim()
    };

    // === Sending the POST request ==
    $.ajax("/api/burgers/", {
        burger_name: "POST",
        data: newBurger
    }).then(function() {
        console.log("new burger has been created");
        // === Reloading the page to get updated list ===
        location.reload();
        }   
    );
  });

$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // === Sending the DELETE requestt ===
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function() {
        console.log("Burger has been deleted", id);
        // === Reloading the page to get the updated list ===
        location.reload();
        }
    );
  });
});