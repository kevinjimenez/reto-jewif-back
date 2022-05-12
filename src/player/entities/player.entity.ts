import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PlayerEntity extends Document {
  @Prop({ type: Number })
  id: number;

  @Prop({ type: String })
  nickname: string;

  @Prop({ type: String })
  status: string;

  @Prop({ type: Number })
  balance: number;

  @Prop({ type: String })
  avatar: string;
}

export const PlayerEntitySchema = SchemaFactory.createForClass(PlayerEntity);
