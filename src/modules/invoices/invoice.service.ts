import { Model } from 'mongoose';
import { Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { XenditAPIService } from "../api/xendit/xendit.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { IXenditInvoiceResponse } from "src/models/xendit/xendit_invoice_model";
import { Invoice } from "./invoice.entity";

@Injectable()
export class InvoiceService {
  constructor(
    private xenditApi: XenditAPIService,
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
  ) { }

  async createInvoice(
    request: CreateInvoiceDto,
  ): Promise<IXenditInvoiceResponse> {
    this.xenditApi.setApiKey(process.env.XENDIT_API_KEY);

    const responses = await this.xenditApi.createInvoice(request);
    const createdInvoice = new this.invoiceModel(responses);
    await createdInvoice.save();

    return responses;
  }
}
