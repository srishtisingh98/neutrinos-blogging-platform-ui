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
export class post_api {
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

  //   service flows_post_api

  async sd_VGx9ZUyRdPN117VL(body: any = undefined, ...others) {
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

      bh = await this.sd_xLEFSP00txXGN5qs(bh);
      //appendnew_next_sd_VGx9ZUyRdPN117VL
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
      return await this.errorHandler(bh, e, 'sd_VGx9ZUyRdPN117VL');
    }
  }

  //appendnew_flow_post_api_start

  async sd_xLEFSP00txXGN5qs(bh) {
    try {
      bh.url = `http://localhost:8081/api/add-post`;

      bh = await this.sd_qCAX14LQwOVTLeLC(bh);
      //appendnew_next_sd_xLEFSP00txXGN5qs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xLEFSP00txXGN5qs');
    }
  }

  async sd_qCAX14LQwOVTLeLC(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_qCAX14LQwOVTLeLC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qCAX14LQwOVTLeLC');
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
  //appendnew_flow_post_api_Catch
}
