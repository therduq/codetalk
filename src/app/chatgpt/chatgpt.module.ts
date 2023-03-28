import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatgptPageRoutingModule } from './chatgpt-routing.module';

import { ChatgptPage } from './chatgpt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatgptPageRoutingModule
  ],
  declarations: [ChatgptPage]
})
export class ChatgptPageModule {}
