import * as _124 from "./applications/transfer/v1/genesis";
import * as _125 from "./applications/transfer/v1/query";
import * as _126 from "./applications/transfer/v1/transfer";
import * as _127 from "./applications/transfer/v1/tx";
import * as _128 from "./applications/transfer/v2/packet";
import * as _129 from "./core/channel/v1/channel";
import * as _130 from "./core/channel/v1/genesis";
import * as _131 from "./core/channel/v1/query";
import * as _132 from "./core/channel/v1/tx";
import * as _133 from "./core/client/v1/client";
import * as _134 from "./core/client/v1/genesis";
import * as _135 from "./core/client/v1/query";
import * as _136 from "./core/client/v1/tx";
import * as _137 from "./core/commitment/v1/commitment";
import * as _138 from "./core/connection/v1/connection";
import * as _139 from "./core/connection/v1/genesis";
import * as _140 from "./core/connection/v1/query";
import * as _141 from "./core/connection/v1/tx";
import * as _142 from "./core/port/v1/query";
import * as _143 from "./core/types/v1/genesis";
import * as _144 from "./lightclients/localhost/v1/localhost";
import * as _145 from "./lightclients/solomachine/v1/solomachine";
import * as _146 from "./lightclients/solomachine/v2/solomachine";
import * as _147 from "./lightclients/tendermint/v1/tendermint";
import * as _315 from "./applications/transfer/v1/tx.amino";
import * as _316 from "./core/channel/v1/tx.amino";
import * as _317 from "./core/client/v1/tx.amino";
import * as _318 from "./core/connection/v1/tx.amino";
import * as _319 from "./applications/transfer/v1/tx.registry";
import * as _320 from "./core/channel/v1/tx.registry";
import * as _321 from "./core/client/v1/tx.registry";
import * as _322 from "./core/connection/v1/tx.registry";
import * as _323 from "./applications/transfer/v1/query.lcd";
import * as _324 from "./core/channel/v1/query.lcd";
import * as _325 from "./core/client/v1/query.lcd";
import * as _326 from "./core/connection/v1/query.lcd";
import * as _327 from "./applications/transfer/v1/query.rpc.Query";
import * as _328 from "./core/channel/v1/query.rpc.Query";
import * as _329 from "./core/client/v1/query.rpc.Query";
import * as _330 from "./core/connection/v1/query.rpc.Query";
import * as _331 from "./core/port/v1/query.rpc.Query";
import * as _332 from "./applications/transfer/v1/tx.rpc.msg";
import * as _333 from "./core/channel/v1/tx.rpc.msg";
import * as _334 from "./core/client/v1/tx.rpc.msg";
import * as _335 from "./core/connection/v1/tx.rpc.msg";
import * as _410 from "./lcd";
import * as _411 from "./rpc.query";
import * as _412 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._315,
        ..._319,
        ..._323,
        ..._327,
        ..._332
      };
      export const v2 = {
        ..._128
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._316,
        ..._320,
        ..._324,
        ..._328,
        ..._333
      };
    }
    export namespace client {
      export const v1 = {
        ..._133,
        ..._134,
        ..._135,
        ..._136,
        ..._317,
        ..._321,
        ..._325,
        ..._329,
        ..._334
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._137
      };
    }
    export namespace connection {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._318,
        ..._322,
        ..._326,
        ..._330,
        ..._335
      };
    }
    export namespace port {
      export const v1 = {
        ..._142,
        ..._331
      };
    }
    export namespace types {
      export const v1 = {
        ..._143
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._144
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._145
      };
      export const v2 = {
        ..._146
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._147
      };
    }
  }
  export const ClientFactory = {
    ..._410,
    ..._411,
    ..._412
  };
}