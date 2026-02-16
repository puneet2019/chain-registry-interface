/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../ratelimit/v1/params";
import {
  RateLimit,
  WhitelistedAddressPair,
  HourEpoch,
} from "../../ratelimit/v1/ratelimit";

export const protobufPackage = "ratelimit.v1";

/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  rateLimits: RateLimit[];
  whitelistedAddressPairs: WhitelistedAddressPair[];
  blacklistedDenoms: string[];
  pendingSendPacketSequenceNumbers: string[];
  hourEpoch: HourEpoch | undefined;
}

const baseGenesisState: object = {
  blacklistedDenoms: "",
  pendingSendPacketSequenceNumbers: "",
};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.whitelistedAddressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.blacklistedDenoms) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.pendingSendPacketSequenceNumbers) {
      writer.uint32(42).string(v!);
    }
    if (message.hourEpoch !== undefined) {
      HourEpoch.encode(message.hourEpoch, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.rateLimits = [];
    message.whitelistedAddressPairs = [];
    message.blacklistedDenoms = [];
    message.pendingSendPacketSequenceNumbers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.whitelistedAddressPairs.push(
            WhitelistedAddressPair.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.blacklistedDenoms.push(reader.string());
          break;
        case 5:
          message.pendingSendPacketSequenceNumbers.push(reader.string());
          break;
        case 6:
          message.hourEpoch = HourEpoch.decode(reader, reader.uint32());
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
    message.rateLimits = [];
    message.whitelistedAddressPairs = [];
    message.blacklistedDenoms = [];
    message.pendingSendPacketSequenceNumbers = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromJSON(e));
      }
    }
    if (
      object.whitelistedAddressPairs !== undefined &&
      object.whitelistedAddressPairs !== null
    ) {
      for (const e of object.whitelistedAddressPairs) {
        message.whitelistedAddressPairs.push(
          WhitelistedAddressPair.fromJSON(e)
        );
      }
    }
    if (
      object.blacklistedDenoms !== undefined &&
      object.blacklistedDenoms !== null
    ) {
      for (const e of object.blacklistedDenoms) {
        message.blacklistedDenoms.push(String(e));
      }
    }
    if (
      object.pendingSendPacketSequenceNumbers !== undefined &&
      object.pendingSendPacketSequenceNumbers !== null
    ) {
      for (const e of object.pendingSendPacketSequenceNumbers) {
        message.pendingSendPacketSequenceNumbers.push(String(e));
      }
    }
    if (object.hourEpoch !== undefined && object.hourEpoch !== null) {
      message.hourEpoch = HourEpoch.fromJSON(object.hourEpoch);
    } else {
      message.hourEpoch = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.rateLimits) {
      obj.rateLimits = message.rateLimits.map((e) =>
        e ? RateLimit.toJSON(e) : undefined
      );
    } else {
      obj.rateLimits = [];
    }
    if (message.whitelistedAddressPairs) {
      obj.whitelistedAddressPairs = message.whitelistedAddressPairs.map((e) =>
        e ? WhitelistedAddressPair.toJSON(e) : undefined
      );
    } else {
      obj.whitelistedAddressPairs = [];
    }
    if (message.blacklistedDenoms) {
      obj.blacklistedDenoms = message.blacklistedDenoms.map((e) => e);
    } else {
      obj.blacklistedDenoms = [];
    }
    if (message.pendingSendPacketSequenceNumbers) {
      obj.pendingSendPacketSequenceNumbers = message.pendingSendPacketSequenceNumbers.map(
        (e) => e
      );
    } else {
      obj.pendingSendPacketSequenceNumbers = [];
    }
    message.hourEpoch !== undefined &&
      (obj.hourEpoch = message.hourEpoch
        ? HourEpoch.toJSON(message.hourEpoch)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.rateLimits = [];
    message.whitelistedAddressPairs = [];
    message.blacklistedDenoms = [];
    message.pendingSendPacketSequenceNumbers = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.rateLimits !== undefined && object.rateLimits !== null) {
      for (const e of object.rateLimits) {
        message.rateLimits.push(RateLimit.fromPartial(e));
      }
    }
    if (
      object.whitelistedAddressPairs !== undefined &&
      object.whitelistedAddressPairs !== null
    ) {
      for (const e of object.whitelistedAddressPairs) {
        message.whitelistedAddressPairs.push(
          WhitelistedAddressPair.fromPartial(e)
        );
      }
    }
    if (
      object.blacklistedDenoms !== undefined &&
      object.blacklistedDenoms !== null
    ) {
      for (const e of object.blacklistedDenoms) {
        message.blacklistedDenoms.push(e);
      }
    }
    if (
      object.pendingSendPacketSequenceNumbers !== undefined &&
      object.pendingSendPacketSequenceNumbers !== null
    ) {
      for (const e of object.pendingSendPacketSequenceNumbers) {
        message.pendingSendPacketSequenceNumbers.push(e);
      }
    }
    if (object.hourEpoch !== undefined && object.hourEpoch !== null) {
      message.hourEpoch = HourEpoch.fromPartial(object.hourEpoch);
    } else {
      message.hourEpoch = undefined;
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
