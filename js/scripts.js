$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var newAddress = { street: inputtedStreet,
                       city: inputtedCity,
                       state: inputtedState,
                       fullAddress: function() {
                         return this.street + ", " + this.city + ", " + this.state;
                       }
                     };
    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       address: newAddress.fullAddress()
                      };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
  });
});
