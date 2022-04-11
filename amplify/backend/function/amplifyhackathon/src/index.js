exports.handler = async (event) => {
    console.log(event)
    const emailID = event.pathParameters.emailID;
    const email = {'emailID': emailID, 'emailName': "email " + emailID };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(email),
    };
    return response;
};