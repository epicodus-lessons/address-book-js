$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
  });
});

<div class="col-md-6">
  <div id="show-contact">
    <h2></h2>

    <p>First name: <span class="first-name"></span></p>
    <p>Last name: <span class="last-name"></span></p>
    <p>Address: <span class="address"></span></p>
  </div>
</div>

show-contact {
  display: none;
}

.contact {
  cursor: pointer;
  color: #0088cc;
}

.contact:hover {
  text-decoration: underline;
}
