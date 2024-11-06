import { Model } from 'mongoose';
import { Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { XenditAPIService } from "../api/xendit/xendit.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { IXenditInvoiceResponse } from "src/models/xendit/xendit_invoice_model";
import { Invoice } from "./invoice.entity";
import { WebhookInvoiceDto } from './dto/webhook-invoice.dto';

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

  async xenditWebhook(request: WebhookInvoiceDto): Promise<any> {

    console.log('request data: ', request);

    const invoice = await this.invoiceModel.findOne({
      external_id: request.external_id,
    });

    if (!invoice) {
      console.log("Invoice not found in database");
      return "Invoice not found in database";
    }

    if (request.status == 'PAID') {
      await this.invoiceModel.updateOne(
        { external_id: request.external_id },
        { $set: { status: request.status, updated: request.updated } },
      );

      console.log("Invoice updated");

      return "Invoice updated";
    }

    return invoice;
  }
}
