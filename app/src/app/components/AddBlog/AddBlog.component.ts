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
import { post_api } from 'app/sd-services/post_api'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-AddBlog',
  templateUrl: './AddBlog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class AddBlogComponent {
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
      this.sd_qQ5QMOrpzijvajaJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qQ5QMOrpzijvajaJ(bh) {
    try {
      bh = this.sd_LqH79qs0RJP1lZgG(bh);
      //appendnew_next_sd_qQ5QMOrpzijvajaJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qQ5QMOrpzijvajaJ');
    }
  }

  selectPostCategory(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_4XPPRQ4dRhJDIi2Y(bh);
      //appendnew_next_selectPostCategory
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lDt0Fh7nieNJLrJm');
    }
  }

  post_added(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_DHa8m2IAvaJun04u(bh);
      //appendnew_next_post_added
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KtbcfxU6UoikE1m3');
    }
  }

  //appendnew_flow_AddBlogComponent_start

  sd_LqH79qs0RJP1lZgG(bh) {
    try {
      this.page.addPost = undefined;

      bh = this.sd_j6VYus4mqFnWey7M(bh);
      //appendnew_next_sd_LqH79qs0RJP1lZgG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LqH79qs0RJP1lZgG');
    }
  }

  sd_j6VYus4mqFnWey7M(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_OK6Fw9S2skWAm4FV(bh);
      //appendnew_next_sd_j6VYus4mqFnWey7M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j6VYus4mqFnWey7M');
    }
  }

  sd_OK6Fw9S2skWAm4FV(bh) {
    try {
      const page = this.page;
      page.addPost = page.fb.group({
        postTitle: ['', Validators.required],
        postContent: ['', Validators.required],
        postImage: [''],
        postCategory: ['', Validators.required],
      });

      //appendnew_next_sd_OK6Fw9S2skWAm4FV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OK6Fw9S2skWAm4FV');
    }
  }

  sd_4XPPRQ4dRhJDIi2Y(bh) {
    try {
      const page = this.page;
      page.postCategory = [
        { value: 'Games', viewValue: 'Games' },
        { value: 'Movies', viewValue: 'Movies' },
        { value: 'Technology', viewValue: 'Technology' },
        { value: 'Travel', viewValue: 'Travel' },
      ];

      //appendnew_next_sd_4XPPRQ4dRhJDIi2Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4XPPRQ4dRhJDIi2Y');
    }
  }

  sd_DHa8m2IAvaJun04u(bh) {
    try {
      const page = this.page;
      console.log(page.addPost.value);
      bh.local.body = {
        user_id: 1,
        post_title: page.addPost.value.postTitle,
        post_content: page.addPost.value.postContent,
        post_category_id: page.addPost.value.postCategory,
      };

      console.log(bh.local.body);

      bh = this.sd_nWW1StLPQUsLRs2N(bh);
      //appendnew_next_sd_DHa8m2IAvaJun04u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DHa8m2IAvaJun04u');
    }
  }

  async sd_nWW1StLPQUsLRs2N(bh) {
    try {
      const post_apiInstance: post_api = this.__page_injector__.get(post_api);

      let outputVariables = await post_apiInstance.sd_VGx9ZUyRdPN117VL(
        bh.local.body
      );
      bh.input.result = outputVariables.local.result;

      bh = this.sd_O6qoeLfQNMO1NNkE(bh);
      //appendnew_next_sd_nWW1StLPQUsLRs2N
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nWW1StLPQUsLRs2N');
    }
  }

  async sd_O6qoeLfQNMO1NNkE(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_O6qoeLfQNMO1NNkE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O6qoeLfQNMO1NNkE');
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
  //appendnew_flow_AddBlogComponent_Catch
}
