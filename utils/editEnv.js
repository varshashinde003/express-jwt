var readline = require('readline');
var fs = require('fs');
var path = require("path");

module.exports = (key , value) => {

    var lineInterface = readline.createInterface({
        input: fs.createReadStream(path.resolve(".env"))
      });
      const newValues = [];
      let found = false;
      lineInterface.on('line', function (line) {
          if(line.includes(key)) {
              found = true;
              newValues.push(key + "="  + value);        
          }
          else {
              newValues.push(line);
          }
      });
      
      
      lineInterface.on("close" , () => {
          if(!found) {
            newValues.push(key + "="  + value);  
          }
          fs.writeFileSync(".env" , newValues.join("\n"));
      });
};