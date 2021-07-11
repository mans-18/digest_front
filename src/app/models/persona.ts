import { EmailValidator } from '@angular/forms';

export interface Persona {
    id: number;
    name: string;
    mobile: number;
    whatsapp: number;
    telephone: number;
    email: string; 
    street: string;
    complement: string;
    postalcode: string;
    dob: Date;
    registerdate: Date;
    comment: string;
}