/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.protocolpool.v1";

/** ContinuousFund defines the fields of continuous fund proposal. */
export interface ContinuousFund {
  /** Recipient is the address string of the account receiving funds. */
  recipient: string;
  /** Percentage is the percentage of funds to be allocated from Community pool. */
  percentage: string;
  /** Optional, if expiry is set, removes the state object when expired. */
  expiry: Date | undefined;
}

/** Params defines the parameters for the protocolpool module. */
export interface Params {
  /**
   * EnabledDistributionDenoms lists the denoms that are allowed to be distributed.
   * This is to avoid spending time distributing undesired tokens to continuous funds and budgets.
   */
  enabledDistributionDenoms: string[];
  /**
   * DistributionFrequency is the frequency (in terms of blocks) that funds are distributed out from the
   * x/protocolpool module.
   */
  distributionFrequency: number;
}

const baseContinuousFund: object = { recipient: "", percentage: "" };

export const ContinuousFund = {
  encode(
    message: ContinuousFund,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.percentage !== "") {
      writer.uint32(18).string(message.percentage);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiry),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContinuousFund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContinuousFund } as ContinuousFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.percentage = reader.string();
          break;
        case 3:
          message.expiry = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContinuousFund {
    const message = { ...baseContinuousFund } as ContinuousFund;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = String(object.percentage);
    } else {
      message.percentage = "";
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = fromJsonTimestamp(object.expiry);
    } else {
      message.expiry = undefined;
    }
    return message;
  },

  toJSON(message: ContinuousFund): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.expiry !== undefined && (obj.expiry = message.expiry.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<ContinuousFund>): ContinuousFund {
    const message = { ...baseContinuousFund } as ContinuousFund;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    } else {
      message.percentage = "";
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = object.expiry;
    } else {
      message.expiry = undefined;
    }
    return message;
  },
};

const baseParams: object = {
  enabledDistributionDenoms: "",
  distributionFrequency: 0,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.enabledDistributionDenoms) {
      writer.uint32(10).string(v!);
    }
    if (message.distributionFrequency !== 0) {
      writer.uint32(16).uint64(message.distributionFrequency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.enabledDistributionDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabledDistributionDenoms.push(reader.string());
          break;
        case 2:
          message.distributionFrequency = longToNumber(reader.uint64() as Long);
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
    message.enabledDistributionDenoms = [];
    if (
      object.enabledDistributionDenoms !== undefined &&
      object.enabledDistributionDenoms !== null
    ) {
      for (const e of object.enabledDistributionDenoms) {
        message.enabledDistributionDenoms.push(String(e));
      }
    }
    if (
      object.distributionFrequency !== undefined &&
      object.distributionFrequency !== null
    ) {
      message.distributionFrequency = Number(object.distributionFrequency);
    } else {
      message.distributionFrequency = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.enabledDistributionDenoms) {
      obj.enabledDistributionDenoms = message.enabledDistributionDenoms.map(
        (e) => e
      );
    } else {
      obj.enabledDistributionDenoms = [];
    }
    message.distributionFrequency !== undefined &&
      (obj.distributionFrequency = message.distributionFrequency);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.enabledDistributionDenoms = [];
    if (
      object.enabledDistributionDenoms !== undefined &&
      object.enabledDistributionDenoms !== null
    ) {
      for (const e of object.enabledDistributionDenoms) {
        message.enabledDistributionDenoms.push(e);
      }
    }
    if (
      object.distributionFrequency !== undefined &&
      object.distributionFrequency !== null
    ) {
      message.distributionFrequency = object.distributionFrequency;
    } else {
      message.distributionFrequency = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
