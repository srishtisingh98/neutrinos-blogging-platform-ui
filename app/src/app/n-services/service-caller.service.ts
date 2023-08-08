//append_imports_start

import * as sd_1trCoJ3xsu4weub6 from 'app/sd-services/getblog'; //_splitter_
import * as sd_h0Y6QWfeblUGDOXH from 'app/sd-services/getblogs'; //_splitter_
import * as sd_bQraSewXQvLInwkN from 'app/sd-services/getcomments'; //_splitter_
import * as sd_Q0VpAL9RjhndXo1w from 'app/sd-services/postcomment'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_1trCoJ3xsu4weub6: sd_1trCoJ3xsu4weub6.getblog,
    private sd_h0Y6QWfeblUGDOXH: sd_h0Y6QWfeblUGDOXH.getblogs,
    private sd_bQraSewXQvLInwkN: sd_bQraSewXQvLInwkN.getcomments,
    private sd_Q0VpAL9RjhndXo1w: sd_Q0VpAL9RjhndXo1w.postcomment
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
