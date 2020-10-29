const XIVAPI = require('xivapi-js');
const xiv = new XIVAPI({
  private_key: '794f5a0025f9405d9f30e132a954fe75004490f6ee334fa587d17f181de5fef9',//har lavet en private key indde fra siden
  language: 'en',
  snake_case: true
});


const getMembers = async () => {
  //find the FC with its name and server
  let res = await xiv.freecompany.search();
  //get the FC ID
  let id = res.Results[0].ID;
  

  //get and return fc members
  let fc = await xiv.freecompany.get();
  return fc.FreeCompanyMembers;
};

fetch("https://xivapi.com/Action/127", { mode: 'cors' })
	.then(response => response.json())
	.then(data => console.info(data.Name_en))