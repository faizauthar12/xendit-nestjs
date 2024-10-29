import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsBoolean, IsArray } from 'class-validator';
import {
  IXenditCustomerAddress,
  IXenditInvoiceCustomer,
  IXenditInvoiceCustomerNotificationPreference,
} from 'src/models/xendit/xendit_invoice_model';

export class CreateInvoiceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  external_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  // @ApiProperty({ required: false, type: () => IXenditInvoiceCustomer })
  @IsOptional()
  customer?: IXenditInvoiceCustomer;

  // @ApiProperty({ required: false, type: () => IXenditInvoiceCustomerNotificationPreference })
  @IsOptional()
  customer_notification_preference?: IXenditInvoiceCustomerNotificationPreference;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  invoice_duration: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  success_redirect_url?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  failure_redirect_url?: string;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  payment_methods?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  callback_virtual_account_id?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mid_label?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reminder_time_unit?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  reminder_time?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  locale?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  should_authenticate_credit_card?: boolean;
}
