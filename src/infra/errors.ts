import { BaseErrorParams, ErrorParams } from "@/types/errors";

export class BaseError extends Error {
  public readonly action: string;
  public readonly statusCode: number;

  constructor({ message, action, statusCode, cause }: BaseErrorParams) {
    super(message, { cause });
    this.name = this.constructor.name;
    this.action = action;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class InternalServerError extends BaseError {
  constructor({ cause, statusCode }: ErrorParams = {}) {
    super({
      message: "Um erro interno não esperado aconteceu.",
      action: "Entre em contato com o suporte.",
      statusCode: statusCode ?? 500,
      cause,
    });
  }
}
