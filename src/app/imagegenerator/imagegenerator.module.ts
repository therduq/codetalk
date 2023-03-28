import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagegeneratorPageRoutingModule } from './imagegenerator-routing.module';

import { ImagegeneratorPage } from './imagegenerator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagegeneratorPageRoutingModule
  ],
  declarations: [ImagegeneratorPage]
})
export class ImagegeneratorPageModule {}
