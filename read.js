var AWS = require("aws-sdk");
let awsconfig = {
"region": "us-east-1",

"endpoint": "http://dynamodb.us-east-1.amazonaws.com",

"accesskeyId" : "AKIAJDNC","secretAccessKey": "ltw7LNxCgttReBkv3rZIAlghkHRDVKjCTDsDJwuQ"
};
AWS.config.update(awsConfig);

let docclient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = function () {

var params = {
 Tabletime: "users",

Key: {
     "email_id": "teju2612003@gmail.com"
 }
};

docClient.get(params, function (err, data) {

if (err) {

   console.log("users::fetchOneByKey:: error -"+JSON.stringify(err, null, 2));
}
else{
console.log("users::fetchOneByKey::success  - "+JS0N.stringify(data, null, 2));
}
})
}
