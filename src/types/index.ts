export interface SystemSpec {
  cpu: string;
  gpu: string;
  memory: string;
  storage: string;
  chassis: string;
  cooling: string;
  powerSupply: string;
  motherboard: string;
}

export type SystemCategory = 'Core' | 'Pro' | 'Ultra';

export interface System {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  startingPriceLabel: string;
  category: SystemCategory;
  badge?: string;
  highlights: string[];
  specifications: SystemSpec;
  targetResolution: string;
  estimatedPowerDraw: string;
  visualTheme: 'dark-lime' | 'deep-obsidian' | 'raw-titanium';
}

export interface ShowcaseFeature {
  title: string;
  value: string;
  detail: string;
  iconName: string;
}

export interface ShowcaseTab {
  id: 'performance' | 'cooling' | 'architecture' | 'craft';
  indexLabel: string;
  navTitle: string;
  headline: string;
  description: string;
  features: ShowcaseFeature[];
  specPill: string;
}

export interface ThermalFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  tag: string;
}
