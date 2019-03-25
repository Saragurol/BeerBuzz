const { db, Brewery, Beer } = require("./server/db");
const { green, red } = require("chalk");

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  const breweries = [
    {
      id: 1,
      name: "Brooklyn Brewery",
      imageUrl: 'https://www.dafont.com/forum/attach/orig/3/3/334015.gif?1',
      address: "79 N 11th St, Brooklyn, NY 11249",
      description: "Microbrewery with tastings & tours that offer an inside look at the creation process."
    },
    {
      id: 2,
      name: "Harpoon Brewery",
      imageUrl:
      'https://pbs.twimg.com/profile_images/688084265683304448/c5qTBaHu_400x400.jpg',
      address: "306 Northern Ave, Boston, MA 02210",
      description: "Harpoon Brewery is an American brewery, with plants in Boston, Massachusetts, and Windsor, Vermont. Founded in 1986, the brewery was the first company to obtain a permit to manufacture and sell alcohol in the Commonwealth of Massachusetts in more than 25 years."
    },
    {
      id: 3,
      name: "Coney Island Brewery",
      imageUrl:
      'http://coneyislandbeer.com/wp-content/themes/coneyisland/dist/images/logo.png',
      address: "1904 Surf Ave, Brooklyn, NY 11224",
      description: "Coney Island Brewing Company brews craft beer and craft hard soda inspired by the spirit and flavors of Coney Island"
    }
  ];

  await Promise.all(breweries.map(async brewery => await Brewery.create(brewery)));

  const beers = [
    {
      id: 1,
      name: "WEIZENBOT",
      imageUrl: "https://wwwimageslive.harpoonbrewery.com/Weizenbot-BD42.jpg?mw400-mh800",
      description: "A dark, robust, German-style wheat beer",
      volume: '8.0',
      breweryId: 2
    },
    {
      id: 2,
      name: "REC. LEAGUE",
      imageUrl: "https://wwwimageslive.harpoonbrewery.com/Rec-League-Updated.png?mw400-mh800",
      description: "Hazy Pale",
      volume: '3.8',
      breweryId: 2
    },
    {
      id: 3,
      name: "HARPOON LIME-Y VICE",
      imageUrl: "https://wwwimageslive.harpoonbrewery.com/Lime-y-Vice-5D5F.jpg?mw400-mh800",
      description: "Salty, sour, tart, and refreshing, this is the perfect beer for every summer celebration.",
      volume: '4.7',
      breweryId: 2
    },
    {
      id: 4,
      name: "MERMAID PILSNER",
      imageUrl: "http://coneyislandbeer.com/wp-content/uploads/2019/01/5bd14d58d9d48e001ae426eb-v5.jpg",
      description: "A light-bodied, crisp drinking, nicely hopped lager",
      volume: '5.2',
      breweryId: 3
    },
    {
      id: 5,
      name: "CONEY ISLAND LAGER",
      imageUrl: "https://beerconnoisseur.com/sites/default/files/styles/beer_page_245w/public/beer/coney-island-lager.jpg?itok=LE52Yews",
      description: "A a classic dry-hopped American lager",
      volume: '5.5',
      breweryId: 3
    },
    {
      id: 6,
      name: "BOSTON ALE",
      imageUrl: "https://boeningbrothers.com/wp-content/uploads/2018/03/Sam-Adams-Boston-Ale-600x500.png",
      description: "Earthy and spicy hop notes with a smooth malt body",
      volume: '5.4'
    },
    {
      id: 7,
      name: "BEL AIR SOUR",
      imageUrl: "http://brooklynbrewery.com/system/beers/73_shelf_Bel-Air-Sour-12oz-Beer-Page_original.png?1515168482",
      description: "Sour Ale",
      volume: '5.8',
      breweryId: 1
    },
    {
      id: 8,
      name: "BROOKLYN SUMMER ALE",
      imageUrl: "http://brooklynbrewery.com/system/beers/2_shelf_Summer-NEW-BeerPage_original.png?1520611864",
      description: "Sunny Pale Ale",
      volume: '5.0',
      breweryId: 1
    }
  ];

  await Promise.all(beers.map(async beer => await Beer.create(beer)))
  console.log(green("Seeding success!"))
  db.close();
};
seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
