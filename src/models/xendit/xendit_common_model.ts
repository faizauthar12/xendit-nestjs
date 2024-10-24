export interface IXenditCommonResponseErrorItem {
  field: string[];
  location: string;
  messages: string[];
  types: string[];
}

export interface IXenditCommonResponse {
  error_code: string;
  errors: any;
  message: string;
}
