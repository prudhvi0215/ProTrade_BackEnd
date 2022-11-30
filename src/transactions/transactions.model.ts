import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  buyprice: string;

  @Prop({ required: true })
  sellprice: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  remark: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
