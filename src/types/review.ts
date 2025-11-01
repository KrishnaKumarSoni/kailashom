export type ReviewMediaType = 'image' | 'video' | null;

export interface ReviewInput {
  name: string;
  rating: number;
  feedback: string;
  mediaFile?: File | null;
}

export interface ReviewRecord {
  id: string;
  name: string;
  rating: number;
  feedback: string;
  mediaUrl?: string;
  mediaType: ReviewMediaType;
  createdAt: Date;
}
