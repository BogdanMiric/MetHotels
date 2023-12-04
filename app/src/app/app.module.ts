import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './komponente/app-komponenta/app.component';
import { SmestajiComponent } from './komponente/smestaji/smestaji.component';
import { SmestajiTabelaComponent } from './komponente/smestaji/smestaji-tabela/smestaji-tabela.component';
import { SmestajiFormaComponent } from './komponente/smestaji/smestaji-forma/smestaji-forma.component';
import { BarComponent } from './komponente/bar/bar.component';
import { PreporukeComponent } from './komponente/preporuke/preporuke.component';
import { ONamaComponent } from './komponente/o-nama/o-nama.component';

@NgModule({
  declarations: [
    AppComponent,
    SmestajiComponent,
    SmestajiTabelaComponent,
    SmestajiFormaComponent,
    BarComponent,
    PreporukeComponent,
    ONamaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
