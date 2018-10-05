require('dotenv').config({ path: `${process.env.PWD}/.env` });

console.log('*** meteor server run');
console.log('*** __filename=' + __filename);
console.log('*** __dirname=' + __dirname);
console.log('*** PWD=' + `${process.env.PWD}/.env`);


console.log('*** METEOR_PUBLIC_KEY_FULLPATH_LOCATION=' + process.env.METEOR_PUBLIC_KEY_FULLPATH_LOCATION);

console.log('*** HTTPS=' + process.env.METEOR_HTTPS_PORT);
console.log('*** KEY=' + process.env.METEOR_PRIVATE_KEY_FULLPATH_LOCATION);
