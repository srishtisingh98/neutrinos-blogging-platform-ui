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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_cW31lOW5uFIeK4eI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_cW31lOW5uFIeK4eI(bh) {
    try {
      bh = this.sd_5Y7P2Pc3xAmLmsUJ(bh);
      //appendnew_next_sd_cW31lOW5uFIeK4eI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cW31lOW5uFIeK4eI');
    }
  }

  userprofile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Wz9a8Nl1BFBrOyns(bh);
      //appendnew_next_userprofile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1kyIe1K7Tmg2mr3G');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_5Y7P2Pc3xAmLmsUJ(bh) {
    try {
      this.page.showuseractions = false;

      //appendnew_next_sd_5Y7P2Pc3xAmLmsUJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5Y7P2Pc3xAmLmsUJ');
    }
  }

  sd_Wz9a8Nl1BFBrOyns(bh) {
    try {
      const page = this.page;
      console.log('user-profile click');

      page.showuseractions = page.showuseractions ? false : true;

      //appendnew_next_sd_Wz9a8Nl1BFBrOyns
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wz9a8Nl1BFBrOyns');
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
  //appendnew_flow_HomeComponent_Catch
}
