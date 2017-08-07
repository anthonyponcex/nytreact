var axios = require('axios');

const nytAPI = '3dbfbf1bb1034c4bb5e8901725645c29';
const term = 'Manhattan'

 const helpers = {
  runQuery: (term) => {
  const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + term;    
    return axios.get(queryURL).then((response) => {
      console.log(response);
    });
  }
 };

//test run//
 helpers.runQuery();