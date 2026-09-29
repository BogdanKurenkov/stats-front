export interface LegalLink {
  label: string;
  href: string;
}

export interface LegalTable {
  headers: string[];
  rows: string[][];
}

export interface LegalBlock {
  title?: string;
  paragraphs?: string[];
  items?: string[];
  table?: LegalTable;
  note?: string;
  links?: LegalLink[];
}

export interface LegalSection extends LegalBlock {
  title: string;
  subsections?: LegalBlock[];
}

export interface LegalDocumentData {
  title: string;
  lastUpdate: string;
  lastUpdateDate: string;
  intro?: string[];
  sections: LegalSection[];
}

export interface LegalDocumentProps {
  document: LegalDocumentData;
}
