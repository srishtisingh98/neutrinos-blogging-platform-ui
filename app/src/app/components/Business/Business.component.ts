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
//append_imports_end

@Component({
  selector: 'bh-Business',
  templateUrl: './Business.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class BusinessComponent {
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
      this.sd_cma7pdS0ImfsQNgY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_cma7pdS0ImfsQNgY(bh) {
    try {
      bh = this.sd_x9PGczWLvJSduf1y(bh);
      //appendnew_next_sd_cma7pdS0ImfsQNgY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cma7pdS0ImfsQNgY');
    }
  }

  //appendnew_flow_BusinessComponent_start

  sd_x9PGczWLvJSduf1y(bh) {
    try {
      this.page.latestcard = undefined;

      bh = this.sd_WMM6ATfH6OZIzuS5(bh);
      //appendnew_next_sd_x9PGczWLvJSduf1y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x9PGczWLvJSduf1y');
    }
  }

  sd_WMM6ATfH6OZIzuS5(bh) {
    try {
      const page = this.page;
      page.latestcard = new Array(2);

      //appendnew_next_sd_WMM6ATfH6OZIzuS5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WMM6ATfH6OZIzuS5');
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
  //appendnew_flow_BusinessComponent_Catch
}