import { Document } from 'mongoose';
export interface Item extends Document {
    readonly id?: string;
    readonly name: string;
}
