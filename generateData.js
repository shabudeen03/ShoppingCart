// useful url to beautify the format of the output: (and beautify syntax: https://beautifier.io/)

const product_names = [
    "Wireless Noise-Cancelling Headphones", "Smartphone", "4K Ultra HD TV", 
    "Laptop", "Smartwatch", "Bluetooth Speaker", "Gaming Console", 
    "Electric Scooter", "Tablet", "Air Purifier", "Camera", 
    "Fitness Tracker", "VR Headset", "Cordless Vacuum Cleaner", 
    "Microwave Oven", "Dishwasher", "Refrigerator", "Washing Machine", 
    "Drone", "Home Security Camera", "Coffee Maker", 
    "Electric Toothbrush", "Smart Thermostat", "Portable Charger", "E-Reader"
];

const descriptions = [
    ["High-performance with sleek design.", "User-friendly interface.", "Energy-efficient."],
    ["Compact and portable.", "Long-lasting battery life.", "Advanced technology features."],
    ["Crystal-clear visuals.", "Durable build quality.", "Modern connectivity options."],
    ["Perfect for daily use.", "Highly rated by customers.", "Comes with multiple accessories."],
    ["Eco-friendly and cost-effective.", "Smart technology integration.", "Minimalist design."]
];

const reviewTitles = [
    "Great product!", "Good value for money.", "Would recommend."
];

const reviewDescriptions = [
    "Highly satisfied with the quality and performance.", "Affordable and works well.", "Meets expectations and has a stylish design.",   
];

function generate_product_catalog() {
    const products = [];
    const used_ids = [];
    
    for(let i=0; i<product_names.length; i++) {
        let uid = 0;
        while(true) {
            uid = Math.floor((Math.random() * 9 + 1) * 10000000); //8 digits between 10000000 - 99999999
            if(used_ids.indexOf(uid) === -1) break;
        }
        
        const price = ((Math.random() * 1500) + 1).toFixed(2);
        
        const desc = [];
        for(let j=0; j<descriptions.length; j++) {
            let idx = Math.floor(Math.random() * 3);
            desc.push(descriptions[j][idx]);
        }
        
        const rats = [];
        let rnd_rats = Math.floor(Math.random() * 3);
        for(let j=0; j<rnd_rats; j++) {
            let a = Math.floor(Math.random() * 3);
            let b = Math.floor(Math.random() * 3);
            
            let rat = Math.floor(Math.random() * 5) + 1;
            
            let ratTitle = reviewTitles[a];
            let ratDesc = reviewDescriptions[b];
            
            let uname = "user" + (Math.floor((Math.random() * 9 + 1) * 100000));
            
            rats.push({
                rating: rat,
                reviewTitle: ratTitle,
                reviewDescription: ratDesc,
                userName: uname
            })
        }
        
        const stock = Math.floor(Math.random() * 500 + 1);
        
        const rat_avg = (Math.random() * 5 + 2).toFixed(2);
        
        products.push({
           name: product_names[i],
           id: uid,
           price: price,
           descriptions: desc,
           ratings: rats,
           stock: stock,
           avgRating: rat_avg
        });
    }

    return products;
}

// Generate 25 products for now
const product_catalog = generate_product_catalog();

console.log(product_catalog.length);
// console.log(product_catalog);
display(product_catalog);

function display(inventory) {
    console.log("[");
    for(let i=0; i<inventory.length; i++) {
        let p = inventory[i];
        console.log("{");
        
        console.log("name: '" + p.name + "',");
        console.log("oid: " + p.id + ",");
        console.log("price: " + p.price + ",");
        console.log("stock: " + p.stock + ",");
        console.log("avgRating: " + p.avgRating + ",");
        console.log("description: [");
        for(let j=0; j<p.descriptions.length; j++) {
            if(j === p.descriptions.length - 1) console.log("'" + p.descriptions[j] + "'");
            else console.log("'" + p.descriptions[j] + "',");
        }
        console.log("],");
        
        console.log("ratings: [");
        for(let j=0; j<p.ratings.length; j++) {
            console.log("{");
            console.log("rating: " + p.ratings[j].rating + ",");
            console.log("reviewTitle: '" + p.ratings[j].reviewTitle + "',");
            console.log("reviewDescription: '" + p.ratings[j].reviewDescription + "',");
            console.log("username: '" + p.ratings[j].userName + "'");
            if(j === p.ratings.length - 1) console.log("}");
            else console.log("},")
        }
        console.log("]");
        
        if(i === product_catalog.length - 1) console.log("}")
        else console.log("},")
    }
    
    console.log("]");
}
