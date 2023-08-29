export default async function handler(req, res) {
    const search = req.query.search || '';
    var badges = [{
        "header": "T-Shirt",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200"  
    },
    {
    
    "header": "T-Shirt",
    "subheading": "A card with optional accent stylings.",
    "content": "This card is highly customizable to contain any content you'd like",
    "image": "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200"

    },
    {

    "header": "T-Shirt",
    "subheading": "A card with optional accent stylings.",
    "content": "This card is highly customizable to contain any content you'd like",
    "image": "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200"

    },
    {

        "header": "T-Shirt",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200"
    
    }

];

    if(search === ''){
      badges = badges.slice(0,4);
      badges.map((schoolBadges) => {
        return schoolBadges;
      });
      
    }else{ 

    badges.map((schoolBadges) => {
        schoolBadges.index = schoolBadges.header.toLowerCase() + " " + schoolBadges.subheading.toLowerCase() + " " + schoolBadges.content.toLowerCase();
      });
      badges = badges.filter((schoolBadges) => {
        return schoolBadges.index.indexOf(search.toLowerCase()) > -1;
      });
    }
    console.log(badges);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badges);
  }