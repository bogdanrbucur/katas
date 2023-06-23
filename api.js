var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://palapp.asm-maritime.com/palvoyage/VoyagePAL/PortCallPlanner/GetLegPlanning',
  headers: {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'Content-Type': 'application/json'
  },
  data: {
    VesselIDList: [304388, 304373, 304338],
    VesselObjectList: [246072, 246026, 246049],
    PortList: [],
    Fromdate: '31-May-2023',
    ToDate: '21-Jun-2023'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});