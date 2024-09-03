import { IParagraphNode } from './i-article';

export interface IService {
  name: string;
  description: string;
  imageUrl: string;
  type: string;
  link: string;

  article?: IParagraphNode[];
}

export interface IGroupedServices {
  serviceName: string;
  services: IService[];
}