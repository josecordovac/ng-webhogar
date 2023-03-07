import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';
import { share, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceOnlineService {
  private networkStatusObservable: Observable<boolean> = new Observable();
  private networkStatus = true;

  constructor() {
    this.startWatchNetwork();
  }

  private startWatchNetwork() {
    this.networkStatus = navigator.onLine;
    const connect = fromEvent(window, 'online').pipe(map(() => true)),
      disconnect = fromEvent(window, 'offline').pipe(map(() => false));

    this.networkStatusObservable = merge(connect, disconnect).pipe(share());
    this.networkStatusObservable.subscribe(status => {
      this.networkStatus = status;
    });
  }

  getNetworkStatusAsObservable() {
    return this.networkStatusObservable;
  }

  isOnline() {
    return this.networkStatus;
  }
}
