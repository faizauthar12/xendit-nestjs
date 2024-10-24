export interface IXenditPayoutChannelProperties {
  account_holder_name: string;
  account_number: string;
  account_type: string;
}

export interface IXenditPayoutReceiptNotification {
  email_to: string[];
  email_cc: string[];
  email_bcc: string[];
}

export interface IXenditPayout {
  id: string;
  amount: number;
  channel_code: string;
  currency: string;
  description?: string;
  reference_id: string;
  status: string;
  updated: Date;
  created: Date;
  estimated_arrival_time?: Date;
  failure_code: string;
  business_id: string;
  channel_properties: IXenditPayoutChannelProperties;
  receipt_notification?: IXenditPayoutReceiptNotification;
}
