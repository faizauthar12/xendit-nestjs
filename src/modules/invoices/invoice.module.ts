import { Module } from "@nestjs/common";
import { InvoiceController } from "./invoice.controller";
import { InvoiceService } from "./invoice.service";
import { XenditAPIService } from "../api/xendit/xendit.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [InvoiceController],
  providers: [XenditAPIService, InvoiceService],
  exports: [InvoiceService],
})

export class InvoiceModule { }