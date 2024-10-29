export class ErrorLog {
  line?: string;
  filename?: string;
  function?: string;
  message?: string;
  systemMessage?: string;
  url?: string;
  method?: string;
  statusCode?: number;
  error?: Error;

  constructor(partial: Partial<ErrorLog>) {
    Object.assign(this, partial);
  }
}

export class ResponseModel<T> {
  statusCode: number;
  statusMessage: string;
  message?: string;
  data?: T;
  error?: ErrorLog;

  constructor(partial: Partial<ResponseModel<T>>) {
    Object.assign(this, partial);
  }
}
