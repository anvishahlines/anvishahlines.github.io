export interface Artwork {
  id: string;
  title: string;
  medium?: string;
  dimensions?: string;
  year?: string;
  image: string;
  description?: string;
  subProject?: string;
}

export interface WorkCategory {
  id: string;
  title: string;
  subtitle?: string;
  coverImage: string;
  // Detail crop position (e.g. object-center, object-top, 60% center)
  cropPosition?: string;
  description: string;
  statementSnippet?: string;
  works: Artwork[];
  hasSubProjects?: boolean;
  subProjects?: SubProject[];
}

export interface SubProject {
  id: string;
  title: string;
  coverImage: string;
  cropPosition?: string;
  description: string;
  works: Artwork[];
}

export interface CVSection {
  title: string;
  items: {
    year?: string;
    primary: string;
    secondary?: string;
    details?: string;
  }[];
}

export interface ArtistProfile {
  name: string;
  location: string;
  email: string;
  instagramUrl: string;
  instagramHandle: string;
  bioParagraph: string;
  statementParagraphs: string[];
  cvSections: CVSection[];
  profileImage: string;
}
