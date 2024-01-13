import * as _212 from "./abci/types";
import * as _213 from "./crypto/keys";
import * as _214 from "./crypto/proof";
import * as _215 from "./libs/bits/types";
import * as _216 from "./p2p/types";
import * as _217 from "./types/block";
import * as _218 from "./types/evidence";
import * as _219 from "./types/params";
import * as _220 from "./types/types";
import * as _221 from "./types/validator";
import * as _222 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._212
  };
  export const crypto = {
    ..._213,
    ..._214
  };
  export namespace libs {
    export const bits = {
      ..._215
    };
  }
  export const p2p = {
    ..._216
  };
  export const types = {
    ..._217,
    ..._218,
    ..._219,
    ..._220,
    ..._221
  };
  export const version = {
    ..._222
  };
}