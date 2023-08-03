/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { RegistrationComponent } from 'app/components/Registration/Registration.component'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_D44FtxNeAJof1ZXF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_D44FtxNeAJof1ZXF(bh) {
    try {
      bh = this.sd_remRPEV8JKhtFX95(bh);
      //appendnew_next_sd_D44FtxNeAJof1ZXF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D44FtxNeAJof1ZXF');
    }
  }

  toregister(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_5vtChh3y7uDMlw7v(bh);
      //appendnew_next_toregister
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O4CaqkbTQkhBebaW');
    }
  }

  forgetpwd(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_G9bxIlAPANsHpMuW(bh);
      //appendnew_next_forgetpwd
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lnfMNd0fR4lG8hPU');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_6q2LB5GEIIEto5BA(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_84TbjhW2K6LeubKW');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_remRPEV8JKhtFX95(bh) {
    try {
      bh = this.sd_MBJlQGnURP7o065o(bh);
      //appendnew_next_sd_remRPEV8JKhtFX95
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_remRPEV8JKhtFX95');
    }
  }

  sd_MBJlQGnURP7o065o(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_uKJWw78uoA8j9sMC(bh);
      //appendnew_next_sd_MBJlQGnURP7o065o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MBJlQGnURP7o065o');
    }
  }

  sd_uKJWw78uoA8j9sMC(bh) {
    try {
      const page = this.page;
      page.loginform = page.fb.group({
        username: [''],
        password: [''],
      });

      //appendnew_next_sd_uKJWw78uoA8j9sMC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uKJWw78uoA8j9sMC');
    }
  }

  sd_5vtChh3y7uDMlw7v(bh) {
    try {
      const RegistrationDialog = this.__page_injector__.get(MatDialog);
      const RegistrationDialogRef = RegistrationDialog.open(
        RegistrationComponent,
        {
          autoFocus: false,
          disableClose: false,
          maxWidth: '400px',
          minHeight: '500px',
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5vtChh3y7uDMlw7v');
    }
  }

  sd_G9bxIlAPANsHpMuW(bh) {
    try {
      const page = this.page;
      console.log('checking forPWD');

      bh = this.sd_kjynbr1RMlHHzxzb(bh);
      //appendnew_next_sd_G9bxIlAPANsHpMuW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G9bxIlAPANsHpMuW');
    }
  }

  async sd_kjynbr1RMlHHzxzb(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/fotgetpassword');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_kjynbr1RMlHHzxzb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kjynbr1RMlHHzxzb');
    }
  }

  sd_6q2LB5GEIIEto5BA(bh) {
    try {
      const page = this.page;
      console.log(page.loginform.value);

      bh = this.sd_8i7p1vVryltsDJdY(bh);
      //appendnew_next_sd_6q2LB5GEIIEto5BA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6q2LB5GEIIEto5BA');
    }
  }

  sd_8i7p1vVryltsDJdY(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.data);

      //appendnew_next_sd_8i7p1vVryltsDJdY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8i7p1vVryltsDJdY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_loginComponent_Catch
}
