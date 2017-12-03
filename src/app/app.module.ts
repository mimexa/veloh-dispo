import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { RestangularModule } from 'ngx-restangular';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { LineComponent } from './components/line/line.component';
import { CapitalizerPipe } from './pipes/capitalizer.pipe';
import { IconUrlPipe } from './pipes/icon-url.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { StringFormatModule } from 'ngx-stringformat';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    CapitalizerPipe,
    IconUrlPipe,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKghPCLGugknDPQz3YlvgKQ7NuOLX2GBo'
    }),
    RestangularModule,
    AgmSnazzyInfoWindowModule,
    StringFormatModule
  ],
  providers: [GoogleMapsAPIWrapper,
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
