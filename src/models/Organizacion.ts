import mongoose, { Document, Schema, Types } from 'mongoose';
import { IUsuario, IUsuarioModel } from './Usuario';
import Organizacion from '../services/Organizacion';

export interface IOrganizacion {
    name: string;
    users: Types.ObjectId[] | IUsuario[];
}

export interface IOrganizacionModel extends IOrganizacion, Document {}

const OrganizacionSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        users: [{ type: Schema.Types.ObjectId, ref: 'User' }]

    },
    {
        versionKey: false
    }
    
);

export default mongoose.model<IOrganizacionModel>('Organizacion', OrganizacionSchema);
