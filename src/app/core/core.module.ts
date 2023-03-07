import { NgModule } from '@angular/core';
import { DeviceOnlineService } from './device/device-online.service';

@NgModule({
    providers: [
        DeviceOnlineService,
    ]
})


export class CoreModule { }

