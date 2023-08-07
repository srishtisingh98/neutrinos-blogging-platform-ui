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
import { MatDialogRef, MatDialog } from '@angular/material/dialog'; //_splitter_
import { RegistrationComponent } from 'app/components/Registration/Registration.component'; //_splitter_
import { loginComponent } from 'app/components/login/login.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Forget_password',
  templateUrl: './Forget_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Forget_passwordComponent {
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
      this.sd_a1fjUs1VD3UyT00q(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_a1fjUs1VD3UyT00q(bh) {
    try {
      bh = this.sd_vLWjEpjpIgnrmO8O(bh);
      //appendnew_next_sd_a1fjUs1VD3UyT00q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a1fjUs1VD3UyT00q');
    }
  }

  register(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_ue9fHPfo63hjXrkn(bh);
      //appendnew_next_register
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cjpx9HIazoc4Zjdn');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_MT0bSiZWMx0LdC3j(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jz75bVs8q8kWhyFt');
    }
  }

  resetpassword(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_5szeg3wm6PBx5hXv(bh);
      //appendnew_next_resetpassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hMT0pozjAnqMKWqf');
    }
  }

  userlogin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_4MoEJq07FOlkxqUE(bh);
      //appendnew_next_userlogin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q39vCe8XG9c9JZZI');
    }
  }

  //appendnew_flow_Forget_passwordComponent_start

  sd_vLWjEpjpIgnrmO8O(bh) {
    try {
      bh = this.sd_UrRKCFUm6J7ZwfYR(bh);
      //appendnew_next_sd_vLWjEpjpIgnrmO8O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vLWjEpjpIgnrmO8O');
    }
  }

  sd_UrRKCFUm6J7ZwfYR(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_kG3I7AE1otGl4zwg(bh);
      //appendnew_next_sd_UrRKCFUm6J7ZwfYR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UrRKCFUm6J7ZwfYR');
    }
  }

  sd_kG3I7AE1otGl4zwg(bh) {
    try {
      const page = this.page;
      page.forgetpasswordform = page.fb.group({
        useremail: [''],
        newpassword: [''],
      });

      //appendnew_next_sd_kG3I7AE1otGl4zwg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kG3I7AE1otGl4zwg');
    }
  }

  sd_ue9fHPfo63hjXrkn(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.data);

      bh = this.sd_RJUpfN2xLL2AmbDd(bh);
      //appendnew_next_sd_ue9fHPfo63hjXrkn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ue9fHPfo63hjXrkn');
    }
  }

  sd_RJUpfN2xLL2AmbDd(bh) {
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
      return this.errorHandler(bh, e, 'sd_RJUpfN2xLL2AmbDd');
    }
  }

  sd_MT0bSiZWMx0LdC3j(bh) {
    try {
      const Dialog = this.__page_injector__.get(MatDialog);
      const DialogRef = Dialog.open(Component, {
        autoFocus: false,
        disableClose: false,
        maxWidth: '400px',
        minHeight: '500px',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MT0bSiZWMx0LdC3j');
    }
  }

  sd_5szeg3wm6PBx5hXv(bh) {
    try {
      const page = this.page;
      console.log(page.forgetpasswordform.value);

      bh = this.sd_ZiUtDhoCmUpypi2S(bh);
      //appendnew_next_sd_5szeg3wm6PBx5hXv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5szeg3wm6PBx5hXv');
    }
  }

  sd_ZiUtDhoCmUpypi2S(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.data);

      bh = this.sd_Z4BOPGeVTmssuGmG(bh);
      //appendnew_next_sd_ZiUtDhoCmUpypi2S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZiUtDhoCmUpypi2S');
    }
  }

  sd_Z4BOPGeVTmssuGmG(bh) {
    try {
      const loginDialog = this.__page_injector__.get(MatDialog);
      const loginDialogRef = loginDialog.open(loginComponent, {
        autoFocus: false,
        closeOnNavigation: true,
        hasBackdrop: true,
        maxWidth: '400px',
        minHeight: '500px',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z4BOPGeVTmssuGmG');
    }
  }

  sd_4MoEJq07FOlkxqUE(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.data);

      bh = this.sd_V8wuQieluaJDBS5k(bh);
      //appendnew_next_sd_4MoEJq07FOlkxqUE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4MoEJq07FOlkxqUE');
    }
  }

  sd_V8wuQieluaJDBS5k(bh) {
    try {
      const loginDialog = this.__page_injector__.get(MatDialog);
      const loginDialogRef = loginDialog.open(loginComponent, {
        autoFocus: false,
        disableClose: false,
        maxWidth: '400px',
        minHeight: '500px',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V8wuQieluaJDBS5k');
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
  //appendnew_flow_Forget_passwordComponent_Catch
}
