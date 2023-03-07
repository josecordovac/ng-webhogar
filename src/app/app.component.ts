import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pages } from './commons/interfaces/pages';
import { OverlayService } from './commons/services/overlay/overlay.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showOverlay = false;

  public appPages: Array<Pages>;
  private loadingSubscribe = new Subscription();

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private overlayService: OverlayService,
    private ref: ChangeDetectorRef,
  ) {
    this.appPages = [
      {
        title: 'Inicio',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Recibo',
        url: '/invoice',
        direct: 'root',
        icon: 'cloud-download'
      },
      {
        title: 'Detalles llamada',
        url: '/home',
        direct: 'root',
        icon: 'list'
      },
      {
        title: 'Contacto',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      }
    ];

    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    }).catch(() => { });
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

  ngOnInit() {
    this.loadingSubscribe = this.overlayService.getOverlayState().subscribe((show) => {
      console.log("app_>>>", show);
      this.showOverlay = show;
      this.ref.detectChanges();
    });
  }
  ngOnDestroy() {
    this.loadingSubscribe.unsubscribe();
    this.ref.detach();
  }
}
