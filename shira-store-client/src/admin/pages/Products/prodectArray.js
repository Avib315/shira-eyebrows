export function sendProdects(id) {

    const products = [
        {
            name: "סרום לפנים",
            _id: "001",
            englishName:"serom",
            mainImage: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_090723_BrowCareKit_WEB-Standard_Open_Hero_optimized_1.jpg?v=1693950649&width=1920",
            quantity: 10,
            tag: "טיפוח פנים",
            price: 120
        },
        {
            name: "קרם לחות",
            _id: "002",
            englishName:"serom",
            mainImage: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920",
            quantity: 15,
            tag: "טיפוח פנים",
            price: 90
        },
        {
            name: "שמן גוף",
            _id: "003",
            englishName:"serom",
            mainImage: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Brow-Lash-Styling-Kit_01_Front.jpg?v=1703019057&width=1920",
            quantity: 20,
            tag: "טיפוח גוף",
            price: 70
        },
        {
            name: "מסכת שיער",
            _id: "004",
            englishName:"serom",
            mainImage: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920",
            quantity: 8,
            tag: "טיפוח שיער",
            price: 110
        },
        {
            name: "מי פנים",
            _id: "005",
            englishName:"serom",
            mainImage: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920",
            quantity: 12,
            tag: "טיפוח פנים",
            price: 50
        },
        {
            name: "קרם עיניים",
            _id: "006",
            englishName:"serom",
            mainImage: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920",
            quantity: 10,
            tag: "טיפוח פנים",
            price: 130
        }
    ];
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 60);
      });
}