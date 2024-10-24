import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InvoiceUsecase } from 'src/usecases/invoice/invoice_usecase';

@ApiTags('invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceUsecase) { }

  @Post()
  @ApiOperation({ summary: 'Create invoice' })
  async create(
    @Body() body: any,
    @Res() res: Response
  ) {

  }

}