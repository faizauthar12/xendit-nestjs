import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { XenditAPIService } from './xendit.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [XenditAPIService],
  exports: [XenditAPIService],
})
export class XenditModule { }
