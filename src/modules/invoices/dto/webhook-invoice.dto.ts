import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class WebhookInvoiceDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  external_id: string;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsBoolean()
  is_high: boolean;

  @ApiProperty()
  @IsString()
  payment_method: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  merchant_name: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNumber()
  paid_amount: number;

  @ApiProperty()
  @IsString()
  bank_code: string;

  @ApiProperty()
  @IsDate()
  paid_at: Date;

  @ApiProperty()
  @IsString()
  payer_email: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  adjusted_received_amount: number;

  @ApiProperty()
  @IsNumber()
  fees_paid_amount: number;

  @ApiProperty()
  @IsDate()
  updated: Date;

  @ApiProperty()
  @IsDate()
  created: Date;

  @ApiProperty()
  @IsString()
  payment_channel: string;

  @ApiProperty()
  @IsString()
  payment_destination: string;
}
