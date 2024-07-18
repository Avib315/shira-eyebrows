export function sendProdects(id) {

    const products = [
        {
            name: "סרום לפנים",
            _id: "001",
            englishName:"serom",
            mainImage: "serum.jpg",
            quantity: 10,
            tag: "טיפוח פנים",
            price: 120
        },
        {
            name: "קרם לחות",
            _id: "002",
            englishName:"serom",
            mainImage: "moisturizer.jpg",
            quantity: 15,
            tag: "טיפוח פנים",
            price: 90
        },
        {
            name: "שמן גוף",
            _id: "003",
            englishName:"serom",
            mainImage: "bodyoil.jpg",
            quantity: 20,
            tag: "טיפוח גוף",
            price: 70
        },
        {
            name: "מסכת שיער",
            _id: "004",
            englishName:"serom",
            mainImage: "hairmask.jpg",
            quantity: 8,
            tag: "טיפוח שיער",
            price: 110
        },
        {
            name: "מי פנים",
            _id: "005",
            englishName:"serom",
            mainImage: "toner.jpg",
            quantity: 12,
            tag: "טיפוח פנים",
            price: 50
        },
        {
            name: "קרם עיניים",
            _id: "006",
            englishName:"serom",
            mainImage: "eyecream.jpg",
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