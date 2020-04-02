import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { FilterPipe } from '../filter.pipe';
import { UnlessDirective } from '../unless.directive';
import { ShortenPipe } from '../shorten.pipe';
import { BasicHighlightDirective } from '../basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from '../better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    FilterPipe,
    UnlessDirective,
    ShortenPipe,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
