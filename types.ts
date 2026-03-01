export interface TimelineEvent {
  id: string;
  year: string;
  content: string;
  theme: 'war' | 'art' | 'silence';
  x: number; // Percentage 0-100 for random positioning
  y: number; // Percentage 0-100
}

export interface PoemFragment {
  id: string;
  chinese: string;
  english: string;
  source: string;
}

export interface TranslationData {
  id: string;
  chinese: string;
  pinyin: string;
  english: string;
  commentary: string;
}