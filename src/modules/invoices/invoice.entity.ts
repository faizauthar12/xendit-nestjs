import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IXenditInvoiceCustomer, IXenditInvoiceCustomerNotificationPreference } from 'src/models/xendit/xendit_invoice_model';

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice {
  @Prop()
  id: string;

  @Prop()
  external_id: string;

  @Prop()
  user_id: string;

  @Prop()
  status: string;

  @Prop()
  amount: number;

  @Prop()
  paid_amount: number;

  @Prop()
  adjusted_received_amount: number;

  @Prop()
  fees_paid_amount: number;

  @Prop()
  paid_at: Date;

  @Prop()
  expiry_date: Date;

  @Prop()
  invoice_url: string;

  @Prop({ type: Object })
  customer: IXenditInvoiceCustomer;

  @Prop({ type: Object })
  CustomerNotificationPreference: IXenditInvoiceCustomerNotificationPreference;

  @Prop()
  created: Date;

  @Prop()
  updated: Date;

  @Prop()
  currency: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
