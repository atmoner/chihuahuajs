import * as _11 from "./feeburn/genesis";
import * as _12 from "./feeburn/params";
import * as _13 from "./feeburn/query";
import * as _14 from "./feeburn/tx";
import * as _228 from "./feeburn/tx.amino";
import * as _229 from "./feeburn/tx.registry";
import * as _230 from "./feeburn/query.lcd";
import * as _231 from "./feeburn/query.rpc.Query";
import * as _232 from "./feeburn/tx.rpc.msg";
import * as _401 from "./lcd";
import * as _402 from "./rpc.query";
import * as _403 from "./rpc.tx";
export namespace chihuahua {
  export const feeburn = {
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232
  };
  export const ClientFactory = {
    ..._401,
    ..._402,
    ..._403
  };
}