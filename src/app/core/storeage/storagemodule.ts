import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf} from '@angular/core';
import { Storage, StorageConfig, getDefaultConfig } from '@tdp/eve-va-core';

export const StorageConfigToken = new InjectionToken<any>(
  'STORAGE_CONFIG_TOKEN'
);

export function provideStorage(storageConfig: StorageConfig): Storage {
  const config = !!storageConfig ? storageConfig : getDefaultConfig();
  return new Storage(config);
}

export { Storage };

@NgModule()
export class TDPStorageModule {
    constructor (@Optional() @SkipSelf() parentModule: TDPStorageModule) {
    if (parentModule) {
      throw new Error(
        'TDPStorageModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(storageConfig: StorageConfig = null): ModuleWithProviders {
    return {
      ngModule: TDPStorageModule,
      providers: [
        { provide: StorageConfigToken, useValue: storageConfig },
        {
          provide: Storage,
          useFactory: provideStorage,
          deps: [StorageConfigToken]
        }
      ]
    };
  }
}
