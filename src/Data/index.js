
import { COLORS, icons, images, SIZES } from "../constants";

const initialCurrentLocation = {
    streetName: "Galaxy Green City",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}

const categoryData = [
    {
        id: 1,
        name: "Rice",
        icon: icons.rice_bowl,
    },
    {
        id: 2,
        name: "Noodles",
        icon: icons.noodle,
    },
    {
        id: 3,
        name: "HotDogs",
        icon: icons.hotdog,
    },
    {
        id: 4,
        name: "Salads",
        icon: icons.salad,
    },
    {
        id: 5,
        name: "Burgers",
        icon: icons.hamburger,
    },
    {
        id: 6,
        name: "Pizza",
        icon: icons.pizza,
    },
    {
        id: 7,
        name: "Snacks",
        icon: icons.fries,
    },
    {
        id: 8,
        name: "Sushi",
        icon: icons.sushi,
    },
    {
        id: 9,
        name: "Desserts",
        icon: icons.donut,
    },
    {
        id: 10,
        name: "Drinks",
        icon: icons.drink,
    },

]

// price rating
const affordable = 1
const fairPrice = 2
const expensive = 3

const restaurantData = [
    {
        id: 1,
        name: "Sai Suraksha – Nagar Amausi Station Code",
        rating: 4.8,
        priceRating: affordable,
        photo: images.NagarAmausiStationCode1,
        duration: "9,000/-",
        plotSize: "1500 Sq. Ft",
        menu: [
            {
                menuId: 1,
                name: "Sai Suraksha – Nagar Amausi Station Code",
                photo: images.NagarAmausiStationCode1,
                description: "Sai Suraksha – Nagar Amausi Station Code",
                calories: 200,
                price: "9,000/-"
            },
            {
                menuId: 2,
                name: "Sai Suraksha – Nagar Amausi Station Code",
                photo: images.NagarAmausiStationCode2,
                description: "Sai Suraksha – Nagar Amausi Station Code",
                calories: 200,
                price: "9,000/-"
            },
            {
                menuId: 3,
                name: "Sai Suraksha – Nagar Amausi Station Code",
                photo: images.NagarAmausiStationCode3,
                description: "Sai Suraksha – Nagar Amausi Station Code",
                calories: 200,
                price: "9,000/-"
            },
            {
                menuId: 4,
                name: "Sai Suraksha – Nagar Amausi Station Code",
                photo: images.NagarAmausiStationCode4,
                description: "Sai Suraksha – Nagar Amausi Station Code",
                calories: 200,
                price: "9,000/-"
            },
        ]
    },

    {
        id: 2,
        name: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
        rating: 4.8,
        priceRating: affordable,
        photo: images.NagarAmausiStationCode2,
        duration: "10,800/-",
        plotSize: "1800 Sq. Ft.",
        menu: [
            {
                menuId: 1,
                name: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                photo: images.NagarAmausiStationCode1,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "10,800/-"
            },
            {
                menuId: 2,
                name: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                photo: images.NagarAmausiStationCode2,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "10,800/-"
            },
            {
                menuId: 3,
                name: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                photo: images.NagarAmausiStationCode3,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "10,800/-"
            },
            {
                menuId: 4,
                name: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                photo: images.NagarAmausiStationCode4,
                description: "Sai Suraksha Nagar – Amausi Station & TSM Hospital",
                calories: 200,
                price: "10,800/-"
            },
        ]
    },
    {
        id: 3,
        name: "Sai Surksha – Nagar Basant Khera",
        rating: 4.8,
        priceRating: affordable,
        photo: images.NagarAmausiStationCode3,
        duration: "6,000/-",
        plotSize: "1000 Sq. Ft.",
        menu: [
            {
                menuId: 1,
                name: "Sai Surksha – Nagar Basant Khera",
                photo: images.NagarAmausiStationCode1,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "6,000/-"
            },
            {
                menuId: 2,
                name: "Sai Surksha – Nagar Basant Khera",
                photo: images.NagarAmausiStationCode2,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "6,000/-"
            },
            {
                menuId: 3,
                name: "Sai Surksha – Nagar Basant Khera",
                photo: images.NagarAmausiStationCode3,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "6,000/-"
            },
            {
                menuId: 4,
                name: "Sai Surksha – Nagar Basant Khera",
                photo: images.NagarAmausiStationCode4,
                description: "Sai Surksha – Nagar Basant Khera",
                calories: 200,
                price: "6,000/-"
            },
        ]
    },
    {
        id: 4,
        name: "Sai Surksha Nagar – Outer Ring Road Behta",
        rating: 4.8,
        priceRating: affordable,
        photo: images.NagarAmausiStationCode4,
        duration: "12,000/-",
        plotSize: "2000 Sq. Ft.",
        menu: [
            {
                menuId: 1,
                name: "Sai Surksha Nagar – Outer Ring Road Behta",
                photo: images.NagarAmausiStationCode1,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "12,000/-"
            },
            {
                menuId: 2,
                name: "Sai Surksha Nagar – Outer Ring Road Behta",
                photo: images.NagarAmausiStationCode2,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "12,000/-"
            },
            {
                menuId: 3,
                name: "Sai Surksha Nagar – Outer Ring Road Behta",
                photo: images.NagarAmausiStationCode3,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "12,000/-"
            },
            {
                menuId: 4,
                name: "Sai Surksha Nagar – Outer Ring Road Behta",
                photo: images.NagarAmausiStationCode4,
                description: "Sai Surksha Nagar – Outer Ring Road Behta",
                calories: 200,
                price: "12,000/-"
            },
        ]
    },



]


const clients = [
    {
        id: 1,
        name: "Abhishek",
        icon: images.Abhishek,
        phone: "+91 9936660555"
    },
    {
        id: 2,
        name: "Akmishra",
        icon: images.Akmishra,
        phone: '+91 9919194437'
    },
    {
        id: 3,
        name: "chandresh",
        icon: images.chandresh,
        phone: "+91 9721508850"
    },
    {
        id: 4,
        name: "Dilip",
        icon: images.Dilip,
        phone: "+91 8077621079"
    },
    {
        id: 5,
        name: "Kiran",
        icon: images.Kiran,
        phone: '+91 7888674088'
    },
    {
        id: 6,
        name: "mahendra",
        icon: images.mahendra,
        phone: '+91 9005184983'
    },
    {
        id: 7,
        name: "Pankaj",
        icon: images.Pankaj,
        phone: '+91 8299324894'
    },
    {
        id: 8,
        name: "prabhat",
        icon: images.prabhat,
        phone: '+91 9450611110'
    },
    {
        id: 9,
        name: "pradeep",
        icon: images.pradeep,
        phone: '+91 7080761644'
    },
    {
        id: 10,
        name: "pravesh",
        icon: images.pravesh,
        phone: '+91 7905781488'
    },
    {
        id: 11,
        name: "Pushpendra",
        icon: images.Pushpendra,
        phone: '+91 7355148998'
    },
    {
        id: 12,
        name: "Ramu",
        icon: images.Ramu,
        phone: '+91 9305158653'
    },
    {
        id: 13,
        name: "ritesh",
        icon: images.ritesh,
        phone: '+91 9935119888'
    },
    {
        id: 14,
        name: "rohith",
        icon: images.rohith,
        phone: '+91 9935119888'
    },
    {
        id: 15,
        name: "Rupak",
        icon: images.Rupak,
        phone: '+91 8172852888'
    },
    {
        id: 16,
        name: "Shailendra",
        icon: images.Shailendra,
        phone: '+91 6386707808'
    },
    {
        id: 17,
        name: "sony",
        icon: images.sony,
        phone: "+91 9110294749"
    },
    {
        id: 18,
        name: "Subodh",
        icon: images.Subodh,
        phone: '+91 9919186622'
    },
    {
        id: 19,
        name: "vipin",
        icon: images.vipin,
        phone: "+91 6394266274"

    },
    {
        id: 20,
        name: "vishwajeet",
        icon: images.vishwajeet,
        phone: "+91 9026952401"
    },

]


const agents = [
    {
        id: 1,
        name: "Abhishek",
        icon: icons.user,
        phone: "+91 9936660555"
    },
    {
        id: 2,
        name: "Akmishra",
        icon: icons.user,
        phone: '+91 9919194437'
    },
    {
        id: 3,
        name: "chandresh",
        icon: icons.user,
        phone: "+91 9721508850"
    },
    {
        id: 4,
        name: "Dilip",
        icon: icons.user,
        phone: "+91 8077621079"
    },
]


export { restaurantData, categoryData, initialCurrentLocation, clients, agents };