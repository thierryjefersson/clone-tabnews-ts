import { NextResponse } from "next/server";
import { BaseError, InternalServerError } from "./errors";

type RouteHandler = (request: Request) => Promise<NextResponse>;

export function errorHandler(handler: RouteHandler): RouteHandler {
  return async function (request) {
    try {
      return await handler(request);
    } catch (error) {
      if (error instanceof BaseError) {
        return NextResponse.json(error.toJSON(), {
          status: error.statusCode,
        });
      }

      const publicErrorObject = new InternalServerError({ cause: error });
      console.error(publicErrorObject);

      return NextResponse.json(publicErrorObject, {
        status: publicErrorObject.statusCode,
      });
    }
  };
}
