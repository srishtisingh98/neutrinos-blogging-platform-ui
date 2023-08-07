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
export class postcomment {
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

  //   service flows_postcomment

  async sd_qeeJEPW6eOl2uXkE(body: any = undefined, ...others) {
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

      bh = await this.sd_jpoVdIvtXFWGutSF(bh);
      //appendnew_next_sd_qeeJEPW6eOl2uXkE
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
      return await this.errorHandler(bh, e, 'sd_qeeJEPW6eOl2uXkE');
    }
  }

  //appendnew_flow_postcomment_start

  async sd_jpoVdIvtXFWGutSF(bh) {
    try {
      console.log(bh.input.body);
      console.log(bh.local.body);
      bh.url = 'http://localhost:8081/api/post_comment';

      bh = await this.sd_ZUffoNFpiKGfXVbk(bh);
      //appendnew_next_sd_jpoVdIvtXFWGutSF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jpoVdIvtXFWGutSF');
    }
  }

  async sd_ZUffoNFpiKGfXVbk(bh) {
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

      //appendnew_next_sd_ZUffoNFpiKGfXVbk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZUffoNFpiKGfXVbk');
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
  //appendnew_flow_postcomment_Catch
}
