export function sendItems(id) {
  const items = [
    {
      _id: "1234",
      name: `Pro Eyebrow Gel ג'ל גבות 200 מ"ל בתוספת הזנה לשיער הגבות`,
      price: 29.99,
      description: "גל לגבות מקצועי לעיצוב וקיבוע הגבות שלך לכל היום, עם פורמולה קלילה ועמידה.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הגל בעזרת המברשת הקטנה, מהבסיס ועד הקצה של הגבות.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "1", src: "https://www.anastasiabeverlyhills.com/cdn/shop/products/ABH_090723_TheOriginalBrowKit_Taupe_WEB-Standard_Hero_01_optimized.jpg?v=1693348835&width=1920" }, { alt: "11", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920"}, { alt: "111", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["מים", "גומיות טבעיות", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["שקוף", "חום בהיר", "חום כהה", "שחור"],
      inStock: 9,
      tag: "מקצועי"
    },
    {
      _id: "1235",
      name: `Eyebrow Styling Wax שעווה לעיצוב גבות 150 מ"ל`,
      price: 24.99,
      description: "שעווה לעיצוב הגבות שלך, מבטיחה עיצוב מדויק ועמידות גבוהה.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את השעווה בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "2", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["מים", "שעווה טבעית", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["שקוף", "חום בהיר", "חום כהה"],
      inStock: 15,
      tag: "מקצועי"
    },
    {
      _id: "1236",
      name: `Tinted Brow Gel ג'ל גבות צבעוני 150 מ"ל`,
      price: 34.99,
      description: "ג'ל גבות צבעוני לעיצוב וצביעה של הגבות שלך למראה טבעי ומלא.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הג'ל בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "3", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920" }, { alt: "33", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["מים", "גומיות טבעיות", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["חום בהיר", "חום כהה", "שחור"],
      inStock: 12,
      tag: "צבעוני"
    },
    {
      _id: "1237",
      name: `Eyebrow Powder אבקת גבות 100 מ"ל`,
      price: 19.99,
      description: "אבקת גבות קלה ונוחה לשימוש, מתאימה לכל סוגי השיער והגבות.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את האבקה בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "4", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_CF_BrowDuo_Optimized_Standard_Hero_01_6e15545c-b0fa-42b1-8f75-cd69f438fb2b.jpg?v=1702606417&width=1920" }, { alt: "44", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920" }, { alt: "444", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["אבקה טבעית", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["חום בהיר", "חום כהה", "שחור"],
      inStock: 20,
      tag: "טבעי"
    },
    {
      _id: "1238",
      name: `Eyebrow Pencil עיפרון גבות 120 מ"מ`,
      price: 14.99,
      description: "עיפרון גבות מדויק לעיצוב וצביעה של הגבות שלך.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את העיפרון בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "5", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_090723_BrowCareKit_WEB-Standard_Open_Hero_optimized_1.jpg?v=1693950649&width=1920" }, { alt: "55", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["פיגמנטים טבעיים", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["חום בהיר", "חום כהה", "שחור"],
      inStock: 25,
      tag: "מדויק"
    },
    {
      _id: "1239",
      name: `Eyebrow Pomade פומדת גבות 100 מ"ל`,
      price: 27.99,
      description: "פומדת גבות לעיצוב וצביעה של הגבות למראה טבעי ומלא.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הפומדה בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "6", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Brow-Lash-Styling-Kit_01_Front.jpg?v=1703019057&width=1920" }, { alt: "66", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["מים", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["חום בהיר", "חום כהה", "שחור"],
      inStock: 10,
      tag: "פומדה"
    },
    {
      _id: "1240",
      name: `Eyebrow Serum סרום לגבות 50 מ"ל`,
      price: 39.99,
      description: "סרום לגבות עם פורמולה ייחודית לעיבוי והזנת הגבות.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הסרום בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת המברשת.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "7", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_ABH-Essentials-Kit_02_Open_1.jpg?v=1713896347&width=1920" }, { alt: "77", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["מים", "פולימרים", "שמנים טבעיים", "ויטמין E", "חומצה היאלורונית"],
      colorSet: ["שקוף"],
      inStock: 8,
      tag: "סרום"
    },
    {
      _id: "1241",
      name: `Eyebrow Kit ערכת גבות 250 מ"ל`,
      price: 49.99,
      description: "ערכת גבות מושלמת הכוללת ג'ל, עיפרון ופומדה לעיצוב וצביעה של הגבות.",
      usageDescription: "1. וודא שהגבות נקיות ויבשות לפני השימוש.\n2. מרח את הג'ל או הפומדה בעזרת המברשת הקטנה.\n3. עצב את הגבות לצורה הרצויה בעזרת העיפרון.\n4. תן למוצר להתייבש כמה שניות.",
      images: [{ alt: "8", src: "https://www.anastasiabeverlyhills.com/cdn/shop/files/ABH_STD_Discovery-Mini-Bundles_Deluxe-Wiz-Definer_02_1.jpg?v=1712271452&width=1920" }],
      ingredients: ["מים", "פולימרים", "שמנים טבעיים", "ויטמין E"],
      colorSet: ["שקוף", "חום בהיר", "חום כהה", "שחור"],
      inStock: 0,
      tag: "ערכת גבות"
    }
  ];
  let res = {};
  if (id) {
    res = items.find(e => e?._id === id)
  }
  else {
    res = items;
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 60);
  });
}