function loadMenu() {
  var container = document.getElementById("main");
  fetch("menu.json")
    .then(function(response) { 
      return response.json();
    })
    .then(function(menu) { 
      menu.forEach(function(item) {
        var card = document.createElement("div");
        card.className = "cdf";
        card.innerHTML = `
          <div class="inner">
            <div class="front">
              <img src="${item.image}" alt="${item.name}">
              <div class="title">${item.name}</div><br>
              <div class="price">${item.currency} ${item.price}</div><br>
            </div>
            <div class="back">
              <div class="desc">${item.description}</div><br>
              <div class="category">${item.category}</div><br>
              <div class="veg">${item.veg? "veg":"non-veg"}</div>
              
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    });
    }k

    
     function wh(){
      fetch("project.json")
      .then(function(res) {
        return res.json();
      })
      .then(function(information) {
        var main = document.getElementById("main");
        var card = document.createElement("div");

        information.map(function(info) {
          card.innerHTML += `
            <div class="abc">
              <h2>Day: ${info.day}</h2>
              <h3>Timings: ${info.timings}</h3>
            </div>
          `;
        });

        main.appendChild(card);
      });
    }


var Username = /^[A-Za-z0-9]{4,10}$/; 
var Mail = /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-z]{2,}$/;
var Mobile = /^\+91\d{10}$/;
function userInfo(){
    var customerName=document.getElementById("customerName").value;
    var customerMail=document.getElementById("customerMail").value;
    var customerMobile=document.getElementById("customerMobile").value;
    if(customerName.match(Username) && customerMail.match(Mail) && customerMobile.match(Mobile)){
        alert("Table Reserved successfully");
        var customers=JSON.parse(localStorage.getItem("customers"))||[];
        var custDetails={
            custName:customerName,
            custMail:customerMail,
            custMobile:customerMobile,
            
        }
        customers.push(custDetails);
        localStorage.setItem("customers",JSON.stringify(customers));
    }else{
        alert("invalid credentials")
    }
  }

var Username = /^[A-Za-z0-9]{4,10}$/; 
var Mail = /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-z]{2,}$/;
var Mobile = /^\+91\d{10}$/;
var Message = /^[A-Za-z]{10,50}$/;
function Info(){
    var cName=document.getElementById("cName").value;
    var cMail=document.getElementById("cMail").value;
    var cMobile=document.getElementById("cMobile").value;
    var cMessage=document.getElementById("cMessage").value;
    if(cName.match(Username) && cMail.match(Mail) && cMobile.match(Mobile) && cMessage.match(Message)){
        alert("Contact details sent successfully");
        var customer=JSON.parse(localStorage.getItem("customer"))||[];
        var c1Details={
            c1Name:cName,
            c1Mail:cMail,
            c1Mobile:cMobile,
            c1Message:cMessage,
        }
        customer.push(c1Details);
        localStorage.setItem("customer",JSON.stringify(customer));
    }else{
        alert("invalid credentials")
    }
  }