import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';
import { GvrApiService } from 'app/commons/services/gvr.services';
import { OverlayService } from 'app/commons/services/overlay/overlay.service';
// import { Storage, IIStorage } from '@tdp/eve-va-core';
import { Logger, ILogger, LogLevel, ILogLevel } from '@tdp/eve-va-core'
// import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  movilNumber = '';
  title = 'Mi Movistar';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  modalOpen = false;
  modalText = '';
  // storageTDP = new StorageTDP.set ({
  //     name: '__TPD',
  //     storeName: '__DB',
  //     dbKey: '__KEY',
  //     driverOrder: ['indexeddb' ]
  //   });

  // storageTDP = new Storage();
  // localStorage: IIStorage = this.storageTDP.localStorage();
  // sessionStorage: IIStorage = this.storageTDP.sessionStorage();

  // sqlStorageIndexddb: IIStorage = this.storageTDP.asyncStorage({
  //   name: '__TPD',
  //   storeName: '__DB',
  //   dbKey: '__KEY',
  //   driverOrder: ['indexeddb']
  // });

  // sqlStorageSQL: IIStorage = this.storageTDP.asyncStorage({
  //   name: '__TPD',
  //   storeName: '__DB',
  //   dbKey: '__KEY',
  //   driverOrder: ['websql']
  // });

  // sqlStorageVentas: IIStorage = this.storageTDP.asyncStorage({
  //   name: '__TPD',
  //   storeName: '__VEN',
  //   dbKey: '__KEY',
  //   driverOrder: ['localstorage']
  // });

  //-----------------------------
  //       L O G G E R          
  //-----------------------------

  logger: ILogger = new Logger({
    level: LogLevel.INFO
  } as ILogLevel);

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private grvApiService: GvrApiService,
    private overlayService: OverlayService,
    // private storage: Storage
  ) {

    // ionic core: localstorage-ok, sqlite-no, indexeddb-ok, websql-ok
    // tdp core: localstorage-ok, sqlite-no, indexeddb-ok, websql-ok
    // Or to get a key/value pair

    // console.log(this.storage);
    // this.storage.set('name', 'Prueb11')
    // this.storage.get('name').then((val) => {
    //   console.log('Your age is', val);
    // });

    // this.localStorage.clear();
    // this.sessionStorage.clear();
    // this.sqlStorageIndexddb.clear();
    // this.sqlStorageSQL.clear();
    // this.sqlStorageVentas.clear();

    // this.localStorage.setItem('localStorage', 'localStorage');

    // this.sessionStorage.setItem('sessionStorage', 'sessionStorage');

    // this.sqlStorageIndexddb.setItem('indexBD', 'indexBD - Created Correctlty');
    // this.sqlStorageSQL.setItem('sqlStorage', 'sqlStorage');
    // this.sqlStorageVentas.setItem('sqlStorage', 'sqlStorage VENTAS');

    // this.sqlStorageSQL.getItem('sqlStorage').then((value) => {
    //   console.log(value);
    // });

    // this.sqlStorageVentas.getItem('sqlStorage').then((value) => {
    //   console.log(value);
    // });

    this.TDP_Test_logger();
  }

  TDP_Test_logger() {
    // this.logger.info('info', { message: 'info Ok' });
    // this.logger.trace('trace', { message: 'trace Ok' });
    // this.logger.debug('debug', { message: 'debug Ok' });
    // this.logger.warn('warn', { message: 'warn Ok' });
    // this.logger.error('error', { message: 'error Ok' });
    // this.logger.log('Log', { message: 'Log Ok' });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  onChangeEvent(value: { detail: string }) {
    this.movilNumber = value.detail;
  }

  onClickEvent() {

    this.overlayService.open();

    this.grvApiService.getGvr(this.movilNumber).subscribe((data) => {
      this.overlayService.close();
      this.logger.info('TDP-GVS_DATA', data.body);
      this.modalText = data.body.groupValue;
      this.modalOpen = true;
    },
      () => {
        this.modalText = 'En unos minutos se activara este servcio. Intente mas Tarde.';
        this.modalOpen = true;
        this.overlayService.close();
      }
    );

    // this.storage.get('name').then((val) => {
    //     console.log('Your age is', val);
    //   });

  }

  closeEvent() {
    this.modalOpen = false;
    this.overlayService.close();
  }

}
