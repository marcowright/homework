import fetch from "../util/fetch-fill";
import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

// Your retrieve function plus any additional functions go here ...
function retrieve(options) {
  if (options === undefined) { options = {page: 1}; }
  var limit = 10
  var offset = options.page * 10 - 10
  var uri = window.path + "?offset=" + offset + "limits=" + limit;
    return new Promise(function (resolve, reject) {
      // resolve is a function that takes one argument
      fetch(uri).then(function(response) {
        var payload = response.json();
        var primaryColor=['red','blue','yellow'];
        var nextPage, previousPage;

        var ids = []
        for (i = 0; i < payload.length; i++){
          ids.push(payload[i].id);
        }

        // var open = []
        // for (i = 0; i < payload.length; i++){
        //   var openItem = payload[i];
        //   openItem.isPrimary = (primaryColor.indexOf(payload[i].color) !== -1);
        //   open.push(openItem);
        // }
        //
        // var closedPrimaryCount = 0;
        // for (i = 0; i < payload.length; i++){
        //   if (payload[i].disposition === 'closed' && primaryColor.indexOf(payload[i].color) !== -1) {
        //     closedPrimaryCount++;
        //   }
        // }
        //
        // if (payload.length > 10) {
        //   nextPage = options.page + 1;
        // }
        //
        // if (options.page > 1) {
        //   previousPage = options.page - 1;
        // }
        //
        // var result = {
        //   ids: ids,
        //   open: open,
        //   closedPrimaryCount: closedPrimaryCount,
        //   nextPage: nextPage,
        //   previousPage: previousPage
        // }

        resolve(payload);
      })
    })
}


export default retrieve;
