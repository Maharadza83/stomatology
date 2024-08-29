import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IService } from '@NFZ/models/i-service';
import { DentalServicesViewComponent } from './components/dental-service-card-info/dental-service-card.component';
import { DoctorCardComponent } from '../../../home/components/doctors-carousel/components/doctor-card/doctor-card.component';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-dental-services',
  standalone: true,
  imports: [
    CommonModule,
    DentalServicesViewComponent,
    DoctorCardComponent,
    KeyValuePipe,
  ],
  templateUrl: './dental-services.component.html',
  styleUrls: ['./dental-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DentalServicesComponent {
  public readonly services: IService[] = [
    // Najpopularniejsze usługi
    {
      name: 'LASER FOTONA LightWalker',
      description: 'Zaawansowane zabiegi laserowe.',
      imageUrl: 'assets/laser-fotona.jpg',
      type: 'Najpopularniejsze usługi'
    },
    {
      name: 'Wybielanie zębów metodą PREVDENT',
      description: 'Profesjonalne wybielanie zębów.',
      imageUrl: 'assets/wybielanie-prevdent.jpg',
      type: 'Najpopularniejsze usługi'
    },
    {
      name: 'Korony i mosty',
      description: 'Odbudowa zębów przy użyciu koron i mostów.',
      imageUrl: 'assets/korony-mosty.jpg',
      type: 'Najpopularniejsze usługi'
    },
    {
      name: 'Licówka porcelanowa',
      description: 'Poprawa estetyki uśmiechu za pomocą licówek.',
      imageUrl: 'assets/licowki-porcelanowe.jpg',
      type: 'Najpopularniejsze usługi'
    },

    // Diagnostyka
    {
      name: 'Zdjęcia panoramiczne',
      description: 'Szczegółowe zdjęcia całej jamy ustnej.',
      imageUrl: 'assets/zdjecia-panoramiczne.jpg',
      type: 'Diagnostyka'
    },
    {
      name: 'RTG',
      description: 'Szybka i dokładna diagnostyka RTG.',
      imageUrl: 'assets/rtg.jpg',
      type: 'Diagnostyka'
    },

    // Profilaktyka
    {
      name: 'Profilaktyka stomatologiczna dorosłych i dzieci',
      description: 'Kompleksowa profilaktyka stomatologiczna.',
      imageUrl: 'assets/profilaktyka.jpg',
      type: 'Profilaktyka'
    },
    {
      name: 'Lakowanie',
      description: 'Zabezpieczenie zębów przed próchnicą.',
      imageUrl: 'assets/lakowanie.jpg',
      type: 'Profilaktyka'
    },
    {
      name: 'Lakierowanie',
      description: 'Aplikacja ochronnego lakieru na zęby.',
      imageUrl: 'assets/lakierowanie.jpg',
      type: 'Profilaktyka'
    },
    {
      name: 'Scaling',
      description: 'Usuwanie kamienia nazębnego.',
      imageUrl: 'assets/scaling.jpg',
      type: 'Profilaktyka'
    },
    {
      name: 'Piaskowanie',
      description: 'Usuwanie przebarwień i osadów.',
      imageUrl: 'assets/piaskowanie.jpg',
      type: 'Profilaktyka'
    },

    // Leczenie
    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/chirurgia.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Stomatologia zachowawcza',
      description: 'Leczenie i odbudowa zębów.',
      imageUrl: 'assets/stomatologia-zachowawcza.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Protetyka',
      description: 'Odbudowa brakujących zębów.',
      imageUrl: 'assets/protetyka.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Licówki kompozytowe',
      description: 'Szybka korekta estetyki zębów.',
      imageUrl: 'assets/licowki-kompozytowe.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Bruksizm',
      description: 'Leczenie zgrzytania zębami.',
      imageUrl: 'assets/bruksizm.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Clear Aligner',
      description: 'Niewidoczne aparaty ortodontyczne.',
      imageUrl: 'assets/clear-aligner.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Icon',
      description: 'Leczenie próchnicy wczesnej bez borowania.',
      imageUrl: 'assets/icon.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Implant',
      description: 'Odbudowa zębów przy pomocy implantów.',
      imageUrl: 'assets/implant.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Choroby błony śluzowej i przyzębia',
      description: 'Leczenie chorób przyzębia.',
      imageUrl: 'assets/choroby-przyzebia.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Paradontoza',
      description: 'Leczenie zaawansowanych chorób dziąseł.',
      imageUrl: 'assets/paradontoza.jpg',
      type: 'Leczenie'
    },
    {
      name: 'Recesja dziąseł',
      description: 'Zabiegi na cofające się dziąsła.',
      imageUrl: 'assets/recesja-dziasel.jpg',
      type: 'Leczenie'
    },

    // Stomatologia dziecięca
    {
      name: 'Stomatologia dziecięca',
      description: 'Leczenie zębów dzieci.',
      imageUrl: 'assets/stomatologia-dziecieca.jpg',
      type: 'Stomatologia dziecięca'
    }
  ];

  // Funkcja grupująca usługi według typu
  public get groupedServices(): { [key: string]: IService[] } {
    return this.services.reduce((groups, service) => {
      const group = groups[service.type] || [];
      group.push(service);
      groups[service.type] = group;
      return groups;
    }, {} as { [key: string]: IService[] });
  }
}
