console.log('Loading function');

const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = async (event) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    const id = event.queryStringParameters && event.queryStringParameters.id;
    
    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin":"*"
        },
        body:"Vous devez donner un id de technologie"
    };
    if(id == null){
        return response;
    }

    // Get the object from the event and show its content type
    const bucket = "app-technlologies";
    const key = "liste-technologie.json"
    const params = {
        Bucket: bucket,
        Key: key,
    };
    
    const data = await s3.getObject(params).promise();
    console.log("Raw text \n" + data.Body.toString('utf-8'));
    const listeTechnologieJson = data.Body.toString("utf-8");
    const listeTechnologie = JSON.parse(listeTechnologieJson)
    
    let technologie = listeTechnologie.find(technologie =>technologie.id == id);
    
    response ={
        statusCode:200,
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify(technologie).toString('utf-8')
    };
    return response;
};
