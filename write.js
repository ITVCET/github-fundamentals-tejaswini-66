var AWS = require("aws-sdk");

let awsconfig = {

"region": "us-east-1",

"endpoint": "http://dynamodb.us-east-1.amazonaws.com",

"accesskeyId" : "AKIAJDNC","secretAccessKey": "ltw7LNxCgttReBkv3rZIAlghkHRDVKjCTDsDJwuQ"
};
AWS.config.update(awsConfig);

let docclient = new AWS.DynamoDB.DocumentClient();
let save=function(){
    var input={
        "email-id":"example-1@gmail.com","created_by":"clientUser","created_on":new Date().toString(),
        "updated_by":"ckientUser","updated_on":new Date().toString(), "is_deleted":false
    };
    var params={
        TableName:"users",
        Item:input
  };
  docclient.put(params,function(err,data){
    if(err){
        console.log("users::save::error - " +JSON.stringify(err,null,2));
    }else{
        console.log("users::save::success");
    }
});
}
save();