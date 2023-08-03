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
  selector: 'bh-latest_blogs',
  templateUrl: './latest_blogs.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class latest_blogsComponent {
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
      this.sd_m3RLj6RHwDCE9gyY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_m3RLj6RHwDCE9gyY(bh) {
    try {
      bh = this.sd_NEmPJzzMCwwHKQHf(bh);
      //appendnew_next_sd_m3RLj6RHwDCE9gyY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m3RLj6RHwDCE9gyY');
    }
  }

  //appendnew_flow_latest_blogsComponent_start

  sd_NEmPJzzMCwwHKQHf(bh) {
    try {
      this.page.latestcard = undefined;

      bh = this.sd_Xs03P3ssdIT0ib1y(bh);
      //appendnew_next_sd_NEmPJzzMCwwHKQHf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NEmPJzzMCwwHKQHf');
    }
  }

  sd_Xs03P3ssdIT0ib1y(bh) {
    try {
      const page = this.page;
      page.latestcard = new Array(4);

      //appendnew_next_sd_Xs03P3ssdIT0ib1y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xs03P3ssdIT0ib1y');
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
  //appendnew_flow_latest_blogsComponent_Catch
}
