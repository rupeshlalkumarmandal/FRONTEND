let inventory = [
    {
    name: 'Laptop', price: 1000, quantity:10
    },
    
    {
        name: 'Phone', price: 500, quantity: 30
    },
    
    {
        name: 'Tablet', price: 300, quantity: 20
    }
    ];

    function displayInvertrory(){
        console.log("Inventory:");
        inverntory.forEach((item, index) =>{
            console.log(`${index +1}. ${item.name} -${item.price}, Quanitity: ${item.quantity}`);
        });
    }

    displayInvertrory();