import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssComponent } from './css/css.component';
import { IfExComponent } from './if-ex/if-ex.component';
import { IfElseExComponent } from './if-else-ex/if-else-ex.component';
import { ForExComponent } from './for-ex/for-ex.component';
import { StdInfoComponent } from './std-info/std-info.component';
import { SwitchExComponent } from './switch-ex/switch-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    CssComponent,
    IfExComponent,
    IfElseExComponent,
    ForExComponent,
    StdInfoComponent,
    SwitchExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
