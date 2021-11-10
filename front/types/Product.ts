export interface Product {
  id: number;
  name: string;
  published_at: Date;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  created_at: Date;
  updated_at: Date;
  image: Image;
}

export interface CreatedBy {
  id: number;
  firstname: string;
  lastname: string;
  username?: any;
  email: string;
  password: string;
  resetPasswordToken?: any;
  registrationToken?: any;
  isActive: boolean;
  blocked?: any;
  preferedLanguage?: any;
}

export interface UpdatedBy {
  id: number;
  firstname: string;
  lastname: string;
  username?: any;
  email: string;
  password: string;
  resetPasswordToken?: any;
  registrationToken?: any;
  isActive: boolean;
  blocked?: any;
  preferedLanguage?: any;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_by: number;
  updated_by: number;
  created_at: Date;
  updated_at: Date;
}
