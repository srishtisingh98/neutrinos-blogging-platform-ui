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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { loginComponent } from 'app/components/login/login.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Registration',
  templateUrl: './Registration.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class RegistrationComponent {
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
      this.sd_qfq1m4a485GCQvRF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qfq1m4a485GCQvRF(bh) {
    try {
      bh = this.sd_ea1oZMxUS9z4opd5(bh);
      //appendnew_next_sd_qfq1m4a485GCQvRF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qfq1m4a485GCQvRF');
    }
  }

  tologin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_lMNkVQQ3Z5HgYFy4(bh);
      //appendnew_next_tologin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sql8QRqgcwdnG3W7');
    }
  }

  onregister(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_a9USWxScj1PDKj0d(bh);
      //appendnew_next_onregister
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eUipuPXyn9umJ1SC');
    }
  }

  //appendnew_flow_RegistrationComponent_start

  sd_ea1oZMxUS9z4opd5(bh) {
    try {
      bh = this.sd_KFvQdrQ1ekCxpm8K(bh);
      //appendnew_next_sd_ea1oZMxUS9z4opd5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ea1oZMxUS9z4opd5');
    }
  }

  sd_KFvQdrQ1ekCxpm8K(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_66o2PM8dOxuaOi6S(bh);
      //appendnew_next_sd_KFvQdrQ1ekCxpm8K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KFvQdrQ1ekCxpm8K');
    }
  }

  sd_66o2PM8dOxuaOi6S(bh) {
    try {
      const page = this.page;
      page.registrationform = page.fb.group({
        username: [''],
        useremail: [''],
        password: [''],
      });

      //appendnew_next_sd_66o2PM8dOxuaOi6S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_66o2PM8dOxuaOi6S');
    }
  }

  sd_lMNkVQQ3Z5HgYFy4(bh) {
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
      return this.errorHandler(bh, e, 'sd_lMNkVQQ3Z5HgYFy4');
    }
  }

  sd_a9USWxScj1PDKj0d(bh) {
    try {
      const page = this.page;
      console.log(page.registrationform.value);

      //appendnew_next_sd_a9USWxScj1PDKj0d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a9USWxScj1PDKj0d');
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
  //appendnew_flow_RegistrationComponent_Catch
}
