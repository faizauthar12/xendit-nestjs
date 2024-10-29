import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class WebhookInvoiceDto {
  @IsString()
  id: string;

  @IsString()
  external_id: string;

  @IsString()
  user_id: string;

  @IsBoolean()
  is_high: boolean;

  @IsString()
  payment_method: string;

  @IsString()
  merchant_name: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  paid_amount: number;

  @IsString()
  bank_code: string;

  @IsDate()
  paid_at: Date;

  @IsString()
  payer_email: string;

  @IsString()
  description: string;

  @IsNumber()
  adjusted_received_amount: number;

  @IsNumber()
  fees_paid_amount: number;

  @IsDate()
  updated: Date;

  @IsDate()
  created: Date;

  @IsString()
  payment_channel: string;

  @IsString()
  payment_destination: string;
}
