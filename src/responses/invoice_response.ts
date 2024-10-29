import { IXenditInvoiceCustomer, IXenditInvoiceCustomerNotificationPreference } from "src/models/xendit/xendit_invoice_model";

export interface XenditInvoiceResponse {
  id: string;
  external_id: string;
  user_id: string;
  status: string;
  amount: number;
  paid_amount: number;
  adjusted_received_amount: number;
  fees_paid_amount: number;
  paid_at: Date;
  expiry_date: Date;
  invoice_url: string;
  customer: IXenditInvoiceCustomer;
  customer_notification_preference: IXenditInvoiceCustomerNotificationPreference;
  created: Date;
  updated: Date;
  currency: string;
}
