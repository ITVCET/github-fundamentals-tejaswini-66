AWS = require("aws-sdk");
let awsconfig = {
"region": "us-east-1",

"endpoint": "http://dynamodb.us-east-1.amazonaws.com",

"accesskeyId" : "AKIAJDNC","secretAccessKey": "ltw7LNxCgttReBkv3rZIAlghkHRDVKjCTDsDJwuQ"
};
AWS.config.update(awsConfig);

let docclient = new AWS.DynamoDB.DocumentClient();
let remove=function(){
    var params={
        TableName:"users",
        key:{
            "email_id":"example-1@gmail.com"
        }
    };
    docclient.delete(params,function(err,data){
        if(err){
            console.log("users::delete::error-"+JSON.stringify(err,null,2));
        }
        else{
            console.log("users::delete::sucess")
        }
        
    });
}
    remove();
