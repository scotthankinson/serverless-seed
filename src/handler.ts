// This is a work around so the test files can find their code once compiled
// typescript understands that src/* is actually ./src/* due to the baseUrl
// in the tsconfig file.
// when compiled the files are actually in ./build/src/*
import path = require("path");
require("app-module-path").addPath("." + path.sep + "build");

export function helloWorld(event: any, context: any, callback: Function) {
    switch (event.httpMethod) {
            case "GET":
                done(null,
                    {
                        "msg": "GET worked!"
                    }, callback);
                break;
            case "POST":
                done(null,
                    {
                        "msg": "POST worked!"
                    }, callback);
                break;
            default:
                done(new Error("Unsupported method \"${event.httpMethod}\""), null, callback);
        };
};

function done(err: any, res: any, callback: Function) {
    callback(null, {
        statusCode: err ? "400" : "200",
        body: err ? JSON.stringify({ error: err.message }) : JSON.stringify(res),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}