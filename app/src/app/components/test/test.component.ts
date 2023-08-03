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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { loginComponent } from 'app/components/login/login.component'; //_splitter_
import { RegistrationComponent } from 'app/components/Registration/Registration.component'; //_splitter_
import { Forget_passwordComponent } from 'app/components/Forget_password/Forget_password.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-test',
  templateUrl: './test.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class testComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_NCt05zV6PrXosn1n(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_NCt05zV6PrXosn1n(bh) {
    try {
      bh = this.sd_hTkWfe6sYDqZsjRO(bh);
      //appendnew_next_sd_NCt05zV6PrXosn1n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NCt05zV6PrXosn1n');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_pSwKq7ptXmjdsynb(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sZ0ipKgmVyehATCx');
    }
  }

  toregister(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_pqMQEiVEqYEcbRB8(bh);
      //appendnew_next_toregister
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YcO37bzBap8W9y3M');
    }
  }

  forgetpwd(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_pjVFFksxo3QXi5Dq(bh);
      //appendnew_next_forgetpwd
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FE2PddshCOlDZjnx');
    }
  }

  //appendnew_flow_testComponent_start

  sd_hTkWfe6sYDqZsjRO(bh) {
    try {
      //appendnew_next_sd_hTkWfe6sYDqZsjRO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hTkWfe6sYDqZsjRO');
    }
  }

  sd_pSwKq7ptXmjdsynb(bh) {
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
      return this.errorHandler(bh, e, 'sd_pSwKq7ptXmjdsynb');
    }
  }

  sd_pqMQEiVEqYEcbRB8(bh) {
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
      return this.errorHandler(bh, e, 'sd_pqMQEiVEqYEcbRB8');
    }
  }

  sd_pjVFFksxo3QXi5Dq(bh) {
    try {
      const Forget_passwordDialog = this.__page_injector__.get(MatDialog);
      const Forget_passwordDialogRef = Forget_passwordDialog.open(
        Forget_passwordComponent,
        {
          autoFocus: false,
          disableClose: false,
          maxWidth: '400px',
          minHeight: '500px',
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pjVFFksxo3QXi5Dq');
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
  //appendnew_flow_testComponent_Catch
}
