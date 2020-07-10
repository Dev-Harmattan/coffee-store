function dragAndDropHandler() {
    var dragImages = document.getElementsByClassName("productarticlewide");

    var shoppingCartDropZone = document.getElementById("shoppingCart");
    var shoppingCart = document.querySelectorAll("#shoppingCart ul")[0];

    //Implementing local storage API
    var Cart = (function() {
        this.coffees = new Array();
    });

    var Coffees = (function(id, price) {
        this.coffeeId = id;
        this.price = price;
    });

    var currentCart = null;
    currentCart = JSON.parse(localStorage.getItem("cart"));
    if(!currentCart){
        createEmptyCart();
    }

    updateShoppingCartUI();

    currentCart.addCoffee = function(coffee) {
        currentCart.coffees.push(coffee);
        localStorage.setItem("cart", JSON.stringify(currentCart));
    };

    //end



    for(i = 0; i < dragImages.length; i++){
        dragImages[i].addEventListener("dragstart", function(event) {
            event.dataTransfer.effectAllowed = "copy";
            event.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropZone.addEventListener("dragover", function(event) {
        if(event.preventDefault){
            event.preventDefault();
        }
        event.dataTransfer.dropEffect = "copy";
        return false;
    },false);

    shoppingCartDropZone.addEventListener("drop", function(event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }
        var coffeeId = event.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);
        addCoffeeToShoppingCart(element, coffeeId);
        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        var price = item.getAttribute("data-price");
        currentCart.addCoffee(id, price);
        
        updateShoppingCartUI();
    }

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function updateShoppingCartUI() {
        shoppingCart.innerHTML = "";
        for(i = 0; i < currentCart.coffees.length; i++){
            var liElement = document.createElement("li");
            liElement.innerHTML =  currentCart.coffees[i].coffeeId + " " + currentCart.coffees[i];
            shoppingCart.appendChild(liElement);
        }
    }

}