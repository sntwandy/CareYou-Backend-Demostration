import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DiagnosisDocument = Diagnosis & Document;

@Schema({ collection: 'diaseaes' })
export class Diagnosis {
  @Prop()
  _id: string;

  @Prop()
  symptoms: string[];

  @Prop()
  specificPathologies: string[];
}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);
