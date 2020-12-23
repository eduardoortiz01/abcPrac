const internalIp = require('internal-ip');
 
(async () => {
    
 
    console.log(await internalIp.v4());
    //=> '10.0.0.79'
})();