var AWS = require("aws-sdk");
let awsconfig = {
"region": "us-east-1",

"endpoint": "http://dynamodb.us-east-1.amazonaws.com",

"accesskeyId" : "AKIAJDNC","secretAccessKey": "ltw7LNxCgttReBkv3rZIAlghkHRDVKjCTDsDJwuQ"
};
AWS.config.update(awsConfig);

let docclient = new AWS.DynamoDB.DocumentClient();
let modify = function(){
    var params={
        TableName:"users",
        key:{'emali_id':"example-1@gmail.com"},
        UpdateExpression :"set updated_by =:byuser, is_deleted =:boolvalue", 
        ExpressionAttributeValues:{
            ":byuser":"updateUser",
            ":boolvalue":true
        },
        ReturnValues :"UPDATED_NEW"
        };
        docclient.update(params,function(err,data){
        })

       }
