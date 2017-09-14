import { Option } from './option.model';

export interface Poll {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  authorUsername: string;
  authorId: string;
  __v: number;
  options: Array<Option>;
}
