import { libService } from './lib.service';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@NgModule({
    declarations: [
    ],
    providers: [
		libService,],
    imports: [
      ServoyPublicModule,
      CommonModule,
      FormsModule
    ],
    exports: [ 
      ]
})
export class fontawesomeproModule {}