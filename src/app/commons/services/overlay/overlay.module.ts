import { ModuleWithProviders, Optional, SkipSelf, NgModule } from "@angular/core";
import { OverlayService } from "./overlay.service";

@NgModule()
export class OverlayModule {
  constructor (@Optional() @SkipSelf() parentModule: OverlayModule) {
    if (parentModule) {
      throw new Error(
        'OverlayModule is already loaded. Import it in the AppModule only');
    }
  }
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: OverlayModule,
      providers: [OverlayService],
    };
  }
}


