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
import { getblogs } from 'app/sd-services/getblogs'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-all_latestblogs',
  templateUrl: './all_latestblogs.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class all_latestblogsComponent {
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
      this.sd_dhtdizvAxaOVSU6g(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dhtdizvAxaOVSU6g(bh) {
    try {
      bh = this.sd_RbpeBB7xWF6jPl75(bh);
      //appendnew_next_sd_dhtdizvAxaOVSU6g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhtdizvAxaOVSU6g');
    }
  }

  seeall(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_q3KCEcFqEO757sZB(bh);
      //appendnew_next_seeall
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1FrjOm12tyxFjf0m');
    }
  }

  blog(item: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item: item };
      bh.local = {};

      bh = this.sd_Nyt390Z2NhSwcrIV(bh);
      //appendnew_next_blog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qSUyBoOUjfLUYsit');
    }
  }

  //appendnew_flow_all_latestblogsComponent_start

  sd_RbpeBB7xWF6jPl75(bh) {
    try {
      this.page.latestcard = undefined;

      bh = this.sd_Qh56K69Jioo2WUNl(bh);
      //appendnew_next_sd_RbpeBB7xWF6jPl75
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RbpeBB7xWF6jPl75');
    }
  }

  async sd_Qh56K69Jioo2WUNl(bh) {
    try {
      const getblogsInstance: getblogs = this.__page_injector__.get(getblogs);

      let outputVariables = await getblogsInstance.sd_VuG62A5wMH0xEWwr(
        bh.local.body
      );
      bh.input.result = outputVariables.local.result;

      bh = this.sd_k7qLBZyPqg1v3Ssw(bh);
      //appendnew_next_sd_Qh56K69Jioo2WUNl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qh56K69Jioo2WUNl');
    }
  }

  sd_k7qLBZyPqg1v3Ssw(bh) {
    try {
      const page = this.page;
      page.latestcard = bh.input.result;

      //appendnew_next_sd_k7qLBZyPqg1v3Ssw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k7qLBZyPqg1v3Ssw');
    }
  }

  sd_q3KCEcFqEO757sZB(bh) {
    try {
      const page = this.page;
      console.log('seeall');

      bh = this.sd_SxOu9rL2zT6Wo1Gg(bh);
      //appendnew_next_sd_q3KCEcFqEO757sZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q3KCEcFqEO757sZB');
    }
  }

  async sd_SxOu9rL2zT6Wo1Gg(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/allblogs');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_SxOu9rL2zT6Wo1Gg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SxOu9rL2zT6Wo1Gg');
    }
  }

  sd_Nyt390Z2NhSwcrIV(bh) {
    try {
      const page = this.page;
      console.log('item', bh.input.item);
      bh.local.id = bh.input.item;

      bh = this.sd_8it3GSLhnYTczfvq(bh);
      //appendnew_next_sd_Nyt390Z2NhSwcrIV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nyt390Z2NhSwcrIV');
    }
  }

  sd_8it3GSLhnYTczfvq(bh) {
    try {
      localStorage.setItem('postdata', JSON.stringify(bh.local.id));

      bh = this.sd_tcbogg4YLwQoeeKC(bh);
      //appendnew_next_sd_8it3GSLhnYTczfvq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8it3GSLhnYTczfvq');
    }
  }

  async sd_tcbogg4YLwQoeeKC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/blog/:post');
      bh.response = await this.__page_injector__
        .get(Router)
        .navigate(
          [
            this.sdService.formatPathWithParams(path, {
              post: bh.local.id.post_id,
            }),
          ],
          {
            queryParams: Object.assign(qprm, ''),
          }
        );

      //appendnew_next_sd_tcbogg4YLwQoeeKC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tcbogg4YLwQoeeKC');
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
  //appendnew_flow_all_latestblogsComponent_Catch
}
