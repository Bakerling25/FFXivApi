const XIVAPI = require('C:\Users\Thomas\node_modules\xivapi-js');//mangler at lave denne path rigtig.

const xiv = new XIVAPI({
  private_key: 'someKey',
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
