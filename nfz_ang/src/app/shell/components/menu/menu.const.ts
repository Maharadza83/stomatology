import { IMenuItem } from './menu.component';

export const MENU: IMenuItem[] = [
  {
    name: 'Strona główna',
    routerLink: '/'
  },
  {
    name: 'Usługi',
    routerLink: '/services'
  },
  {
    name: 'Cennik',
    routerLink: '/price-list'
  },
  {
    name: 'Kontakt',
    routerLink: '/contact'
  },
  {
    name: 'O nas',
    routerLink: '/about'
  },
  {
    name: 'Strefa wiedzy',
    routerLink: '/faq'
  }
]