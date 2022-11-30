import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
