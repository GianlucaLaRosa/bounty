// adjunctIds 1.aggiunte varie 2.verdure 3.salse

/* allergeneIds
1.Cereali contenenti glutine e relativi prodotti
2.Crostacei e relativi prodotti
3.Uova e relativi prodotti
4.Pesce e relativi prodottti
5.Arachidi e relativi prodotti
6.Semi di soia e relativi prodotti
7.Latte e relativi prodotti (incluso il lattosio)
8.Frutta a guscio, vale a dire mandorle, nocciole, noci, anacardi, noce di Pecan, noce del Brasile, noci del Queensland e relativi prodotti
9.Sedano e relativi prodotti
10.Senape e relativi prodotti
11.Semi di sesamo e relativi prodotti
12.Diossido di zolfo e solfiti a concentrazioni maggiori di 10mg/kg o 10 mg/litro riportati come SO2
13.Lupino e relativi prodotti
14.Molluschi e relativi prodotti 


badgeIds: 1.panino del mese 2.vegetariano 3.vegano 4.piccante

  sectionId
1.Birre
2.Sfizi
3.Hamurger
4.Gourmet
5.Piatti
6.Dolci
7.Bevande
8.Birre in bottiglia
9.Aperitivo
10.Superaclolici 7
    12.Whisky 9
    13.Rum 4
    14.Tequila 2
    15.Gin 8
    16.Cognac 4
*/

export const DUMMY_SECTIONS = [
  {
    id: 0,
    name: "Birre alla spina",
    order: 0,
  },
  {
    id: 1,
    name: "Sfizi",
    order: 1,
  },
  {
    id: 2,
    name: "Hamburger",
    order: 2,
  },
  {
    id: 3,
    name: "Gourmet",
    order: 3,
  },
  {
    id: 4,
    name: "Piatti",
    order: 4,
  },
  {
    id: 5,
    name: "Dolci",
    order: 5,
  },
  {
    id: 6,
    name: "Bevande",
    order: 6,
  },
  {
    id: 7,
    name: "Birre in bottiglia",
    order: 7,
  },
  {
    id: 8,
    name: "Aperitivo",
    order: 8,
  },
  {
    id: 9,
    name: "Superalcolici",
    order: 9,
  },
];

export const DUMMY_DATA = [
  // {
  //     id: ,
  //     name: '',
  //     description: '',
  //     allergeneIds: [],
  //     price: '',
  //     sectionId: ,
  //     adjunctIds: [],
  //     badgeIds: [],
  //     active: ,
  // },
  {
    id: 1,
    name: "Dar fondo",
    description:
      "Patate fritte con la buccia, pancetta italiana(cotta a 80 gradi per 12 ore), cipolla caramellata e formaggio stagionato, salsa rosa fatta in casa",
    allergeneIds: [7],
    price: "8.50",
    sectionId: 1,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 2,
    name: "Diamante",
    description: "Cipolla rossa panata con farina di riso e paprika affumicata",
    allergeneIds: [1],
    price: "5.50",
    sectionId: 1,
    adjunctIds: [3],
    badgeIds: [],
    active: false,
  },
  {
    id: 3,
    name: "Il Grande Blu per 2",
    description:
      "Patate fritte con la buccia, cipolla caramellata e formaggio stagionato, jalapeno ripieni di formaggio, cipolle fritte fatte in casa panate con farina di riso, snack di bastoncini di pollo, mix di salse fatte in casa",
    allergeneIds: [1, 3, 7],
    price: "14.00",
    sectionId: 1,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 4,
    name: "Il Grande Blu per 4",
    description:
      "Patate fritte con la buccia, cipolla caramellata e formaggio stagionato, jalapeno ripieni di formaggio, cipolle fritte fatte in casa panate con farina di riso, snack di bastoncini di pollo, mix di salse fatte in casa",
    allergeneIds: [1, 3, 7],
    price: "24.00",
    sectionId: 1,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: false,
  },
  {
    id: 5,
    name: "Jalapeño",
    description:
      "Ripieni di formaggio morbido, salsa allo yogurt e sesamo nero",
    allergeneIds: [1, 3],
    price: "6.00",
    sectionId: 1,
    adjunctIds: [3],
    badgeIds: [],
    active: true,
  },
  {
    id: 6,
    name: "Onde",
    description: "Patate fritte con la buccia e salsa rosa",
    allergeneIds: [],
    price: "4.50",
    sectionId: 1,
    adjunctIds: [3],
    badgeIds: [],
    active: true,
  },
  {
    id: 7,
    name: "Skipper",
    description: "Bastoncini di pollo fritti",
    allergeneIds: [1, 3],
    price: "6.00",
    sectionId: 1,
    adjunctIds: [3],
    badgeIds: [],
    active: false,
  },
  {
    id: 8,
    name: "Bulbo burger",
    description:
      "Pane buns artigianale, hamburger da 180g, carni selezionate e fatto in casa, insalata, formaggio, pomodoro e salsa rosa",
    allergeneIds: [1, 3, 7, 10],
    price: "8.00",
    sectionId: 2,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 9,
    name: "Bastardo burger",
    description:
      "Pane buns artigianale, hamburger 180g, carni selezionate e fatto in casa, pancetta cotta 12 ore a 80°, formaggio, insalata, pomodoro e salsa rosa",
    allergeneIds: [1, 3, 7, 10],
    price: "9.00",
    sectionId: 2,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 10,
    name: "Krang burger",
    description:
      "Pane buns artigianale, hamburger 180g, carni selezionate e fatto in casa, formaggio, insalata, pomodoro, funghi, pancetta e salsa rosa",
    allergeneIds: [1, 3, 7, 10],
    price: "10.00",
    sectionId: 2,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 11,
    name: "Grasso burger",
    description:
      "Pane buns artigianale, macinata di parti nobili del maiale, pancetta cotta per 12 ore a 80°, cipolla caramellata e salsa barbecue",
    allergeneIds: [1, 3, 7, 10],
    price: "9.00",
    sectionId: 2,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: false,
  },
  {
    id: 12,
    name: "Poppa burger",
    description:
      "Pane buns artigianale, hamburger di scottona cotta a bassa temperatura e poi passato alla griglia(la scottona è una manza tra i 18 e i 24 mesi che non ha mai partorito, la carne tenerissima e succulenta), funghi, brie e cavolo cappuccio viola condito.",
    allergeneIds: [1, 3, 7],
    price: "11.50",
    sectionId: 2,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 13,
    name: "Tolda Burger",
    description:
      "Pane buns artigianale, hamburger 180g, carni selezionate e fatto in casa, formaggio, insalata, pomodoro, salsa rosa e uovo",
    allergeneIds: [1, 3, 7, 10],
    price: "9.00",
    sectionId: 2,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 14,
    name: "Eletto",
    description:
      "Pane bun artigianale, pulled pork cotto a bassa temperatura per 12 ore e a 80° , pomodoro, insalata, spezie, cheddar flambè, salsa BBQ fatta in casa",
    allergeneIds: [1, 3, 7],
    price: "10.50",
    sectionId: 3,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 15,
    name: "Galante",
    description:
      "Pane bun artigianale, salsa jogurt (succo e buccia di limone, sesamo nero e bianco tostati, jogurt), insalata iceberg, formaggio Brie, melanzane bianca tonda affumicata alla curcuma con cipolle fritte (diamante)",
    allergeneIds: [1, 3, 7],
    price: "8.00",
    sectionId: 3,
    adjunctIds: [1, 2, 3],
    badgeIds: [2],
    active: false,
  },
  {
    id: 16,
    name: "Notevole",
    description:
      "Pane bun artigianale, sovracoscia di pollo cotta a bassa temperatura per 4 ore a 70°, pancetta cotta 12 ore a 80°, guacamole, cavolo cappuccio, melanzane alla curcuma",
    allergeneIds: [1, 3, 7],
    price: "10.50",
    sectionId: 3,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 17,
    name: "Marianna",
    description:
      "Pane bun artigianale, doppio strato di pancetta cotta a bassa temperatura per 12 ore a 60°, insalata, guacamole, pomodoro, brie",
    allergeneIds: [1, 3, 7],
    price: "8.50",
    sectionId: 3,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 18,
    name: "Piatto Galante",
    description:
      "Hamburger di scottona cotta a bassa temperatura e poi passato alla griglia, Il brie, cavolo cappuccio viola, funghi, melanzane a curcuma",
    allergeneIds: [1, 3, 7],
    price: "14.50",
    sectionId: 4,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 19,
    name: "Notevolissimo",
    description:
      "sovracoscia di pollo cotta a bassa temperatura per 4 ore a 70°, pancetta cotta 12 ore a 80°, spezie cajun caraibico, guacamole e insalata",
    allergeneIds: [1, 7],
    price: "11.50",
    sectionId: 4,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: true,
  },
  {
    id: 20,
    name: "Pollo fritto premium",
    description:
      "Sovracoscia di pollo cucinata a bassa temperatura per 8 ore e panata con farina di riso e croccante di patate, accompagnata da patatine fritte",
    allergeneIds: [],
    price: "17.00",
    sectionId: 4,
    adjunctIds: [1, 2, 3],
    badgeIds: [],
    active: false,
  },
];
