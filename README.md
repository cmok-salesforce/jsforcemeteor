# Meteor Packages
* meteor add nourharidy:ssl
* meteor npm install --save babel-runtime react react-dom classnames
* meteor npm install --save prop-types
* meteor add fourseven:scss
* meteor npm install react-flip-move
* meteor npm install numeral --save
* meteor npm install react react-dom react-router --save
* meteor npm install --save react-router-dom



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
* 


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
    db.players.find().sort({score:-1}) //sorting ascending
```

# BrowserHistory console
``
browserHistory.push('/url');
browserHistory.goBack();
browserHistory.goForward();
browserHistory.go(-2);
``

# Reference
* https://reactjs.org/docs/typechecking-with-proptypes.html
* https://babeljs.io/repl
* https://docs.mongodb.com/manual/reference/method/cursor.sort/
* https://docs.meteor.com/api/collections.html#sortspecifiers
* https://sass-lang.com/
* https://github.com/joshwcomeau/react-flip-move
* http://numeraljs.com/
* http://sass-lang.com/documentation/Sass/Script/Functions.html
* https://github.com/ReactTraining/react-router
* https://developer.mozilla.org/en-US/docs/Web/API/History
* https://github.com/ReactTraining/history