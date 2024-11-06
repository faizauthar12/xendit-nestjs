import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IXenditInvoiceRequest } from 'src/models/xendit/xendit_invoice_model';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { WebhookInvoiceDto } from './dto/webhook-invoice.dto';

@ApiTags('invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(
    private invoiceService: InvoiceService,
  ) { }

  @Post()
  @ApiOperation({ summary: 'Create invoice' })
  async createInvoice(
    @Body() requestBody: CreateInvoiceDto,
    @Res() response: Response,
  ) {

    const invoiceRequest: IXenditInvoiceRequest = { ...requestBody };
    const data = await this.invoiceService.createInvoice(invoiceRequest);

    response.status(HttpStatus.OK).json({
      status: 'success',
      data: { invoice_url: data.invoice_url },
    });
  }

  @Post('webhook')
  @ApiOperation({ summary: 'Xendit webhook' })
  async xenditWebhook(
    @Body() requestBody: WebhookInvoiceDto,
    @Res() response: Response,
  ) {

    const data = await this.invoiceService.xenditWebhook(requestBody);

    response.status(HttpStatus.OK).json({
      status: 'success',
      data: data,
    });
  }
}
