/**
 * Install GoopleAPI NPM library: npm install googleAPIS 
 *  Create auth variable 
 */
const {google} = require('googleapis'); 
const auth = new google.auth.GoogleAuth; 
const secretKey = {
  "type": process.env.type,
  "project_id": process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": process.env.auth_uri,
  "token_uri": process.env.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url,
  "universe_domain": process.env.universe_domain
}
const jwtClient = new google.auth.JWT(
  secretKey.client_email, null,
  secretKey.private_key,  ['https://www.googleapis.com/auth/spreadsheets']); 

//authenticate request 
jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully connected!");
  }
 });

 const sheets = google.sheets('v4');
 let spreadsheetId = '1AZXdinMyIkD2WWoeQPm62t0BGc2jjkx2IeEAM2DtFMc';
 let sheetRange = 'Sheet1!2:2';
 
 function getValues(spreadsheetId, sheetRange){
  sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    sheetrange: sheetRange ,
  }).then((response) => {
    const result = response.result; 
  }); 
 }





export default async function handler(req, res) {
    const search = req.query.search || '';
    
    var badges = [{
    "header": result,
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