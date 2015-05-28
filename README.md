

JS

<div class="col-md-6">
  <div id="show-contact">
    <h2></h2>

    <p>First name: <span class="first-name"></span></p>
    <p>Last name: <span class="last-name"></span></p>
    <p>Address: <span class="address"></span></p>
  </div>
</div>


CSS
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

HTML
var newAddress = { street: inputtedStreet,
                   city: inputtedCity,
                   state: inputtedState,
                   fullAddress: function() {
                     return this.street + ", " + this.city + ", " + this.state;
                   }
                 };
