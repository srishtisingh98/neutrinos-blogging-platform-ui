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
import { getcomments } from 'app/sd-services/getcomments'; //_splitter_
import { postcomment } from 'app/sd-services/postcomment'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-blog',
  templateUrl: './blog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class blogComponent {
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
      this.sd_ytCFjUmavrcoUV3N(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ytCFjUmavrcoUV3N(bh) {
    try {
      bh = this.sd_W91vWrMOp20rteWw(bh);
      //appendnew_next_sd_ytCFjUmavrcoUV3N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ytCFjUmavrcoUV3N');
    }
  }

  postcmnt(value: any = undefined, value1: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value, value1: value1 };
      bh.local = {};

      bh = this.sd_yNT03BmTsC69AKRk(bh);
      //appendnew_next_postcmnt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HJ4oTzq6wVtaESyD');
    }
  }

  //appendnew_flow_blogComponent_start

  sd_W91vWrMOp20rteWw(bh) {
    try {
      this.page.comment = undefined;
      this.page.postcomment = undefined;
      this.page.post_id = 4;

      bh = this.sd_tSx5eIA0gXHk00Po(bh);
      //appendnew_next_sd_W91vWrMOp20rteWw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W91vWrMOp20rteWw');
    }
  }

  sd_tSx5eIA0gXHk00Po(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('postdata'));

      bh = this.sd_8DOHI7xTMh1Eeuqs(bh);
      //appendnew_next_sd_tSx5eIA0gXHk00Po
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tSx5eIA0gXHk00Po');
    }
  }

  sd_8DOHI7xTMh1Eeuqs(bh) {
    try {
      const page = this.page;
      console.log(page.result);

      bh.local.body = {
        post_id: page.result.post_id,
      };
      console.log('body', bh.local.body);

      bh = this.sd_7YdbE1fa5UJSXmM0(bh);
      //appendnew_next_sd_8DOHI7xTMh1Eeuqs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8DOHI7xTMh1Eeuqs');
    }
  }

  async sd_7YdbE1fa5UJSXmM0(bh) {
    try {
      const getcommentsInstance: getcomments =
        this.__page_injector__.get(getcomments);

      let outputVariables = await getcommentsInstance.sd_Fus1lbUHAvbjnTKW(
        bh.local.body
      );
      bh.input.result = outputVariables.local.result;

      bh = this.sd_5SVldyy24CpQLyhA(bh);
      //appendnew_next_sd_7YdbE1fa5UJSXmM0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7YdbE1fa5UJSXmM0');
    }
  }

  sd_5SVldyy24CpQLyhA(bh) {
    try {
      const page = this.page;
      console.log(bh.input.result);
      page.postcomment = bh.input.result.comments;

      bh = this.sd_tZVVbG9k26rOqtVA(bh);
      //appendnew_next_sd_5SVldyy24CpQLyhA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5SVldyy24CpQLyhA');
    }
  }

  sd_tZVVbG9k26rOqtVA(bh) {
    try {
      const page = this.page;
      console.log('data', bh.response);

      console.log(page.comment);
      //  page.postcomment = []
      console.log(page.postcomment);

      //appendnew_next_sd_tZVVbG9k26rOqtVA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tZVVbG9k26rOqtVA');
    }
  }

  sd_yNT03BmTsC69AKRk(bh) {
    try {
      const page = this.page;
      console.log(page.comment);
      console.log(bh.input.value);
      console.log(bh.input.value1);
      page.postcomment.push(page.comment);
      bh.local.body = {
        post_id: bh.input.value,
        user_id: bh.input.value1,
        comment_text: page.comment,
      };
      page.comment = '';

      bh = this.sd_n2eINci4OGnZpoUf(bh);
      //appendnew_next_sd_yNT03BmTsC69AKRk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yNT03BmTsC69AKRk');
    }
  }

  async sd_n2eINci4OGnZpoUf(bh) {
    try {
      const postcommentInstance: postcomment =
        this.__page_injector__.get(postcomment);

      let outputVariables = await postcommentInstance.sd_qeeJEPW6eOl2uXkE(
        bh.local.body
      );
      bh.input.result = outputVariables.local.result;

      //appendnew_next_sd_n2eINci4OGnZpoUf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n2eINci4OGnZpoUf');
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
  //appendnew_flow_blogComponent_Catch
}
