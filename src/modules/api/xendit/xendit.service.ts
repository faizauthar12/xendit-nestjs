import { HttpService } from '@nestjs/axios';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import {
  IXenditInvoiceRequest,
  IXenditInvoiceResponse,
} from 'src/models/xendit/xendit_invoice_model';
import { IXenditPayout } from 'src/models/xendit/xendit_payout_model';

const XENDIT_PAYOUT = 'https://api.xendit.co/v2/payouts';
const XENDIT_INVOICE = 'https://api.xendit.co/v2/invoices';

export interface IXenditApiServiceDoXenditRequest<TRequest, TResponse> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  requestBody: TRequest;
  responseBody: TResponse;
}

@Injectable()
export class XenditAPIService {
  private xenditAPIKey: string;

  constructor(private readonly httpService: HttpService) { }

  setApiKey(apiKey: string) {
    this.xenditAPIKey = apiKey;
    console.log(`API Key set: ${this.xenditAPIKey}`)
  }

  private async doXenditRequest<TRequest, TResponse>(
    request: IXenditApiServiceDoXenditRequest<TRequest, TResponse>,
  ): Promise<TResponse> {
    try {
      const headers: any = {
        'Content-Type': 'application/json',
      };

      if (request.url === XENDIT_PAYOUT && request.requestBody) {
        headers['Idempotency-key'] = (request.requestBody as any).reference_id;
      }

      const response: AxiosResponse = await this.httpService
        .request({
          method: request.method,
          url: request.url,
          data: request.requestBody || undefined,
          headers: headers,
          auth: {
            username: this.xenditAPIKey,
            password: '',
          },
        })
        .toPromise();

      return response.data as TResponse;
    } catch (error) {
      // Log error for debugging
      console.error("Error message:", error.response?.data || error.message);

      // Check if there is an Axios response error and return it directly
      if (error.response) {
        throw new HttpException(
          error.response.data, // Send the error data directly
          error.response.status, // Use the error status code from Axios
        );
      } else {
        // For non-Axios errors, re-throw as internal server error
        throw new HttpException(
          'An unexpected error occurred',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async createInvoice(
    request: IXenditInvoiceRequest,
  ): Promise<IXenditInvoiceResponse> {
    return this.doXenditRequest<IXenditInvoiceRequest, IXenditInvoiceResponse>({
      url: XENDIT_INVOICE,
      method: 'POST',
      requestBody: request,
      responseBody: {} as IXenditInvoiceResponse,
    });
  }

  async createPayout(request: IXenditPayout): Promise<any> {
    return this.doXenditRequest<IXenditPayout, any>({
      url: XENDIT_PAYOUT,
      method: 'POST',
      requestBody: request,
      responseBody: {} as any,
    });
  }
}
