export interface Office {
  city: string;
  address: string;
  isMain: boolean;
}

export interface Service {
  name: string;
  url: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface FooterData {
  regions: string[];
  insurers: string[];
  fleetTypes: string[];
  services: Service[];
  offices: Office[];
  contactInfo: ContactInfo;
}