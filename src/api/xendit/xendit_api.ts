import { HttpService } from '@nestjs/axios';
import { Injectable, HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { IXenditInvoiceRequest } from 'src/models/xendit/xendit_invoice_model';
import { IXenditPayout } from 'src/models/xendit/xendit_payout_model';


const XENDIT_PAYOUT = 'https://api.xendit.co/v2/payouts';
const XENDIT_INVOICE = 'https://api.xendit.co/v2/invoices';

export interface IXenditApiServiceDoXenditRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  requestBody: any;
  responseBody: any;
}

@Injectable()
export class XenditAPIService {
  private xenditAPIKey: string;

  constructor(private readonly httpService: HttpService) { }

  setApiKey(apiKey: string) {
    this.xenditAPIKey = apiKey;
  }

  private async doXenditRequest(
    request: IXenditApiServiceDoXenditRequest,
  ): Promise<any> {
    try {
      const headers: any = {
        'Content-Type': 'application/json',
      };

      if (request.url == XENDIT_PAYOUT && request.requestBody) {
        headers['Idempotency-key'] = request.requestBody?.reference_id;
      }

      const response: AxiosResponse = await this.httpService
        .request({
          method: request.method,
          url: request.url,
          data: request || undefined,
          headers: headers,
          auth: {
            username: this.xenditAPIKey,
            password: '',
          },
        })
        .toPromise();

      if (response.status != 200) {
        const errorResponse = await response.data;
        console.error("error message: ", errorResponse);
        throw new HttpException(errorResponse, response.status);
      }

      return response.data;
    } catch (error) {
      console.error("error message: ", error);
      return error;
    }
  }

  async createInvoice(request: IXenditInvoiceRequest) {
    return this.doXenditRequest({
      url: XENDIT_INVOICE,
      method: 'POST',
      requestBody: request,
      responseBody: null,
    });
  }

  async createPayout(request: IXenditPayout) {
    return this.doXenditRequest({
      url: XENDIT_PAYOUT,
      method: 'POST',
      requestBody: request,
      responseBody: null,
    });
  }
}
