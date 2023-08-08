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
  selector: 'bh-Sports',
  templateUrl: './Sports.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class SportsComponent {
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
      this.sd_dLpMtu3Nwr8yUobM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dLpMtu3Nwr8yUobM(bh) {
    try {
      bh = this.sd_zG2Y7OAA8gnkB9dm(bh);
      //appendnew_next_sd_dLpMtu3Nwr8yUobM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dLpMtu3Nwr8yUobM');
    }
  }

  sportslike(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_DBOuD8RwiUf3vEOD(bh);
      //appendnew_next_sportslike
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z36TCCk0ee8Tr5ll');
    }
  }

  //appendnew_flow_SportsComponent_start

  sd_zG2Y7OAA8gnkB9dm(bh) {
    try {
      this.page.latestcard = undefined;
      this.page.status = false;

      bh = this.sd_riOxcdRHiJOZgUdd(bh);
      //appendnew_next_sd_zG2Y7OAA8gnkB9dm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zG2Y7OAA8gnkB9dm');
    }
  }

  sd_riOxcdRHiJOZgUdd(bh) {
    try {
      const page = this.page;
      page.latestcard = new Array(2);

      //appendnew_next_sd_riOxcdRHiJOZgUdd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_riOxcdRHiJOZgUdd');
    }
  }

  sd_DBOuD8RwiUf3vEOD(bh) {
    try {
      const page = this.page;
      console.log('sports-check');
      // page.count=0;
      // for(let count=0;count<=0;count++){
      //     page.count=page.count+1;
      //     return page.count;
      // }
      if (page.count == 0) {
        page.count = 1;
        page.status = true;
      } else {
        page.status = false;
        page.count = 0;
      }

      //appendnew_next_sd_DBOuD8RwiUf3vEOD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DBOuD8RwiUf3vEOD');
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
  //appendnew_flow_SportsComponent_Catch
}
