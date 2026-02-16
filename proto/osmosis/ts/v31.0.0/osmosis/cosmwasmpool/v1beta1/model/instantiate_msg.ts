/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";

/** ===================== InstantiateMsg */
export interface InstantiateMsg {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  poolAssetDenoms: string[];
}

const baseInstantiateMsg: object = { poolAssetDenoms: "" };

export const InstantiateMsg = {
  encode(
    message: InstantiateMsg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolAssetDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstantiateMsg } as InstantiateMsg;
    message.poolAssetDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolAssetDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstantiateMsg {
    const message = { ...baseInstantiateMsg } as InstantiateMsg;
    message.poolAssetDenoms = [];
    if (
      object.poolAssetDenoms !== undefined &&
      object.poolAssetDenoms !== null
    ) {
      for (const e of object.poolAssetDenoms) {
        message.poolAssetDenoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: InstantiateMsg): unknown {
    const obj: any = {};
    if (message.poolAssetDenoms) {
      obj.poolAssetDenoms = message.poolAssetDenoms.map((e) => e);
    } else {
      obj.poolAssetDenoms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<InstantiateMsg>): InstantiateMsg {
    const message = { ...baseInstantiateMsg } as InstantiateMsg;
    message.poolAssetDenoms = [];
    if (
      object.poolAssetDenoms !== undefined &&
      object.poolAssetDenoms !== null
    ) {
      for (const e of object.poolAssetDenoms) {
        message.poolAssetDenoms.push(e);
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
