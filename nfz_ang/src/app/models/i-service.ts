export interface IService {
  name: string;
  description: string;
  imageUrl: string;
  type: string;
}

export interface IGroupedServices {
  serviceName: string;
  services: IService[];
}