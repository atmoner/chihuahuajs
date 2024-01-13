import * as _148 from "./downtime-detector/v1beta1/downtime_duration";
import * as _149 from "./downtime-detector/v1beta1/genesis";
import * as _150 from "./downtime-detector/v1beta1/query";
import * as _151 from "./epochs/genesis";
import * as _152 from "./epochs/query";
import * as _153 from "./gamm/pool-models/balancer/balancerPool";
import * as _154 from "./gamm/v1beta1/genesis";
import * as _155 from "./gamm/v1beta1/query";
import * as _156 from "./gamm/v1beta1/tx";
import * as _157 from "./gamm/pool-models/balancer/tx/tx";
import * as _158 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _159 from "./gamm/pool-models/stableswap/tx";
import * as _160 from "./gamm/v2/query";
import * as _161 from "./ibc-rate-limit/v1beta1/params";
import * as _162 from "./ibc-rate-limit/v1beta1/query";
import * as _163 from "./incentives/gauge";
import * as _164 from "./incentives/genesis";
import * as _165 from "./incentives/params";
import * as _166 from "./incentives/query";
import * as _167 from "./incentives/tx";
import * as _168 from "./lockup/genesis";
import * as _169 from "./lockup/lock";
import * as _170 from "./lockup/params";
import * as _171 from "./lockup/query";
import * as _172 from "./lockup/tx";
import * as _173 from "./mint/v1beta1/genesis";
import * as _174 from "./mint/v1beta1/mint";
import * as _175 from "./mint/v1beta1/query";
import * as _176 from "./pool-incentives/v1beta1/genesis";
import * as _177 from "./pool-incentives/v1beta1/gov";
import * as _178 from "./pool-incentives/v1beta1/incentives";
import * as _179 from "./pool-incentives/v1beta1/query";
import * as _180 from "./protorev/v1beta1/genesis";
import * as _181 from "./protorev/v1beta1/gov";
import * as _182 from "./protorev/v1beta1/params";
import * as _183 from "./protorev/v1beta1/protorev";
import * as _184 from "./protorev/v1beta1/query";
import * as _185 from "./protorev/v1beta1/tx";
import * as _186 from "./sumtree/v1beta1/tree";
import * as _187 from "./superfluid/genesis";
import * as _188 from "./superfluid/params";
import * as _189 from "./superfluid/query";
import * as _190 from "./superfluid/superfluid";
import * as _191 from "./superfluid/tx";
import * as _192 from "./swaprouter/v1beta1/genesis";
import * as _193 from "./swaprouter/v1beta1/module_route";
import * as _194 from "./swaprouter/v1beta1/query";
import * as _195 from "./swaprouter/v1beta1/swap_route";
import * as _196 from "./swaprouter/v1beta1/tx";
import * as _197 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _198 from "./tokenfactory/v1beta1/genesis";
import * as _199 from "./tokenfactory/v1beta1/params";
import * as _200 from "./tokenfactory/v1beta1/query";
import * as _201 from "./tokenfactory/v1beta1/tx";
import * as _202 from "./twap/v1beta1/genesis";
import * as _203 from "./twap/v1beta1/query";
import * as _204 from "./twap/v1beta1/twap_record";
import * as _205 from "./txfees/v1beta1/feetoken";
import * as _206 from "./txfees/v1beta1/genesis";
import * as _207 from "./txfees/v1beta1/gov";
import * as _208 from "./txfees/v1beta1/query";
import * as _209 from "./valset-pref/v1beta1/query";
import * as _210 from "./valset-pref/v1beta1/state";
import * as _211 from "./valset-pref/v1beta1/tx";
import * as _336 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _337 from "./gamm/pool-models/stableswap/tx.amino";
import * as _338 from "./gamm/v1beta1/tx.amino";
import * as _339 from "./incentives/tx.amino";
import * as _340 from "./lockup/tx.amino";
import * as _341 from "./protorev/v1beta1/tx.amino";
import * as _342 from "./superfluid/tx.amino";
import * as _343 from "./swaprouter/v1beta1/tx.amino";
import * as _344 from "./tokenfactory/v1beta1/tx.amino";
import * as _345 from "./valset-pref/v1beta1/tx.amino";
import * as _346 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _347 from "./gamm/pool-models/stableswap/tx.registry";
import * as _348 from "./gamm/v1beta1/tx.registry";
import * as _349 from "./incentives/tx.registry";
import * as _350 from "./lockup/tx.registry";
import * as _351 from "./protorev/v1beta1/tx.registry";
import * as _352 from "./superfluid/tx.registry";
import * as _353 from "./swaprouter/v1beta1/tx.registry";
import * as _354 from "./tokenfactory/v1beta1/tx.registry";
import * as _355 from "./valset-pref/v1beta1/tx.registry";
import * as _356 from "./downtime-detector/v1beta1/query.lcd";
import * as _357 from "./epochs/query.lcd";
import * as _358 from "./gamm/v1beta1/query.lcd";
import * as _359 from "./gamm/v2/query.lcd";
import * as _360 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _361 from "./incentives/query.lcd";
import * as _362 from "./lockup/query.lcd";
import * as _363 from "./mint/v1beta1/query.lcd";
import * as _364 from "./pool-incentives/v1beta1/query.lcd";
import * as _365 from "./protorev/v1beta1/query.lcd";
import * as _366 from "./superfluid/query.lcd";
import * as _367 from "./swaprouter/v1beta1/query.lcd";
import * as _368 from "./tokenfactory/v1beta1/query.lcd";
import * as _369 from "./twap/v1beta1/query.lcd";
import * as _370 from "./txfees/v1beta1/query.lcd";
import * as _371 from "./valset-pref/v1beta1/query.lcd";
import * as _372 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _373 from "./epochs/query.rpc.Query";
import * as _374 from "./gamm/v1beta1/query.rpc.Query";
import * as _375 from "./gamm/v2/query.rpc.Query";
import * as _376 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _377 from "./incentives/query.rpc.Query";
import * as _378 from "./lockup/query.rpc.Query";
import * as _379 from "./mint/v1beta1/query.rpc.Query";
import * as _380 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _381 from "./protorev/v1beta1/query.rpc.Query";
import * as _382 from "./superfluid/query.rpc.Query";
import * as _383 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _384 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _385 from "./twap/v1beta1/query.rpc.Query";
import * as _386 from "./txfees/v1beta1/query.rpc.Query";
import * as _387 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _388 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _389 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _390 from "./gamm/v1beta1/tx.rpc.msg";
import * as _391 from "./incentives/tx.rpc.msg";
import * as _392 from "./lockup/tx.rpc.msg";
import * as _393 from "./protorev/v1beta1/tx.rpc.msg";
import * as _394 from "./superfluid/tx.rpc.msg";
import * as _395 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _396 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _397 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _413 from "./lcd";
import * as _414 from "./rpc.query";
import * as _415 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._148,
      ..._149,
      ..._150,
      ..._356,
      ..._372
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._357,
      ..._373
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._338,
      ..._348,
      ..._358,
      ..._374,
      ..._390
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._157,
          ..._336,
          ..._346,
          ..._388
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._158,
          ..._159,
          ..._337,
          ..._347,
          ..._389
        };
      }
    }
    export const v2 = {
      ..._160,
      ..._359,
      ..._375
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._161,
      ..._162,
      ..._360,
      ..._376
    };
  }
  export const incentives = {
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._339,
    ..._349,
    ..._361,
    ..._377,
    ..._391
  };
  export const lockup = {
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._340,
    ..._350,
    ..._362,
    ..._378,
    ..._392
  };
  export namespace mint {
    export const v1beta1 = {
      ..._173,
      ..._174,
      ..._175,
      ..._363,
      ..._379
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._364,
      ..._380
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._341,
      ..._351,
      ..._365,
      ..._381,
      ..._393
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._186
    };
  }
  export const superfluid = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._342,
    ..._352,
    ..._366,
    ..._382,
    ..._394
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._343,
      ..._353,
      ..._367,
      ..._383,
      ..._395
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._344,
      ..._354,
      ..._368,
      ..._384,
      ..._396
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._369,
      ..._385
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._370,
      ..._386
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._345,
      ..._355,
      ..._371,
      ..._387,
      ..._397
    };
  }
  export const ClientFactory = {
    ..._413,
    ..._414,
    ..._415
  };
}