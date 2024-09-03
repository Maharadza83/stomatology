import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { MENU } from '@NFZ/shell/components/menu/menu.const';

export interface IMenuItem {
  name: string;
  routerLink: string
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    RouterLinkActive,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  public isMenuVisible: WritableSignal<boolean> = signal(true)

  public toggleMenu(): void {
    this.isMenuVisible.update(state => !state)
  }

  protected readonly MENU = MENU;
}
