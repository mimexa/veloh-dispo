import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { RestangularModule } from 'ngx-restangular';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { LineComponent } from './components/line/line.component';
import { CapitalizerPipe } from './pipes/capitalizer.pipe';
import { IconUrlPipe } from './pipes/icon-url.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { StringFormatModule } from 'ngx-stringformat';
// Function for setting the default restangular configuration
// export function RestangularConfigFactory (RestangularProvider) {
//   RestangularProvider.setBaseUrl('http://api.restngx.local/v1');
//   RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
// }

// "../node_modules/snazzy-info-window/dist/snazzy-info-window.css"

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
