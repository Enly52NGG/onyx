export type DocumentStatus = 'active' | 'requires_review' | 'draft';

export type DocumentCategory =
  | 'server_rules'
  | 'criminal_code'
  | 'admin_code'
  | 'procedure'
  | 'constitution'
  | 'labor'
  | 'budget'
  | 'government'
  | 'judiciary'
  | 'special_regimes'
  | 'state_property'
  | 'document_flow'
  | 'civil_service'
  | 'fsb'
  | 'weapons'
  | 'police'
  | 'prosecutor'
  | 'fso'
  | 'traffic'
  | 'state_secret'
  | 'mass_media'
  | 'commercial'
  | 'health'
  | 'road_org'
  | 'advocacy'
  | 'penal'
  | 'investigative'
  | 'airspace'
  | 'other';

export interface Article {
  id: string;
  number: string;
  title: string;
  content: string;
  sanctions?: string;
  notes?: string;
  subsections?: { id: string; title: string; content: string }[];
}

export interface Section {
  id: string;
  number?: string;
  title: string;
  content?: string;
  articles?: Article[];
  subsections?: Section[];
}

export interface LegalDocument {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: DocumentCategory;
  status: DocumentStatus;
  description: string;
  sourceFile: string;
  lastUpdated?: string;
  adopted?: string;
  sections: Section[];
  related?: string[];
  tags?: string[];
}

export interface CategoryInfo {
  id: DocumentCategory | string;
  title: string;
  description: string;
  icon: string;
}
