/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.txfees.v1beta1";

/** Params holds parameters for the txfees module */
export interface Params {
  whitelistedFeeTokenSetters: string[];
  /**
   * fee_swap_intermediary_denom_list is a list of denoms that can be used as
   * intermediary denoms for multi-hop swaps when swapping non-native fee tokens
   */
  feeSwapIntermediaryDenomList: string[];
}

const baseParams: object = {
  whitelistedFeeTokenSetters: "",
  feeSwapIntermediaryDenomList: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.whitelistedFeeTokenSetters) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.feeSwapIntermediaryDenomList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.whitelistedFeeTokenSetters = [];
    message.feeSwapIntermediaryDenomList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedFeeTokenSetters.push(reader.string());
          break;
        case 2:
          message.feeSwapIntermediaryDenomList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.whitelistedFeeTokenSetters = [];
    message.feeSwapIntermediaryDenomList = [];
    if (
      object.whitelistedFeeTokenSetters !== undefined &&
      object.whitelistedFeeTokenSetters !== null
    ) {
      for (const e of object.whitelistedFeeTokenSetters) {
        message.whitelistedFeeTokenSetters.push(String(e));
      }
    }
    if (
      object.feeSwapIntermediaryDenomList !== undefined &&
      object.feeSwapIntermediaryDenomList !== null
    ) {
      for (const e of object.feeSwapIntermediaryDenomList) {
        message.feeSwapIntermediaryDenomList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.whitelistedFeeTokenSetters) {
      obj.whitelistedFeeTokenSetters = message.whitelistedFeeTokenSetters.map(
        (e) => e
      );
    } else {
      obj.whitelistedFeeTokenSetters = [];
    }
    if (message.feeSwapIntermediaryDenomList) {
      obj.feeSwapIntermediaryDenomList = message.feeSwapIntermediaryDenomList.map(
        (e) => e
      );
    } else {
      obj.feeSwapIntermediaryDenomList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.whitelistedFeeTokenSetters = [];
    message.feeSwapIntermediaryDenomList = [];
    if (
      object.whitelistedFeeTokenSetters !== undefined &&
      object.whitelistedFeeTokenSetters !== null
    ) {
      for (const e of object.whitelistedFeeTokenSetters) {
        message.whitelistedFeeTokenSetters.push(e);
      }
    }
    if (
      object.feeSwapIntermediaryDenomList !== undefined &&
      object.feeSwapIntermediaryDenomList !== null
    ) {
      for (const e of object.feeSwapIntermediaryDenomList) {
        message.feeSwapIntermediaryDenomList.push(e);
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
