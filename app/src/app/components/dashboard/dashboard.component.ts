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
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_FCZ7FpfT783pKTVQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FCZ7FpfT783pKTVQ(bh) {
    try {
      bh = this.sd_ww3tAyD8A2TLCZm2(bh);
      //appendnew_next_sd_FCZ7FpfT783pKTVQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FCZ7FpfT783pKTVQ');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_UGE0R3UvjV12gXCf(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nGA3YHbmPALeBSc9');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_ww3tAyD8A2TLCZm2(bh) {
    try {
      this.page.login = false;

      bh = this.sd_KaIdJLV5QU27V6gu(bh);
      //appendnew_next_sd_ww3tAyD8A2TLCZm2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ww3tAyD8A2TLCZm2');
    }
  }

  sd_KaIdJLV5QU27V6gu(bh) {
    try {
      const page = this.page;
      page.login = !page.login;

      //appendnew_next_sd_KaIdJLV5QU27V6gu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KaIdJLV5QU27V6gu');
    }
  }

  sd_UGE0R3UvjV12gXCf(bh) {
    try {
      const page = this.page;
      console.log('login check');

      bh = this.sd_iLizAMju5Egklz7X(bh);
      //appendnew_next_sd_UGE0R3UvjV12gXCf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UGE0R3UvjV12gXCf');
    }
  }

  sd_iLizAMju5Egklz7X(bh) {
    try {
      const loginDialog = this.__page_injector__.get(MatDialog);
      const loginDialogRef = loginDialog.open(loginComponent, {
        autoFocus: false,
        disableClose: false,
        maxWidth: '400px',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iLizAMju5Egklz7X');
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
  //appendnew_flow_dashboardComponent_Catch
}
