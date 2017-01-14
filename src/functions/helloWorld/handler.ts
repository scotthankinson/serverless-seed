// This is a work around so the test files can find their code once compiled
// typescript understands that src/* is actually ./src/* due to the baseUrl
// in the tsconfig file.
// when compiled the files are actually in ./build/src/*
import path = require("path");
require("app-module-path").addPath("." + path.sep + "build");
let dotenv = require("dotenv").config({ silent: true });

import { BaseConfig } from "src/shared/model/baseConfig";
import { ResponseHandler } from "src/shared/lib/responseHandler";
import { NodeCallback } from "src/shared/lib/nodeCallback";

let config = new BaseConfig();

export function helloWorld(event: any, context: any, callback: NodeCallback) {
    // Heartbeat must be reachable through a custom authorizer, so it will watch for the Auth header of 'Heartbeat'
    if (event && event.headers && event.headers["Authorization"] && event.headers["Authorization"] === "Heartbeat") {
        return ResponseHandler.done(null, { "alive": true }, callback);
    }

    // Return service configuration details (optional)
    if (event && event.headers && event.headers["X-Configuration"]) {
        return ResponseHandler.done(null, config.info, callback);
    }

    handle(event, context, callback);
}

let handle = (event: any, context: any, callback: NodeCallback) => {
    switch (event.httpMethod) {
            case "GET":
                ResponseHandler.done(null,
                    {
                        "msg": "GET worked!"
                    }, callback);
                break;
            case "POST":
                ResponseHandler.done(null,
                    {
                        "msg": "POST worked!"
                    }, callback);
                break;
            default:
                ResponseHandler.done(new Error("Unsupported method \"${event.httpMethod}\""), null, callback);
        };
};