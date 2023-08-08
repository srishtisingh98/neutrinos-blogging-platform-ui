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
  selector: 'bh-Must_Read',
  templateUrl: './Must_Read.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class Must_ReadComponent {
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
      this.sd_oLghpmxdIM4ayn2W(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_oLghpmxdIM4ayn2W(bh) {
    try {
      bh = this.sd_LOnOdpIli7KlulTF(bh);
      //appendnew_next_sd_oLghpmxdIM4ayn2W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oLghpmxdIM4ayn2W');
    }
  }

  mustreadlike(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_kCjq3xqPuMS84FTh(bh);
      //appendnew_next_mustreadlike
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qWGu5PRZERitUCz');
    }
  }

  //appendnew_flow_Must_ReadComponent_start

  sd_LOnOdpIli7KlulTF(bh) {
    try {
      this.page.latestcard = undefined;
      this.page.count = undefined;

      bh = this.sd_9kX5tB9QxG5fmhaJ(bh);
      //appendnew_next_sd_LOnOdpIli7KlulTF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LOnOdpIli7KlulTF');
    }
  }

  sd_9kX5tB9QxG5fmhaJ(bh) {
    try {
      const page = this.page;
      page.latestcard = new Array(3);

      //appendnew_next_sd_9kX5tB9QxG5fmhaJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9kX5tB9QxG5fmhaJ');
    }
  }

  sd_kCjq3xqPuMS84FTh(bh) {
    try {
      const page = this.page;
      console.log('must-read-check');
      if (page.count == 0) {
        page.count = 1;
        page.status = true;
      } else {
        page.status = false;
        page.count = 0;
      }

      //appendnew_next_sd_kCjq3xqPuMS84FTh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kCjq3xqPuMS84FTh');
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
  //appendnew_flow_Must_ReadComponent_Catch
}
