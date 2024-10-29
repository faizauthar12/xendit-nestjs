import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { MongooseModule } from "@nestjs/mongoose";
import { InvoiceController } from "./invoice.controller";
import { InvoiceService } from "./invoice.service";
import { XenditAPIService } from "../api/xendit/xendit.service";
import { Invoice, InvoiceSchema } from "./invoice.entity";

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  controllers: [InvoiceController],
  providers: [XenditAPIService, InvoiceService],
  exports: [InvoiceService],
})
export class InvoiceModule { }