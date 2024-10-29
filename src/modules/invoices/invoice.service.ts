import { Injectable, Post } from "@nestjs/common";
import { XenditAPIService } from "../api/xendit/xendit.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { IXenditInvoiceResponse } from "src/models/xendit/xendit_invoice_model";

@Injectable()
export class InvoiceService {
  constructor(private xenditApi: XenditAPIService) { }



  async createInvoice(
    request: CreateInvoiceDto,
  ): Promise<IXenditInvoiceResponse> {
    this.xenditApi.setApiKey(process.env.XENDIT_API_KEY);

    return this.xenditApi.createInvoice(request);
  }
}
