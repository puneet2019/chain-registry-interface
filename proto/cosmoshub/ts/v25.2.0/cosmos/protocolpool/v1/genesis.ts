/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ContinuousFund, Params } from "../../../cosmos/protocolpool/v1/types";

export const protobufPackage = "cosmos.protocolpool.v1";

/** GenesisState defines the protocolpool module's genesis state. */
export interface GenesisState {
  /** ContinuousFunds defines the continuous funds at genesis. */
  continuousFunds: ContinuousFund[];
  /**
   * Params defines the parameters of this module, currently only contains the
   * denoms that will be used for continuous fund distributions.
   */
  params: Params | undefined;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.continuousFunds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFunds.push(
            ContinuousFund.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.continuousFunds = [];
    if (
      object.continuousFunds !== undefined &&
      object.continuousFunds !== null
    ) {
      for (const e of object.continuousFunds) {
        message.continuousFunds.push(ContinuousFund.fromJSON(e));
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuousFunds = message.continuousFunds.map((e) =>
        e ? ContinuousFund.toJSON(e) : undefined
      );
    } else {
      obj.continuousFunds = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.continuousFunds = [];
    if (
      object.continuousFunds !== undefined &&
      object.continuousFunds !== null
    ) {
      for (const e of object.continuousFunds) {
        message.continuousFunds.push(ContinuousFund.fromPartial(e));
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
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
