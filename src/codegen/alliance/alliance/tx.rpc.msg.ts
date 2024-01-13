import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgDelegate, MsgDelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgClaimDelegationRewards, MsgClaimDelegationRewardsResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateAlliance, MsgCreateAllianceResponse, MsgUpdateAlliance, MsgUpdateAllianceResponse, MsgDeleteAlliance, MsgDeleteAllianceResponse } from "./tx";
export interface Msg {
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  claimDelegationRewards(request: MsgClaimDelegationRewards): Promise<MsgClaimDelegationRewardsResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createAlliance(request: MsgCreateAlliance): Promise<MsgCreateAllianceResponse>;
  updateAlliance(request: MsgUpdateAlliance): Promise<MsgUpdateAllianceResponse>;
  deleteAlliance(request: MsgDeleteAlliance): Promise<MsgDeleteAllianceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.delegate = this.delegate.bind(this);
    this.redelegate = this.redelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.claimDelegationRewards = this.claimDelegationRewards.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.createAlliance = this.createAlliance.bind(this);
    this.updateAlliance = this.updateAlliance.bind(this);
    this.deleteAlliance = this.deleteAlliance.bind(this);
  }
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new BinaryReader(data)));
  }
  redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse> {
    const data = MsgRedelegate.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "Redelegate", data);
    return promise.then(data => MsgRedelegateResponse.decode(new BinaryReader(data)));
  }
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new BinaryReader(data)));
  }
  claimDelegationRewards(request: MsgClaimDelegationRewards): Promise<MsgClaimDelegationRewardsResponse> {
    const data = MsgClaimDelegationRewards.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "ClaimDelegationRewards", data);
    return promise.then(data => MsgClaimDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createAlliance(request: MsgCreateAlliance): Promise<MsgCreateAllianceResponse> {
    const data = MsgCreateAlliance.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "CreateAlliance", data);
    return promise.then(data => MsgCreateAllianceResponse.decode(new BinaryReader(data)));
  }
  updateAlliance(request: MsgUpdateAlliance): Promise<MsgUpdateAllianceResponse> {
    const data = MsgUpdateAlliance.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "UpdateAlliance", data);
    return promise.then(data => MsgUpdateAllianceResponse.decode(new BinaryReader(data)));
  }
  deleteAlliance(request: MsgDeleteAlliance): Promise<MsgDeleteAllianceResponse> {
    const data = MsgDeleteAlliance.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Msg", "DeleteAlliance", data);
    return promise.then(data => MsgDeleteAllianceResponse.decode(new BinaryReader(data)));
  }
}