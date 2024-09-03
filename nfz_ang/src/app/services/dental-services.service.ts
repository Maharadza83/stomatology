import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '@NFZ/env/environments';
import { IGroupedServices, IService } from '@NFZ/models/i-service';


@Injectable({ providedIn: 'root' })
export class DentalServicesService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly API_URL: string = environment.API_URL;

  public getDentalServices(): Observable<IGroupedServices[]> {
    return this.httpClient.get<any>(`${this.API_URL}/services?populate=*&fields[0]=title&fields[1]=description&fields[2]=type&fields[3]=link`).pipe(
      map((res: any) => {
        const mapped = res.data.map((item: any) => {
          return {
            name: item.attributes.title,
            description: item.attributes.description,
            type: item.attributes.type,
            imageUrl: `${environment.PHOTO_URL}${item.attributes.image?.data?.attributes?.formats?.medium?.url}` || '',
            link: item.attributes.link,
          } as IService;
        });

        const grouped = this.groupBy(mapped, 'type');

        return Object.keys(grouped).map((key) => ({
          serviceName: key,
          services: grouped[key],
        }));
      }),
    );
  }

  public getSingleDentalService(link: string): Observable<IService> {
    return this.httpClient.get<IService>(`${this.API_URL}/services?filters[link][$eq]=${link}&populate=*`).pipe(
      map((res: any) => {
        const attributes = res.data[0].attributes;

        return {
          name: attributes.title,
          type: attributes.type,
          link: attributes.link,
          description: attributes.description,
          article: attributes.article,
          imageUrl: `${environment.PHOTO_URL}${attributes.image?.data?.attributes?.formats?.medium?.url}` || '',
        };
      }),
    );
  }

  private groupBy(array: IService[], key: string): { [key: string]: IService[] } {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {} as { [key: string]: IService[] });
  }
}