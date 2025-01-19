const items = [{
    name: 'Wireless Noise-Cancelling Headphones',
    oid: 79494936,
    price: 1483.51,
    stock: 46,
    avgRating: 2.22,
    description: [
        'User-friendly interface.',
        'Advanced technology features.',
        'Crystal-clear visuals.',
        'Comes with multiple accessories.',
        'Smart technology integration.'
    ],
    ratings: [],
    src: "/src/assets/images/headphones.png"
},
{
    name: 'Smartphone',
    oid: 88225099,
    price: 977.62,
    stock: 178,
    avgRating: 4.25,
    description: [
        'User-friendly interface.',
        'Advanced technology features.',
        'Durable build quality.',
        'Highly rated by customers.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [{
            rating: 5,
            reviewTitle: 'Great product!',
            reviewDescription: 'Affordable and works well.',
            username: 'user447421'
        },
        {
            rating: 3,
            reviewTitle: 'Good value for money.',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user774870'
        }
    ],
    src: "/src/assets/images/phone.png"
},
{
    name: '4K Ultra HD TV',
    oid: 18784026,
    price: 1202.40,
    stock: 444,
    avgRating: 2.04,
    description: [
        'High-performance with sleek design.',
        'Compact and portable.',
        'Crystal-clear visuals.',
        'Perfect for daily use.',
        'Smart technology integration.'
    ],
    ratings: [{
        rating: 3,
        reviewTitle: 'Great product!',
        reviewDescription: 'Affordable and works well.',
        username: 'user813535'
    }],
    src: "/src/assets/images/tv.png"
},
{
    name: 'Laptop',
    oid: 84527421,
    price: 141.89,
    stock: 37,
    avgRating: 2.42,
    description: [
        'User-friendly interface.',
        'Advanced technology features.',
        'Durable build quality.',
        'Comes with multiple accessories.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [],
    src: "/src/assets/images/laptop.png"
},
{
    name: 'Smartwatch',
    oid: 19894198,
    price: 767.44,
    stock: 368,
    avgRating: 4.34,
    description: [
        'User-friendly interface.',
        'Compact and portable.',
        'Modern connectivity options.',
        'Comes with multiple accessories.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [],
    src: "/src/assets/images/smartWatch.png"
},
{
    name: 'Bluetooth Speaker',
    oid: 46649292,
    price: 1362.75,
    stock: 291,
    avgRating: 3.07,
    description: [
        'Energy-efficient.',
        'Long-lasting battery life.',
        'Crystal-clear visuals.',
        'Perfect for daily use.',
        'Smart technology integration.'
    ],
    ratings: [{
        rating: 4,
        reviewTitle: 'Would recommend.',
        reviewDescription: 'Meets expectations and has a stylish design.',
        username: 'user934311'
    }],
    src: "/src/assets/images/speaker.png"
},
{
    name: 'Gaming Console',
    oid: 63874387,
    price: 638.14,
    stock: 28,
    avgRating: 2.74,
    description: [
        'Energy-efficient.',
        'Compact and portable.',
        'Crystal-clear visuals.',
        'Highly rated by customers.',
        'Minimalist design.'
    ],
    ratings: [{
        rating: 4,
        reviewTitle: 'Would recommend.',
        reviewDescription: 'Affordable and works well.',
        username: 'user277921'
    }],
    src: "/src/assets/images/gameConsole.png"
},
{
    name: 'Electric Scooter',
    oid: 78651353,
    price: 1484.93,
    stock: 207,
    avgRating: 3.96,
    description: [
        'High-performance with sleek design.',
        'Long-lasting battery life.',
        'Modern connectivity options.',
        'Comes with multiple accessories.',
        'Minimalist design.'
    ],
    ratings: [{
            rating: 1,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user789418'
        },
        {
            rating: 2,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user706583'
        }
    ],
    src: "/src/assets/images/electricScooter.png"
},
{
    name: 'Tablet',
    oid: 76099776,
    price: 1138.03,
    stock: 427,
    avgRating: 1.80,
    description: [
        'High-performance with sleek design.',
        'Compact and portable.',
        'Crystal-clear visuals.',
        'Perfect for daily use.',
        'Smart technology integration.'
    ],
    ratings: [{
            rating: 4,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user404937'
        },
        {
            rating: 3,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Affordable and works well.',
            username: 'user969968'
        }
    ],
    src: "/src/assets/images/tablet.png"
},
{
    name: 'Air Purifier',
    oid: 95810902,
    price: 1073.87,
    stock: 327,
    avgRating: 2.35,
    description: [
        'User-friendly interface.',
        'Compact and portable.',
        'Crystal-clear visuals.',
        'Comes with multiple accessories.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [{
        rating: 4,
        reviewTitle: 'Good value for money.',
        reviewDescription: 'Highly satisfied with the quality and performance.',
        username: 'user685000'
    }],
    src: "/src/assets/images/purifier.png"
},
{
    name: 'Camera',
    oid: 70232980,
    price: 505.25,
    stock: 431,
    avgRating: 2.45,
    description: [
        'User-friendly interface.',
        'Long-lasting battery life.',
        'Durable build quality.',
        'Comes with multiple accessories.',
        'Smart technology integration.'
    ],
    ratings: [{
        rating: 5,
        reviewTitle: 'Good value for money.',
        reviewDescription: 'Highly satisfied with the quality and performance.',
        username: 'user137531'
    }],
    src: "/src/assets/images/camera.png"
},
{
    name: 'Fitness Tracker',
    oid: 61051117,
    price: 882.04,
    stock: 479,
    avgRating: 2.30,
    description: [
        'High-performance with sleek design.',
        'Compact and portable.',
        'Crystal-clear visuals.',
        'Comes with multiple accessories.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [{
            rating: 3,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user445138'
        },
        {
            rating: 3,
            reviewTitle: 'Great product!',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user567837'
        }
    ],
    src: "/src/assets/images/fitnessTracker.png"
},
{
    name: 'VR Headset',
    oid: 93679225,
    price: 282.70,
    stock: 491,
    avgRating: 2.34,
    description: [
        'High-performance with sleek design.',
        'Advanced technology features.',
        'Crystal-clear visuals.',
        'Perfect for daily use.',
        'Smart technology integration.'
    ],
    ratings: [{
        rating: 5,
        reviewTitle: 'Good value for money.',
        reviewDescription: 'Affordable and works well.',
        username: 'user595478'
    }],
    src: "/src/assets/images/vrHeadset.png"
},
{
    name: 'Cordless Vacuum Cleaner',
    oid: 97132247,
    price: 743.50,
    stock: 201,
    avgRating: 3.26,
    description: [
        'High-performance with sleek design.',
        'Advanced technology features.',
        'Crystal-clear visuals.',
        'Perfect for daily use.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [{
            rating: 3,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user368280'
        },
        {
            rating: 2,
            reviewTitle: 'Good value for money.',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user692609'
        }
    ],
    src: "/src/assets/images/vacuum.png"
},
{
    name: 'Microwave Oven',
    oid: 42538727,
    price: 428.65,
    stock: 57,
    avgRating: 4.91,
    description: [
        'Energy-efficient.',
        'Long-lasting battery life.',
        'Durable build quality.',
        'Perfect for daily use.',
        'Smart technology integration.'
    ],
    ratings: [{
            rating: 2,
            reviewTitle: 'Good value for money.',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user272141'
        },
        {
            rating: 3,
            reviewTitle: 'Good value for money.',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user358737'
        }
    ],
    src: "/src/assets/images/microwaveOven.png"
},
{
    name: 'Dishwasher',
    oid: 86947611,
    price: 224.89,
    stock: 169,
    avgRating: 4.94,
    description: [
        'High-performance with sleek design.',
        'Compact and portable.',
        'Durable build quality.',
        'Highly rated by customers.',
        'Smart technology integration.'
    ],
    ratings: [{
        rating: 2,
        reviewTitle: 'Great product!',
        reviewDescription: 'Meets expectations and has a stylish design.',
        username: 'user737321'
    }],
    src: "/src/assets/images/dishwasher.png"
},
{
    name: 'Refrigerator',
    oid: 81582386,
    price: 1335.60,
    stock: 24,
    avgRating: 4.17,
    description: [
        'High-performance with sleek design.',
        'Long-lasting battery life.',
        'Modern connectivity options.',
        'Perfect for daily use.',
        'Minimalist design.'
    ],
    ratings: [],
    src: "/src/assets/images/fridge.png"
},
{
    name: 'Washing Machine',
    oid: 69337327,
    price: 1319.68,
    stock: 248,
    avgRating: 4.34,
    description: [
        'User-friendly interface.',
        'Compact and portable.',
        'Modern connectivity options.',
        'Comes with multiple accessories.',
        'Minimalist design.'
    ],
    ratings: [{
        rating: 4,
        reviewTitle: 'Would recommend.',
        reviewDescription: 'Highly satisfied with the quality and performance.',
        username: 'user909068'
    }],
    src: "/src/assets/images/washingMachine.png"
},
{
    name: 'Drone',
    oid: 65840751,
    price: 1296.67,
    stock: 427,
    avgRating: 4.40,
    description: [
        'User-friendly interface.',
        'Compact and portable.',
        'Durable build quality.',
        'Highly rated by customers.',
        'Smart technology integration.'
    ],
    ratings: [{
        rating: 3,
        reviewTitle: 'Would recommend.',
        reviewDescription: 'Highly satisfied with the quality and performance.',
        username: 'user937573'
    }],
    src: "/src/assets/images/drone.png"
},
{
    name: 'Home Security Camera',
    oid: 62413236,
    price: 1034.61,
    stock: 260,
    avgRating: 4.25,
    description: [
        'User-friendly interface.',
        'Advanced technology features.',
        'Crystal-clear visuals.',
        'Comes with multiple accessories.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [],
    src: "/src/assets/images/securityCamera.png"
},
{
    name: 'Coffee Maker',
    oid: 28600136,
    price: 1188.67,
    stock: 127,
    avgRating: 4.02,
    description: [
        'Energy-efficient.',
        'Compact and portable.',
        'Crystal-clear visuals.',
        'Highly rated by customers.',
        'Smart technology integration.'
    ],
    ratings: [],
    src: "/src/assets/images/coffeeMaker.png"
},
{
    name: 'Electric Toothbrush',
    oid: 47996648,
    price: 911.28,
    stock: 136,
    avgRating: 4.32,
    description: [
        'User-friendly interface.',
        'Long-lasting battery life.',
        'Crystal-clear visuals.',
        'Highly rated by customers.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [{
            rating: 4,
            reviewTitle: 'Good value for money.',
            reviewDescription: 'Meets expectations and has a stylish design.',
            username: 'user171137'
        },
        {
            rating: 3,
            reviewTitle: 'Great product!',
            reviewDescription: 'Affordable and works well.',
            username: 'user578845'
        }
    ],
    src: "/src/assets/images/electricBrush.png"
},
{
    name: 'Smart Thermostat',
    oid: 61598519,
    price: 1297.68,
    stock: 7,
    avgRating: 4.78,
    description: [
        'Energy-efficient.',
        'Long-lasting battery life.',
        'Durable build quality.',
        'Highly rated by customers.',
        'Minimalist design.'
    ],
    ratings: [{
            rating: 2,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user244198'
        },
        {
            rating: 1,
            reviewTitle: 'Great product!',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user803516'
        }
    ],
    src: "/src/assets/images/thermostat.png"
},
{
    name: 'Portable Charger',
    oid: 54874534,
    price: 6.32,
    stock: 475,
    avgRating: 4.71,
    description: [
        'Energy-efficient.',
        'Advanced technology features.',
        'Crystal-clear visuals.',
        'Highly rated by customers.',
        'Smart technology integration.'
    ],
    ratings: [{
            rating: 5,
            reviewTitle: 'Great product!',
            reviewDescription: 'Highly satisfied with the quality and performance.',
            username: 'user266079'
        },
        {
            rating: 1,
            reviewTitle: 'Would recommend.',
            reviewDescription: 'Affordable and works well.',
            username: 'user277426'
        }
    ],
    src: "/src/assets/images/portableCharger.png"
},
{
    name: 'E-Reader',
    oid: 73955715,
    price: 49.73,
    stock: 365,
    avgRating: 3.17,
    description: [
        'User-friendly interface.',
        'Compact and portable.',
        'Durable build quality.',
        'Highly rated by customers.',
        'Eco-friendly and cost-effective.'
    ],
    ratings: [{
        rating: 2,
        reviewTitle: 'Good value for money.',
        reviewDescription: 'Affordable and works well.',
        username: 'user139493'
    }],
    src: "/src/assets/images/ereader.png"
}
];

export default items;