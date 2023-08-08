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
export class getcomments {
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

  //   service flows_getcomments

  async sd_Fus1lbUHAvbjnTKW(body: any = undefined, ...others) {
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

      bh = await this.sd_Cl6nguhXpMUbLIMi(bh);
      //appendnew_next_sd_Fus1lbUHAvbjnTKW
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
      return await this.errorHandler(bh, e, 'sd_Fus1lbUHAvbjnTKW');
    }
  }

  //appendnew_flow_getcomments_start

  async sd_Cl6nguhXpMUbLIMi(bh) {
    try {
      console.log(bh.input.body);
      console.log(bh.local.body);
      bh.url = 'http://localhost:8081/api/get_comments';

      bh = await this.sd_ORFvGDfpBqOWfwzX(bh);
      //appendnew_next_sd_Cl6nguhXpMUbLIMi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cl6nguhXpMUbLIMi');
    }
  }

  async sd_ORFvGDfpBqOWfwzX(bh) {
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

      //appendnew_next_sd_ORFvGDfpBqOWfwzX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ORFvGDfpBqOWfwzX');
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
  //appendnew_flow_getcomments_Catch
}
