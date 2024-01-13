import * as _109 from "./wasm/v1/authz";
import * as _110 from "./wasm/v1/genesis";
import * as _111 from "./wasm/v1/ibc";
import * as _112 from "./wasm/v1/proposal";
import * as _113 from "./wasm/v1/query";
import * as _114 from "./wasm/v1/tx";
import * as _115 from "./wasm/v1/types";
import * as _310 from "./wasm/v1/tx.amino";
import * as _311 from "./wasm/v1/tx.registry";
import * as _312 from "./wasm/v1/query.lcd";
import * as _313 from "./wasm/v1/query.rpc.Query";
import * as _314 from "./wasm/v1/tx.rpc.msg";
import * as _407 from "./lcd";
import * as _408 from "./rpc.query";
import * as _409 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._314
    };
  }
  export const ClientFactory = {
    ..._407,
    ..._408,
    ..._409
  };
}