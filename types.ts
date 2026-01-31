
export type Language = 'en' | 'ar';
export type UnitSystem = 'metric' | 'imperial';

export interface NotificationSettings {
  appUpdates: boolean;
  measurementReminders: boolean;
  featureAnnouncements: boolean;
}

export interface UserProfile {
  uid: string;
  name: string;
  activeProfileId?: string;
  unitPreference?: UnitSystem;
  notificationSettings?: NotificationSettings;
  lastUpdated: number;
  isAdmin?: boolean;
}

export type Relationship = 'self' | 'friend' | 'family';
export type Gender = 'men' | 'women';

export interface Profile {
  id: string;
  name: string; // e.g., "Myself", "Sarah", "John"
  type?: Relationship;
  gender?: Gender;
  measurements: Measurements;
  fitPreference: FitPreference;
  stretchTolerance: StretchTolerance;
  createdAt: number;
}

export interface Measurements {
  height_cm?: number;
  weight_kg?: number;
  neck_cm?: number;
  chest_cm?: number;
  waist_cm?: number;
  hips_cm?: number;
  shoulder_cm?: number;
  sleeve_cm?: number;
  inseam_cm?: number;
  thigh_cm?: number;
  foot_cm?: number;
}

export type FitPreference = 'tight' | 'regular' | 'oversized';
export type StretchTolerance = 'low' | 'medium' | 'high';

export interface SizeChart {
  id?: string;
  platform: string;
  category: string;
  gender: 'men' | 'women';
  sizes: Array<{
    label: string;
    ranges: Partial<Record<keyof Measurements, { min: number; max: number }>>;
  }>;
}

export interface DiscoveryLink {
  id?: string;
  category: string;
  platform: string;
  url: string;
  label?: string;
}

export type FitFeedback = 'tight' | 'perfect' | 'loose';

export interface Recommendation {
  id: string;
  profileId: string;
  platform: string;
  category: string;
  recommendedSize: string;
  confidence: number;
  timestamp: number;
  feedback?: FitFeedback;
}

export interface ProductResult {
  name: string;
  price: string;
  url: string;
  store: string;
  recommendedSize: string;
  matchScore: number;
}
