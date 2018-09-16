# Meteor Packages
* meteor add nourharidy:ssl
* meteor npm install --save babel-runtime react react-dom classnames
* meteor npm install --save prop-types

# Node Packages Global
* npm install nodemon -g

# Node Packages
* npm install properties-reader --save
* npm install dotenv --save
* npm install jsforce --save
* npm install progress --save
* npm install yargs --save
* npm install commander --save
* npm install pjson --save
* npm install browserfs --save



# MongoDB
* meteor mongo
    * mongodb://127.0.0.1:3001/meteor
    * metor must be shutdown : meteor reset  // wiping database
```
    show dbs
    db.players.find()
    db.players.find({name:'dada'})
    db.players.remove({_id:'jmxQgiPdKgF6yP94k'})
    db.players.update({_id:'WKkrdjoZ5a28F8Hhd'},{$set: {score:99}})
    db.players.update({_id:'WKkrdjoZ5a28F8Hhd'},{$inc: {score:1}})  // increment score by +1
```

# Reference
* https://reactjs.org/docs/typechecking-with-proptypes.html
* https://babeljs.io/repl