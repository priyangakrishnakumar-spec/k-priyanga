export interface ShootLook {
  id: string;
  lookNumber: string;
  title: string;
  category: 'traditional' | 'jewellery' | 'western';
  badgeCategory: string;
  themeTag: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  stylingDetails: {
    outfit: string;
    jewellery: string;
    makeup: string;
    lighting: string;
    location: string;
  };
  initialLikes: number;
}

export interface ModelSpecs {
  height: string;
  heightCm: string;
  bust: string;
  waist: string;
  hips: string;
  shoeSize: string;
  eyeColor: string;
  hair: string;
  complexion: string;
  baseCity: string;
  baseState: string;
  mobility: string;
  languages: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  duration: string;
  deliverables: string[];
  bestFor: string;
}

export interface BookingInquiry {
  id: string;
  brandName: string;
  contactName: string;
  email: string;
  phone: string;
  shootType: string;
  date: string;
  location: string;
  duration: string;
  moodboardUrl?: string;
  brief: string;
  createdAt: string;
  status: 'Pending Review' | 'Confirmed' | 'Discussion';
}
