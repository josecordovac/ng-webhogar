import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class OverlayService {
    private overlayStatusBS$ = new Subject<boolean>();

    getOverlayState(): Observable<boolean> {
        return this.overlayStatusBS$.asObservable();
    } 
    open() {
        this.overlayStatusBS$.next(true);
    }

    close() {
        this.overlayStatusBS$.next(false);
    }
}

