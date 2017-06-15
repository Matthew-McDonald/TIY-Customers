// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

  // Your Code Goes Here

  for (i = 0; i < 12; i++){
      fetch('https://randomuser.me/api/')
      .then(
          function(response) {
             if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
          response.json().then(function(data) {
          console.log(data.results[0].name.title)
            let markup = `
              <div class="random-block">
                <img class="images" src= "${data.results[0].picture.large}">
                <p class= "name"> ${data.results[0].name.first} ${data.results[0].name.last}</p>
                <p class="email"> ${data.results[0].email}</p>
                <p class="street"> ${data.results[0].location.street}</p>
                <p class="city"> ${data.results[0].location.city}, ${data.results[0].location.state} ${data.results[0].location.postcode}</p>
                <p class="phone"> ${data.results[0].phone}</p>
                <p class="SSN"> ${data.results[0].id.value}</p>
              </div>


            `
             document.body.innerHTML += markup;
      } )
      }
     )
  }
