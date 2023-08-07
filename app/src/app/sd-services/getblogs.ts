/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class getblogs {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_getblogs

  async sd_VuG62A5wMH0xEWwr(body: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_obyZtfyeDtNj36Kb(bh);
      //appendnew_next_sd_VuG62A5wMH0xEWwr
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VuG62A5wMH0xEWwr');
    }
  }

  //appendnew_flow_getblogs_start

  async sd_obyZtfyeDtNj36Kb(bh) {
    try {
      bh.url = 'http://localhost:8081/api/get-post';

      bh = await this.sd_DcnpPHcxDyNNMbIe(bh);
      //appendnew_next_sd_obyZtfyeDtNj36Kb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_obyZtfyeDtNj36Kb');
    }
  }

  async sd_DcnpPHcxDyNNMbIe(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_DcnpPHcxDyNNMbIe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DcnpPHcxDyNNMbIe');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_getblogs_Catch
}
