/**
 *
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  birthDate: string;

  @Prop()
  idCard: string;

  @Prop()
  suffering: string;

  @Prop()
  country: string;

  @Prop()
  province: string;

  @Prop()
  postalCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
