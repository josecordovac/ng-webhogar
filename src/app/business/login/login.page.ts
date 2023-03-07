import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { DeviceOnlineService } from 'app/core/device/device-online.service';
import { UserApiService } from 'app/commons/services/login.service';
import { Logger, ILogger, LogLevel, ILogLevel } from '@tdp/eve-va-core'
import { AuthFactoryToken, JwtToken } from '@tdp/eve-va-core'

export interface IItemInput {
  value: string;
  label: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  listItems: Array<IItemInput> = [];
  user = '';
  pass = '';
  showOverlay = true;

  logger: ILogger = new Logger({
    level: LogLevel.INFO
  } as ILogLevel)

  constructor(
    private device: DeviceOnlineService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private userApiService: UserApiService,
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.listItems = [{ value: '1', label: 'Carnet de Extranjería' }, { value: '2', label: 'DNI' }];

    this.loginForm = this.formBuilder.group({
      'user': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
    console.log(this.device.isOnline());
    this.device.getNetworkStatusAsObservable().subscribe((status) => {
      console.log(status);
    })
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }
  goToHome() {

    if (this.user.length || this.pass.length) {
      this.userApiService.login(this.user, this.pass).subscribe((data) => {
        // console.log(data);
        const TOKEN_JWT = data.headers.get('TOKEN_JWT');
        this.logger.info('TDP-TOKEN', TOKEN_JWT);

        const auth = AuthFactoryToken(JwtToken, TOKEN_JWT);
        const payload = auth.getPayload();
        this.logger.info('TDP-PAYLOAD', payload);

        this.navCtrl.navigateRoot('/home');
      });

      //this.navCtrl.navigateRoot('/home');
    }
  }
  onChangeEvent(value: { detail: string }) {
    this.user = value.detail;
  }

  onChangeEvent1(value: { detail: string }) {
    this.pass = value.detail;
  }

}
