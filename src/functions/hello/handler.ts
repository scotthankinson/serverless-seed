require('aws-sdk').config.update({ region: 'us-east-1' });

// Handler for Lambda event
const hello = (event: any, _context: any, callback: any): void => {
  let request = tryParseJSON(event.body);

  // Input validation example -- expects JSON to be POSTED
  if (!event.body || request === false) {
    console.log("invalid request format provided");
    return callback(null, createResponseObject(400, { "message": "[400] Error!  invalid request body!" }));
  }

  // Input validation example -- expects a field world to be provided
  if (typeof request.world === "undefined")
    return callback(null, createResponseObject(400, { "message": "[400] Error!  world is required!" }));

  // Do logic
  let successfullExecution = true;
  let err = {}; // the Error if something broke
  let data = request;  // The response if something worked

  if (!successfullExecution) {
    callback(null, createResponseObject(500, { "message": "[500] Error!", err }));
  } else {
    callback(null, createResponseObject(200, { "message": "[200] Success!", data }));
  }

}


const tryParseJSON = (jsonString: string): any => {
  try {
    let o = JSON.parse(jsonString);
    console.log(o);

    if (typeof o === "object") {
      return o;
    }
  }
  catch (e) {
    console.log(e);
  }

  return false;
}

const createResponseObject = (statusCode: number, body: any): any  => {
  const response = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body),
  };

  console.log("assembled response: " + JSON.stringify(response));
  return response;
}

export { hello, tryParseJSON, createResponseObject};
