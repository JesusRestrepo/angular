import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavey-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>heavey-loaders-slow works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaveyLoadersSlowComponent { }
