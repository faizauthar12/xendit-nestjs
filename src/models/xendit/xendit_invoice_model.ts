export interface IXenditCustomerAddress {
  city: string;
  country: string;
  postal_code: string;
  state: string;
  street_line1: string;
  street_line2: string;
}

export interface IXenditInvoiceCustomer {
  given_names?: string;
  surname?: string;
  email?: string;
  mobile_number?: string;
  addresses?: IXenditCustomerAddress[];
}

export interface IXenditInvoiceCustomerNotificationPreference {
  invoice_created?: string[];
  invoice_reminder?: string[];
  invoice_paid?: string[];
}

export interface IXenditInvoiceItem {
  name: string;
  quantity: number;
  price: number;
  category?: string;
  url?: string;
}

export interface IXenditInvoiceFee {
  type: string;
  value: number;
}

export interface IXenditInvoiceRequest {
  external_id: string; // Invoice ID yang akan digunakan oleh merchant, dapat di isi UUID atau string unique
  status: string;
  amount: number;
  description?: string;
  customer?: IXenditInvoiceCustomer;
  customer_notification_preference?: IXenditInvoiceCustomerNotificationPreference;
  invoice_duration: number;
  success_redirect_url?: string;
  failure_redirect_url?: string;
  payment_methods?: string[];
  currency?: string;
  callback_virtual_account_id?: string;
  mid_label?: string;
  reminder_time_unit?: string;
  reminder_time?: number;
  locale?: string;
  should_authenticate_credit_card?: boolean;
}

export interface IXenditInvoiceResponse {
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
  CustomerNotificationPreference: IXenditInvoiceCustomerNotificationPreference;
  created: Date;
  updated: Date;
  currency: string;
}
