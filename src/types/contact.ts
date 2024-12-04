// src/types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactInfo {
  lat: number;
  lng: number;
  address: string;
  phone: string;
  email: string;
  workHours: string;
}

export const COMPANY_CONTACT: ContactInfo = {
  lat: 41.106937,
  lng: 29.016836,
  address: 'KARLIKTEPE MAH. BLOKEVLERİ SK. NO: 4 B İÇ KAPI NO: 132 KARTAL/ İSTANBUL',
  phone: '-',
  email: 'info@sosttech.com',
  workHours: 'Pazartesi - Cuma: 09:00 - 18:00'
};