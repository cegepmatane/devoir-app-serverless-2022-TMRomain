console.log('Loading function');

const AWS = require('aws-sdk');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring= require("querystring");


exports.handler = async (event) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    
    const postdata = querystring.parse(event.body);
    
    let technologie = null;
    
    let technologiejson = postdata["technologiejson"];
    
    if(technologiejson){
        technologie = JSON.parse(technologiejson);
    }
    
    
    let response ={
        statusCode: 400,
        headers:{
            "Access-Control-AllowOrigin":"*"
        },
        body : "Pas de technlologies recu",
    };
    
    if(technologie == null){
        return response;
    }
    
    technologie.id = Date.now();
    

    // Get the object from the event and show its content type
    const bucket = "app-technlologies";
    const key = "liste-technologie.json";
    const params = {
        Bucket: bucket,
        Key: key,
    };
    let data = await s3.getObject(params).promise();
    let listeTechnologieJson = data.Body.toString('utf-8');
    const listeTechnologie = JSON.parse(listeTechnologieJson);
    listeTechnologie.push(technologie);
    listeTechnologieJson = JSON.stringify(listeTechnologie);
    params.Body = listeTechnologieJson;
    data = await s3.putObject(params).promise();
    
    
    response = {
        statusCode:200,
        headers:{
             "Access-Control-AllowOrigin":"*"
        },
        body :technologie.id
    }
    return response;
};
