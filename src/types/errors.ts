export type BaseErrorParams = {
  message: string;
  action: string;
  statusCode: number;
  cause?: unknown;
};

export type ErrorParams = Partial<BaseErrorParams>;
