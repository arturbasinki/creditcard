import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule], //add this NgxMaskModule.forRoot(options) if U use NgxMaskModule!
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
