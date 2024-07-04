export const getCategoriesList = () =>
  StationaryStoreData.map((item) => item.title);

export const getSubCategoriesList = (Category) =>
  StationaryStoreData.filter(
    (item) => item.title === Category
  )[0].subcategories.map((item) => item.title);

export const getProductList = (Category, SubCategory) => {
  return StationaryStoreData.find(
    (item) => item.title === Category
  ).subcategories.find((subCat) => subCat.title === SubCategory).products;
};

export const getProductByTitle = (Title) => {
  let product;
  StationaryStoreData.forEach((item) => {
    if (product) return;

    item.subcategories.forEach((subCat) => {
      if (product) return;

      const result = subCat.products.find((prod) => {
        return prod.name === Title;
      });
      product = result;
      if (product) return;
    });
  });
  return product;
};

export const getProductListByCategory = (Category) => {
  let subcategories = StationaryStoreData.filter(
    (item) => item.title === Category
  )[0].subcategories;
  let productList = [];
  subcategories.forEach((element) => {
    productList = productList.concat(element.products);
  });
  return productList;
};

export const StationaryStoreData = [
  {
    title: 'Notebooks',
    subcategories: [
      {
        title: 'Spiral Notebooks',
        products: [
          {
            name: 'College Ruled Notebook',
            price: 5.99,
            image: 'https://picsum.photos/300/450?random=1',
          },
          {
            name: 'Wide Ruled Notebook',
            price: 5.99,
            image: 'https://picsum.photos/300/450?random=2',
          },
          {
            name: 'Graph Paper Notebook',
            price: 6.99,
            image: 'https://picsum.photos/300/450?random=3',
          },
        ],
      },
      {
        title: 'Composition Notebooks',
        products: [
          {
            name: 'Marble Cover Composition Notebook',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=4',
          },
          {
            name: 'Simple Cover Composition Notebook',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=5',
          },
          {
            name: 'Grid Ruled Composition Notebook',
            price: 4.99,
            image: 'https://picsum.photos/300/450?random=6',
          },
        ],
      },
    ],
  },
  {
    title: 'Calculators',
    subcategories: [
      {
        title: 'Scientific Calculators',
        products: [
          {
            name: 'Texas Instruments TI-84 Plus',
            price: 99.99,
            image: 'https://picsum.photos/300/450?random=7',
          },
          {
            name: 'Casio FX-115ES Plus',
            price: 49.99,
            image: 'https://picsum.photos/300/450?random=8',
          },
          {
            name: 'HP 35s Scientific Calculator',
            price: 79.99,
            image: 'https://picsum.photos/300/450?random=9',
          },
        ],
      },
      {
        title: 'Graphing Calculators',
        products: [
          {
            name: 'Texas Instruments TI-84 Plus CE',
            price: 129.99,
            image: 'https://picsum.photos/300/450?random=10',
          },
          {
            name: 'Casio FX-CG50',
            price: 99.99,
            image: 'https://picsum.photos/300/450?random=11',
          },
          {
            name: 'HP Prime Graphing Calculator',
            price: 149.99,
            image: 'https://picsum.photos/300/450?random=12',
          },
        ],
      },
      {
        title: 'Basic Calculators',
        products: [
          {
            name: 'Casio MS-80B Basic Calculator',
            price: 9.99,
            image: 'https://picsum.photos/300/450?random=13',
          },
          {
            name: 'Sharp EL-501XBWH Basic Calculator',
            price: 12.99,
            image: 'https://picsum.photos/300/450?random=14',
          },
          {
            name: 'Canon LS-82Z Basic Calculator',
            price: 7.99,
            image: 'https://picsum.photos/300/450?random=15',
          },
        ],
      },
    ],
  },
  {
    title: 'Pens',
    subcategories: [
      {
        title: 'Ballpoint Pens',
        products: [
          {
            name: 'Black Ink Ballpoint Pen',
            price: 1.99,
            image: 'https://picsum.photos/300/450?random=16',
          },
          {
            name: 'Blue Ink Ballpoint Pen',
            price: 1.99,
            image: 'https://picsum.photos/300/450?random=17',
          },
          {
            name: 'Red Ink Ballpoint Pen',
            price: 1.99,
            image: 'https://picsum.photos/300/450?random=18',
          },
        ],
      },
      {
        title: 'Gel Pens',
        products: [
          {
            name: 'Colored Gel Pen Set',
            price: 5.99,
            image: 'https://picsum.photos/300/450?random=19',
          },
          {
            name: 'Metallic Gel Pens',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=20',
          },
          {
            name: 'Pastel Gel Pens',
            price: 4.99,
            image: 'https://picsum.photos/300/450?random=21',
          },
        ],
      },
      {
        title: 'Markers',
        products: [
          {
            name: 'Permanent Marker Set',
            price: 7.99,
            image: 'https://picsum.photos/300/450?random=22',
          },
          {
            name: 'Dry Erase Markers',
            price: 9.99,
            image: 'https://picsum.photos/300/450?random=23',
          },
          {
            name: 'Highlighters',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=24',
          },
        ],
      },
    ],
  },
  {
    title: 'Pencils',
    subcategories: [
      {
        title: 'Mechanical Pencils',
        products: [
          {
            name: 'Mechanical Pencil Set',
            price: 4.99,
            image: 'https://picsum.photos/300/450?random=25',
          },
          {
            name: '0.7 mm Mechanical Pencils',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=26',
          },
          {
            name: '0.5 mm Mechanical Pencils',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=27',
          },
        ],
      },
      {
        title: 'Wooden Pencils',
        products: [
          {
            name: 'HB Wooden Pencils',
            price: 2.99,
            image: 'https://picsum.photos/300/450?random=28',
          },
          {
            name: 'Colored Wooden Pencils',
            price: 4.99,
            image: 'https://picsum.photos/300/450?random=29',
          },
          {
            name: 'Drawing Pencils',
            price: 6.99,
            image: 'https://picsum.photos/300/450?random=30',
          },
        ],
      },
    ],
  },
  {
    title: 'Markers',
    subcategories: [
      {
        title: 'Highlighters',
        products: [
          {
            name: 'Yellow Highlighters',
            price: 2.99,
            image: 'https://picsum.photos/300/450?random=31',
          },
          {
            name: 'Multicolored Highlighters',
            price: 4.99,
            image: 'https://picsum.photos/300/450?random=32',
          },
          {
            name: 'Gel Highlighters',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=33',
          },
        ],
      },
      {
        title: 'Permanent Markers',
        products: [
          {
            name: 'Black Permanent Markers',
            price: 3.99,
            image: 'https://picsum.photos/300/450?random=34',
          },
          {
            name: 'Colored Permanent Markers',
            price: 5.99,
            image: 'https://picsum.photos/300/450?random=35',
          },
          {
            name: 'Fine Point Permanent Markers',
            price: 4.99,
            image: 'https://picsum.photos/300/450?random=36',
          },
        ],
      },
    ],
  },
  {
    title: 'Backpacks',
    subcategories: [
      {
        title: 'School Backpacks',
        products: [
          {
            name: 'Unisex School Backpack',
            price: 29.99,
            image: 'https://picsum.photos/300/450?random=37',
          },
          {
            name: 'Wheeled School Backpack',
            price: 49.99,
            image: 'https://picsum.photos/300/450?random=38',
          },
          {
            name: 'Sporty School Backpack',
            price: 39.99,
            image: 'https://picsum.photos/300/450?random=39',
          },
        ],
      },
      {
        title: 'Business Backpacks',
        products: [
          {
            name: 'Zippered Business Backpack',
            price: 59.99,
            image: 'https://picsum.photos/300/200?random=40',
          },
          {
            name: 'Padded Business Backpack',
            price: 69.99,
            image: 'https://picsum.photos/300/200?random=41',
          },
          {
            name: 'Anti-Theft Business Backpack',
            price: 79.99,
            image: 'https://picsum.photos/300/200?random=42',
          },
        ],
      },
      {
        title: 'Sport Backpacks',
        products: [
          {
            name: 'Small Sport Backpack',
            price: 19.99,
            image: 'https://picsum.photos/300/200?random=43',
          },
          {
            name: 'Waterproof Sport Backpack',
            price: 39.99,
            image: 'https://picsum.photos/300/200?random=44',
          },
          {
            name: 'Stylish Sport Backpack',
            price: 49.99,
            image: 'https://picsum.photos/300/200?random=45',
          },
        ],
      },
    ],
  },
];

export const StationaryStoreArabicData = [
  {
    title: 'دفاتر الملاحظات',
    subcategories: [
      {
        title: 'دفاتر ذات الأسلاك',
        products: [
          {
            name: 'دفتر ملاحظات مسطر للكلية',
            price: 5.99,
            image: 'https://picsum.photos/300/200?random=1',
          },
          {
            name: 'دفتر ملاحظات مسطر واسع',
            price: 5.99,
            image: 'https://picsum.photos/300/200?random=2',
          },
          {
            name: 'دفتر ملاحظات مربع',
            price: 6.99,
            image: 'https://picsum.photos/300/200?random=3',
          },
        ],
      },
      {
        title: 'دفاتر التركيب',
        products: [
          {
            name: 'دفتر تركيب بغلاف رخامي',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=4',
          },
          {
            name: 'دفتر تركيب بغلاف بسيط',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=5',
          },
          {
            name: 'دفتر تركيب برسم بياني',
            price: 4.99,
            image: 'https://picsum.photos/300/200?random=6',
          },
        ],
      },
    ],
  },
  {
    title: 'آلات حاسبة',
    subcategories: [
      {
        title: 'آلات حاسبة علمية',
        products: [
          {
            name: 'تيكساس إنسترومنتس TI-84 بلس',
            price: 99.99,
            image: 'https://picsum.photos/300/200?random=7',
          },
          {
            name: 'كاسيو FX-115ES بلس',
            price: 49.99,
            image: 'https://picsum.photos/300/200?random=8',
          },
          {
            name: 'إتش بي 35s حاسبة علمية',
            price: 79.99,
            image: 'https://picsum.photos/300/200?random=9',
          },
        ],
      },
      {
        title: 'آلات حاسبة بيانية',
        products: [
          {
            name: 'تيكساس إنسترومنتس TI-84 بلس CE',
            price: 129.99,
            image: 'https://picsum.photos/300/200?random=10',
          },
          {
            name: 'كاسيو FX-CG50',
            price: 99.99,
            image: 'https://picsum.photos/300/200?random=11',
          },
          {
            name: 'إتش بي برايم حاسبة بيانية',
            price: 149.99,
            image: 'https://picsum.photos/300/200?random=12',
          },
        ],
      },
      {
        title: 'آلات حاسبة أساسية',
        products: [
          {
            name: 'كاسيو MS-80B آلة حاسبة أساسية',
            price: 9.99,
            image: 'https://picsum.photos/300/200?random=13',
          },
          {
            name: 'شارب EL-501XBWH آلة حاسبة أساسية',
            price: 12.99,
            image: 'https://picsum.photos/300/200?random=14',
          },
          {
            name: 'كانون LS-82Z آلة حاسبة أساسية',
            price: 7.99,
            image: 'https://picsum.photos/300/200?random=15',
          },
        ],
      },
    ],
  },
  {
    title: 'أقلام',
    subcategories: [
      {
        title: 'أقلام الكرة',
        products: [
          {
            name: 'قلم كرة بالحبر الأسود',
            price: 1.99,
            image: 'https://picsum.photos/300/200?random=16',
          },
          {
            name: 'قلم كرة بالحبر الأزرق',
            price: 1.99,
            image: 'https://picsum.photos/300/200?random=17',
          },
          {
            name: 'قلم كرة بالحبر الأحمر',
            price: 1.99,
            image: 'https://picsum.photos/300/200?random=18',
          },
        ],
      },
      {
        title: 'أقلام الجل',
        products: [
          {
            name: 'مجموعة أقلام الجل الملونة',
            price: 5.99,
            image: 'https://picsum.photos/300/200?random=19',
          },
          {
            name: 'أقلام الجل المعدنية',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=20',
          },
          {
            name: 'أقلام الجل الباستيل',
            price: 4.99,
            image: 'https://picsum.photos/300/200?random=21',
          },
        ],
      },
      {
        title: 'أقلام ماركر',
        products: [
          {
            name: 'مجموعة أقلام الماركر الدائمة',
            price: 7.99,
            image: 'https://picsum.photos/300/200?random=22',
          },
          {
            name: 'أقلام الماركر القابلة للمسح الجاف',
            price: 9.99,
            image: 'https://picsum.photos/300/200?random=23',
          },
          {
            name: 'أقلام التحديد',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=24',
          },
        ],
      },
    ],
  },
  {
    title: 'أقلام الرصاص',
    subcategories: [
      {
        title: 'أقلام رصاص ميكانيكية',
        products: [
          {
            name: 'مجموعة أقلام رصاص ميكانيكية',
            price: 4.99,
            image: 'https://picsum.photos/300/200?random=25',
          },
          {
            name: 'أقلام رصاص ميكانيكية 0.7 مم',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=26',
          },
          {
            name: 'أقلام رصاص ميكانيكية 0.5 مم',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=27',
          },
        ],
      },
      {
        title: 'أقلام رصاص خشبية',
        products: [
          {
            name: 'أقلام رصاص خشبية HB',
            price: 2.99,
            image: 'https://picsum.photos/300/200?random=28',
          },
          {
            name: 'أقلام رصاص خشبية ملونة',
            price: 4.99,
            image: 'https://picsum.photos/300/200?random=29',
          },
          {
            name: 'أقلام رصاص للتخطيط الفني',
            price: 6.99,
            image: 'https://picsum.photos/300/200?random=30',
          },
        ],
      },
    ],
  },
  {
    title: 'ماركرز',
    subcategories: [
      {
        title: 'أقلام التحديد',
        products: [
          {
            name: 'أقلام تحديد صفراء',
            price: 2.99,
            image: 'https://picsum.photos/300/200?random=31',
          },
          {
            name: 'أقلام تحديد بألوان متنوعة',
            price: 4.99,
            image: 'https://picsum.photos/300/200?random=32',
          },
          {
            name: 'أقلام تحديد هلامية',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=33',
          },
        ],
      },
      {
        title: 'أقلام الماركر الدائمة',
        products: [
          {
            name: 'أقلام ماركر دائمة سوداء',
            price: 3.99,
            image: 'https://picsum.photos/300/200?random=34',
          },
          {
            name: 'أقلام ماركر دائمة بألوان متنوعة',
            price: 5.99,
            image: 'https://picsum.photos/300/200?random=35',
          },
          {
            name: 'أقلام ماركر دائمة برأس دقيق',
            price: 4.99,
            image: 'https://picsum.photos/300/200?random=36',
          },
        ],
      },
    ],
  },
  {
    title: 'حقائب الظهر',
    subcategories: [
      {
        title: 'حقائب مدرسية',
        products: [
          {
            name: 'حقيبة ظهر مدرسية للجنسين',
            price: 29.99,
            image: 'https://picsum.photos/300/200?random=37',
          },
          {
            name: 'حقيبة ظهر مدرسية بعجلات',
            price: 49.99,
            image: 'https://picsum.photos/300/200?random=38',
          },
          {
            name: 'حقيبة ظهر مدرسية بتصميم رياضي',
            price: 39.99,
            image: 'https://picsum.photos/300/200?random=39',
          },
        ],
      },
      {
        title: 'حقائب الظهر للأعمال',
        products: [
          {
            name: 'حقيبة ظهر للأعمال بسحاب',
            price: 59.99,
            image: 'https://picsum.photos/300/200?random=40',
          },
          {
            name: 'حقيبة ظهر للأعمال بجيوب',
            price: 69.99,
            image: 'https://picsum.photos/300/200?random=41',
          },
          {
            name: 'حقيبة ظهر للأعمال ضد السرقة',
            price: 79.99,
            image: 'https://picsum.photos/300/200?random=42',
          },
        ],
      },
      {
        title: 'حقائب الظهر الرياضية',
        products: [
          {
            name: 'حقيبة ظهر رياضية صغيرة',
            price: 19.99,
            image: 'https://picsum.photos/300/200?random=43',
          },
          {
            name: 'حقيبة ظهر رياضية مقاومة للماء',
            price: 39.99,
            image: 'https://picsum.photos/300/200?random=44',
          },
          {
            name: 'حقيبة ظهر رياضية بتصميم أنيق',
            price: 49.99,
            image: 'https://picsum.photos/300/200?random=45',
          },
        ],
      },
    ],
  },
];
