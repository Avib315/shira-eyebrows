export function sendProdects(id) {

    const products = [
        {
            name: "סרום לפנים",
            _id: "001",
            englishName: "serom",
            img: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_090723_BrowCareKit_WEB-Standard_Open_Hero_optimized_1.jpg?v=1693950649&width=1920",
            quantity: 10,
            usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
            description: `אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.`,
            tag: "טיפוח פנים",
            price: 120
        },
        {
            name: "קרם לחות",
            _id: "002",
            englishName: "serom",
            usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
            img: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920",
            quantity: 15,
            description: `אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.`,
            tag: "טיפוח פנים",
            price: 90
        },
        {
            name: "שמן גוף",
            _id: "003",
            englishName: "serom",
            usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
            img: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Brow-Lash-Styling-Kit_01_Front.jpg?v=1703019057&width=1920",
            quantity: 20,
            description: `אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.`,
            tag: "טיפוח גוף",
            price: 70
        },
        {
            name: "מסכת שיער",
            _id: "004",
            englishName: "serom",
            usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
            img: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920",
            quantity: 8,
            description: `גל לגבות מקצועי לעיצוב וקיבוע הגבות שלך לכל היום, עם פורמולה קלילה ועמידה.`, 
            tag: "טיפוח שיער",
            price: 110
        },
        {
            name: "מי פנים",
            _id: "005",
            englishName: "serom",
            usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
            img: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920",
            quantity: 12,
            description: `"שעווה לעיצוב הגבות שלך, מבטיחה עיצוב מדויק ועמידות גבוהה.`,
            tag: "טיפוח פנים",
            price: 50
        },
        {
            name: "קרם עיניים",
            _id: "006",
            englishName: "serom",
            usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
            img: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920",
            quantity: 10,
            description: `אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות`,
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