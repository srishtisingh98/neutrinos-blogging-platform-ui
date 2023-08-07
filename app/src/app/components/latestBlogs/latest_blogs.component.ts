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
import { Router } from '@angular/router'; //_splitter_
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

  seeall(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_y3gisdNdGEl0VGIX(bh);
      //appendnew_next_seeall
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_obo1CmlWFxgtcjxk');
    }
  }

  blog(value: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};

      bh = this.sd_4boeZGkbln7yoZCM(bh);
      //appendnew_next_blog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgUpsMsMO9E5GWGM');
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

  sd_y3gisdNdGEl0VGIX(bh) {
    try {
      const page = this.page;
      console.log('seeall');

      bh = this.sd_ZR2awaGOZu8qtHRm(bh);
      //appendnew_next_sd_y3gisdNdGEl0VGIX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y3gisdNdGEl0VGIX');
    }
  }

  async sd_ZR2awaGOZu8qtHRm(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/allblogs');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_ZR2awaGOZu8qtHRm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZR2awaGOZu8qtHRm');
    }
  }

  sd_4boeZGkbln7yoZCM(bh) {
    try {
      const page = this.page;
      console.log(bh.input.value);

      bh = this.sd_7UhfCT3KHMLFNRoq(bh);
      //appendnew_next_sd_4boeZGkbln7yoZCM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4boeZGkbln7yoZCM');
    }
  }

  async sd_7UhfCT3KHMLFNRoq(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/blog');
      bh.response = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_7UhfCT3KHMLFNRoq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7UhfCT3KHMLFNRoq');
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
