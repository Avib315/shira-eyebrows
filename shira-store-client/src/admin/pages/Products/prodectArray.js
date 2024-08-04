// export function sendProdects(id) {

//     const products = [
//         {
//             name: "סרום לפנים",
//             price: 120,
//             images: [
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_090723_BrowCareKit_WEB-Standard_Open_Hero_optimized_1.jpg?v=1693950649&width=1920", alt: "סרום לפנים" }
//             ],
//             description: "אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.",
//             quantity: 10,
//             usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
//             ingredients: [""],
//             tag: "טיפוח פנים",
//             isActive: true
//         },
//         {
//             name: "קרם לחות",
//             price: 90,
//             images: [
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920", alt: "קרם לחות" }
//             ],
//             description: "אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.",
//             quantity: 15,
//             usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
//             ingredients: [""],
//             tag: "טיפוח פנים",
//             isActive: true
//         },
//         {
//             name: "שמן גוף",
//             price: 70,
//             images: [
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Brow-Lash-Styling-Kit_01_Front.jpg?v=1703019057&width=1920", alt: "שמן גוף" }
//             ],
//             description: "אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.",
//             quantity: 20,
//             usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
//             ingredients: [""],
//             tag: "טיפוח גוף",
//             isActive: true
//         },
//         {
//             name: "מסכת שיער",
//             price: 110,
//             images: [
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920", alt: "מסכת שיער" }
//             ],
//             description: "גל לגבות מקצועי לעיצוב וקיבוע הגבות שלך לכל היום, עם פורמולה קלילה ועמידה.",
//             quantity: 8,
//             usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
//             ingredients: [""],
//             tag: "טיפוח שיער",
//             isActive: true
//         },
//         {
//             name: "מי פנים",
//             price: 50,
//             images: [
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920", alt: "מי פנים" },
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920", alt: "מי פנים" }
//             ],
//             description: "שעווה לעיצוב הגבות שלך, מבטיחה עיצוב מדויק ועמידות גבוהה.",
//             quantity: 12,
//             usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
//             ingredients: [""],
//             tag: "טיפוח פנים",
//             isActive: true
//         },
//         {
//             name: "קרם עיניים",
//             price: 130,
//             images: [
//                 { src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920", alt: "קרם עיניים" }
//             ],
//             description: "אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.",
//             quantity: 10,
//             usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
//             ingredients: [""],
//             tag: "טיפוח פנים",
//             isActive: true
//         }
//     ];
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products);
//         }, 60);
//     });
// }