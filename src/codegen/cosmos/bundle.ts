import * as _17 from "./app/v1alpha1/config";
import * as _18 from "./app/v1alpha1/module";
import * as _19 from "./app/v1alpha1/query";
import * as _20 from "./auth/v1beta1/auth";
import * as _21 from "./auth/v1beta1/genesis";
import * as _22 from "./auth/v1beta1/query";
import * as _23 from "./authz/v1beta1/authz";
import * as _24 from "./authz/v1beta1/event";
import * as _25 from "./authz/v1beta1/genesis";
import * as _26 from "./authz/v1beta1/query";
import * as _27 from "./authz/v1beta1/tx";
import * as _28 from "./bank/v1beta1/authz";
import * as _29 from "./bank/v1beta1/bank";
import * as _30 from "./bank/v1beta1/genesis";
import * as _31 from "./bank/v1beta1/query";
import * as _32 from "./bank/v1beta1/tx";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/kv/v1beta1/kv";
import * as _35 from "./base/query/v1beta1/pagination";
import * as _36 from "./base/reflection/v1beta1/reflection";
import * as _37 from "./base/reflection/v2alpha1/reflection";
import * as _38 from "./base/snapshots/v1beta1/snapshot";
import * as _39 from "./base/store/v1beta1/commit_info";
import * as _40 from "./base/store/v1beta1/listening";
import * as _41 from "./base/tendermint/v1beta1/query";
import * as _42 from "./base/v1beta1/coin";
import * as _43 from "./capability/v1beta1/capability";
import * as _44 from "./capability/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/genesis";
import * as _46 from "./crisis/v1beta1/tx";
import * as _47 from "./crypto/ed25519/keys";
import * as _48 from "./crypto/hd/v1/hd";
import * as _49 from "./crypto/keyring/v1/record";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/v1/genesis";
import * as _67 from "./gov/v1/gov";
import * as _68 from "./gov/v1/query";
import * as _69 from "./gov/v1/tx";
import * as _70 from "./gov/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/gov";
import * as _72 from "./gov/v1beta1/query";
import * as _73 from "./gov/v1beta1/tx";
import * as _74 from "./group/v1/events";
import * as _75 from "./group/v1/genesis";
import * as _76 from "./group/v1/query";
import * as _77 from "./group/v1/tx";
import * as _78 from "./group/v1/types";
import * as _79 from "./mint/v1beta1/genesis";
import * as _80 from "./mint/v1beta1/mint";
import * as _81 from "./mint/v1beta1/query";
import * as _82 from "./msg/v1/msg";
import * as _83 from "./nft/v1beta1/event";
import * as _84 from "./nft/v1beta1/genesis";
import * as _85 from "./nft/v1beta1/nft";
import * as _86 from "./nft/v1beta1/query";
import * as _87 from "./nft/v1beta1/tx";
import * as _88 from "./orm/v1/orm";
import * as _89 from "./orm/v1alpha1/schema";
import * as _90 from "./params/v1beta1/params";
import * as _91 from "./params/v1beta1/query";
import * as _92 from "./slashing/v1beta1/genesis";
import * as _93 from "./slashing/v1beta1/query";
import * as _94 from "./slashing/v1beta1/slashing";
import * as _95 from "./slashing/v1beta1/tx";
import * as _96 from "./staking/v1beta1/authz";
import * as _97 from "./staking/v1beta1/genesis";
import * as _98 from "./staking/v1beta1/query";
import * as _99 from "./staking/v1beta1/staking";
import * as _100 from "./staking/v1beta1/tx";
import * as _101 from "./tx/signing/v1beta1/signing";
import * as _102 from "./tx/v1beta1/service";
import * as _103 from "./tx/v1beta1/tx";
import * as _104 from "./upgrade/v1beta1/query";
import * as _105 from "./upgrade/v1beta1/tx";
import * as _106 from "./upgrade/v1beta1/upgrade";
import * as _107 from "./vesting/v1beta1/tx";
import * as _108 from "./vesting/v1beta1/vesting";
import * as _233 from "./authz/v1beta1/tx.amino";
import * as _234 from "./bank/v1beta1/tx.amino";
import * as _235 from "./crisis/v1beta1/tx.amino";
import * as _236 from "./distribution/v1beta1/tx.amino";
import * as _237 from "./evidence/v1beta1/tx.amino";
import * as _238 from "./feegrant/v1beta1/tx.amino";
import * as _239 from "./gov/v1/tx.amino";
import * as _240 from "./gov/v1beta1/tx.amino";
import * as _241 from "./group/v1/tx.amino";
import * as _242 from "./nft/v1beta1/tx.amino";
import * as _243 from "./slashing/v1beta1/tx.amino";
import * as _244 from "./staking/v1beta1/tx.amino";
import * as _245 from "./upgrade/v1beta1/tx.amino";
import * as _246 from "./vesting/v1beta1/tx.amino";
import * as _247 from "./authz/v1beta1/tx.registry";
import * as _248 from "./bank/v1beta1/tx.registry";
import * as _249 from "./crisis/v1beta1/tx.registry";
import * as _250 from "./distribution/v1beta1/tx.registry";
import * as _251 from "./evidence/v1beta1/tx.registry";
import * as _252 from "./feegrant/v1beta1/tx.registry";
import * as _253 from "./gov/v1/tx.registry";
import * as _254 from "./gov/v1beta1/tx.registry";
import * as _255 from "./group/v1/tx.registry";
import * as _256 from "./nft/v1beta1/tx.registry";
import * as _257 from "./slashing/v1beta1/tx.registry";
import * as _258 from "./staking/v1beta1/tx.registry";
import * as _259 from "./upgrade/v1beta1/tx.registry";
import * as _260 from "./vesting/v1beta1/tx.registry";
import * as _261 from "./auth/v1beta1/query.lcd";
import * as _262 from "./authz/v1beta1/query.lcd";
import * as _263 from "./bank/v1beta1/query.lcd";
import * as _264 from "./base/tendermint/v1beta1/query.lcd";
import * as _265 from "./distribution/v1beta1/query.lcd";
import * as _266 from "./evidence/v1beta1/query.lcd";
import * as _267 from "./feegrant/v1beta1/query.lcd";
import * as _268 from "./gov/v1/query.lcd";
import * as _269 from "./gov/v1beta1/query.lcd";
import * as _270 from "./group/v1/query.lcd";
import * as _271 from "./mint/v1beta1/query.lcd";
import * as _272 from "./nft/v1beta1/query.lcd";
import * as _273 from "./params/v1beta1/query.lcd";
import * as _274 from "./slashing/v1beta1/query.lcd";
import * as _275 from "./staking/v1beta1/query.lcd";
import * as _276 from "./tx/v1beta1/service.lcd";
import * as _277 from "./upgrade/v1beta1/query.lcd";
import * as _278 from "./app/v1alpha1/query.rpc.Query";
import * as _279 from "./auth/v1beta1/query.rpc.Query";
import * as _280 from "./authz/v1beta1/query.rpc.Query";
import * as _281 from "./bank/v1beta1/query.rpc.Query";
import * as _282 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _283 from "./distribution/v1beta1/query.rpc.Query";
import * as _284 from "./evidence/v1beta1/query.rpc.Query";
import * as _285 from "./feegrant/v1beta1/query.rpc.Query";
import * as _286 from "./gov/v1/query.rpc.Query";
import * as _287 from "./gov/v1beta1/query.rpc.Query";
import * as _288 from "./group/v1/query.rpc.Query";
import * as _289 from "./mint/v1beta1/query.rpc.Query";
import * as _290 from "./nft/v1beta1/query.rpc.Query";
import * as _291 from "./params/v1beta1/query.rpc.Query";
import * as _292 from "./slashing/v1beta1/query.rpc.Query";
import * as _293 from "./staking/v1beta1/query.rpc.Query";
import * as _294 from "./tx/v1beta1/service.rpc.Service";
import * as _295 from "./upgrade/v1beta1/query.rpc.Query";
import * as _296 from "./authz/v1beta1/tx.rpc.msg";
import * as _297 from "./bank/v1beta1/tx.rpc.msg";
import * as _298 from "./crisis/v1beta1/tx.rpc.msg";
import * as _299 from "./distribution/v1beta1/tx.rpc.msg";
import * as _300 from "./evidence/v1beta1/tx.rpc.msg";
import * as _301 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _302 from "./gov/v1/tx.rpc.msg";
import * as _303 from "./gov/v1beta1/tx.rpc.msg";
import * as _304 from "./group/v1/tx.rpc.msg";
import * as _305 from "./nft/v1beta1/tx.rpc.msg";
import * as _306 from "./slashing/v1beta1/tx.rpc.msg";
import * as _307 from "./staking/v1beta1/tx.rpc.msg";
import * as _308 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _309 from "./vesting/v1beta1/tx.rpc.msg";
import * as _404 from "./lcd";
import * as _405 from "./rpc.query";
import * as _406 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._278
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._261,
      ..._279
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._233,
      ..._247,
      ..._262,
      ..._280,
      ..._296
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._234,
      ..._248,
      ..._263,
      ..._281,
      ..._297
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._33
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._36
      };
      export const v2alpha1 = {
        ..._37
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._39,
        ..._40
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._41,
        ..._264,
        ..._282
      };
    }
    export const v1beta1 = {
      ..._42
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._43,
      ..._44
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._235,
      ..._249,
      ..._298
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._47
    };
    export namespace hd {
      export const v1 = {
        ..._48
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._49
      };
    }
    export const multisig = {
      ..._50
    };
    export const secp256k1 = {
      ..._51
    };
    export const secp256r1 = {
      ..._52
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._236,
      ..._250,
      ..._265,
      ..._283,
      ..._299
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._237,
      ..._251,
      ..._266,
      ..._284,
      ..._300
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._238,
      ..._252,
      ..._267,
      ..._285,
      ..._301
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._65
    };
  }
  export namespace gov {
    export const v1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._239,
      ..._253,
      ..._268,
      ..._286,
      ..._302
    };
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._240,
      ..._254,
      ..._269,
      ..._287,
      ..._303
    };
  }
  export namespace group {
    export const v1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._241,
      ..._255,
      ..._270,
      ..._288,
      ..._304
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._271,
      ..._289
    };
  }
  export namespace msg {
    export const v1 = {
      ..._82
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._242,
      ..._256,
      ..._272,
      ..._290,
      ..._305
    };
  }
  export namespace orm {
    export const v1 = {
      ..._88
    };
    export const v1alpha1 = {
      ..._89
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._273,
      ..._291
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._243,
      ..._257,
      ..._274,
      ..._292,
      ..._306
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._244,
      ..._258,
      ..._275,
      ..._293,
      ..._307
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._276,
      ..._294
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._245,
      ..._259,
      ..._277,
      ..._295,
      ..._308
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._246,
      ..._260,
      ..._309
    };
  }
  export const ClientFactory = {
    ..._404,
    ..._405,
    ..._406
  };
}