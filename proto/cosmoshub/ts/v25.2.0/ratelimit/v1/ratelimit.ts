/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "ratelimit.v1";

/**
 * PacketDirection defines whether the transfer packet is being sent from
 * this chain or is being received on this chain
 */
export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}

export function packetDirectionFromJSON(object: any): PacketDirection {
  switch (object) {
    case 0:
    case "PACKET_SEND":
      return PacketDirection.PACKET_SEND;
    case 1:
    case "PACKET_RECV":
      return PacketDirection.PACKET_RECV;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketDirection.UNRECOGNIZED;
  }
}

export function packetDirectionToJSON(object: PacketDirection): string {
  switch (object) {
    case PacketDirection.PACKET_SEND:
      return "PACKET_SEND";
    case PacketDirection.PACKET_RECV:
      return "PACKET_RECV";
    default:
      return "UNKNOWN";
  }
}

/** Path holds the denom and channelID that define the rate limited route */
export interface Path {
  denom: string;
  channelOrClientId: string;
}

/** Quota defines the rate limit thresholds for transfer packets */
export interface Quota {
  /**
   * MaxPercentSend defines the threshold for outflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentSend: string;
  /**
   * MaxPercentSend defines the threshold for inflows
   * The threshold is defined as a percentage (e.g. 10 indicates 10%)
   */
  maxPercentRecv: string;
  /**
   * DurationHours specifies the number of hours before the rate limit
   * is reset (e.g. 24 indicates that the rate limit is reset each day)
   */
  durationHours: number;
}

export interface Flow {
  /**
   * Inflow defines the total amount of inbound transfers for the given
   * rate limit in the current window
   */
  inflow: string;
  /**
   * Outflow defines the total amount of outbound transfers for the given
   * rate limit in the current window
   */
  outflow: string;
  /**
   * ChannelValue stores the total supply of the denom at the start of
   * the rate limit. This is used as the denominator when checking
   * the rate limit threshold
   * The ChannelValue is fixed for the duration of the rate limit window
   */
  channelValue: string;
}

/**
 * RateLimit stores all the context about a given rate limit, including
 * the relevant denom and channel, rate limit thresholds, and current
 * progress towards the limits
 */
export interface RateLimit {
  path: Path | undefined;
  quota: Quota | undefined;
  flow: Flow | undefined;
}

/**
 * WhitelistedAddressPair represents a sender-receiver combo that is
 * not subject to rate limit restrictions
 */
export interface WhitelistedAddressPair {
  sender: string;
  receiver: string;
}

export interface HourEpoch {
  epochNumber: number;
  duration: Duration | undefined;
  epochStartTime: Date | undefined;
  epochStartHeight: number;
}

const basePath: object = { denom: "", channelOrClientId: "" };

export const Path = {
  encode(message: Path, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelOrClientId !== "") {
      writer.uint32(18).string(message.channelOrClientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Path {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePath } as Path;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.channelOrClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Path {
    const message = { ...basePath } as Path;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = String(object.channelOrClientId);
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },

  toJSON(message: Path): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelOrClientId !== undefined &&
      (obj.channelOrClientId = message.channelOrClientId);
    return obj;
  },

  fromPartial(object: DeepPartial<Path>): Path {
    const message = { ...basePath } as Path;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.channelOrClientId !== undefined &&
      object.channelOrClientId !== null
    ) {
      message.channelOrClientId = object.channelOrClientId;
    } else {
      message.channelOrClientId = "";
    }
    return message;
  },
};

const baseQuota: object = {
  maxPercentSend: "",
  maxPercentRecv: "",
  durationHours: 0,
};

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }
    if (message.durationHours !== 0) {
      writer.uint32(24).uint64(message.durationHours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuota } as Quota;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPercentSend = reader.string();
          break;
        case 2:
          message.maxPercentRecv = reader.string();
          break;
        case 3:
          message.durationHours = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quota {
    const message = { ...baseQuota } as Quota;
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = String(object.maxPercentSend);
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = String(object.maxPercentRecv);
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = Number(object.durationHours);
    } else {
      message.durationHours = 0;
    }
    return message;
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};
    message.maxPercentSend !== undefined &&
      (obj.maxPercentSend = message.maxPercentSend);
    message.maxPercentRecv !== undefined &&
      (obj.maxPercentRecv = message.maxPercentRecv);
    message.durationHours !== undefined &&
      (obj.durationHours = message.durationHours);
    return obj;
  },

  fromPartial(object: DeepPartial<Quota>): Quota {
    const message = { ...baseQuota } as Quota;
    if (object.maxPercentSend !== undefined && object.maxPercentSend !== null) {
      message.maxPercentSend = object.maxPercentSend;
    } else {
      message.maxPercentSend = "";
    }
    if (object.maxPercentRecv !== undefined && object.maxPercentRecv !== null) {
      message.maxPercentRecv = object.maxPercentRecv;
    } else {
      message.maxPercentRecv = "";
    }
    if (object.durationHours !== undefined && object.durationHours !== null) {
      message.durationHours = object.durationHours;
    } else {
      message.durationHours = 0;
    }
    return message;
  },
};

const baseFlow: object = { inflow: "", outflow: "", channelValue: "" };

export const Flow = {
  encode(message: Flow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflow !== "") {
      writer.uint32(10).string(message.inflow);
    }
    if (message.outflow !== "") {
      writer.uint32(18).string(message.outflow);
    }
    if (message.channelValue !== "") {
      writer.uint32(26).string(message.channelValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Flow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFlow } as Flow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflow = reader.string();
          break;
        case 2:
          message.outflow = reader.string();
          break;
        case 3:
          message.channelValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Flow {
    const message = { ...baseFlow } as Flow;
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = String(object.inflow);
    } else {
      message.inflow = "";
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = String(object.outflow);
    } else {
      message.outflow = "";
    }
    if (object.channelValue !== undefined && object.channelValue !== null) {
      message.channelValue = String(object.channelValue);
    } else {
      message.channelValue = "";
    }
    return message;
  },

  toJSON(message: Flow): unknown {
    const obj: any = {};
    message.inflow !== undefined && (obj.inflow = message.inflow);
    message.outflow !== undefined && (obj.outflow = message.outflow);
    message.channelValue !== undefined &&
      (obj.channelValue = message.channelValue);
    return obj;
  },

  fromPartial(object: DeepPartial<Flow>): Flow {
    const message = { ...baseFlow } as Flow;
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = object.inflow;
    } else {
      message.inflow = "";
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = object.outflow;
    } else {
      message.outflow = "";
    }
    if (object.channelValue !== undefined && object.channelValue !== null) {
      message.channelValue = object.channelValue;
    } else {
      message.channelValue = "";
    }
    return message;
  },
};

const baseRateLimit: object = {};

export const RateLimit = {
  encode(
    message: RateLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== undefined) {
      Path.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(18).fork()).ldelim();
    }
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRateLimit } as RateLimit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = Path.decode(reader, reader.uint32());
          break;
        case 2:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 3:
          message.flow = Flow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RateLimit {
    const message = { ...baseRateLimit } as RateLimit;
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromJSON(object.path);
    } else {
      message.path = undefined;
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromJSON(object.quota);
    } else {
      message.quota = undefined;
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromJSON(object.flow);
    } else {
      message.flow = undefined;
    }
    return message;
  },

  toJSON(message: RateLimit): unknown {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = message.path ? Path.toJSON(message.path) : undefined);
    message.quota !== undefined &&
      (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.flow !== undefined &&
      (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RateLimit>): RateLimit {
    const message = { ...baseRateLimit } as RateLimit;
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromPartial(object.path);
    } else {
      message.path = undefined;
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromPartial(object.quota);
    } else {
      message.quota = undefined;
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromPartial(object.flow);
    } else {
      message.flow = undefined;
    }
    return message;
  },
};

const baseWhitelistedAddressPair: object = { sender: "", receiver: "" };

export const WhitelistedAddressPair = {
  encode(
    message: WhitelistedAddressPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WhitelistedAddressPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhitelistedAddressPair } as WhitelistedAddressPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistedAddressPair {
    const message = { ...baseWhitelistedAddressPair } as WhitelistedAddressPair;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: WhitelistedAddressPair): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WhitelistedAddressPair>
  ): WhitelistedAddressPair {
    const message = { ...baseWhitelistedAddressPair } as WhitelistedAddressPair;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseHourEpoch: object = { epochNumber: 0, epochStartHeight: 0 };

export const HourEpoch = {
  encode(
    message: HourEpoch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochNumber !== 0) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.epochStartTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.epochStartHeight !== 0) {
      writer.uint32(32).int64(message.epochStartHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HourEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHourEpoch } as HourEpoch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.epochStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.epochStartHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HourEpoch {
    const message = { ...baseHourEpoch } as HourEpoch;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Number(object.epochNumber);
    } else {
      message.epochNumber = 0;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.epochStartTime !== undefined && object.epochStartTime !== null) {
      message.epochStartTime = fromJsonTimestamp(object.epochStartTime);
    } else {
      message.epochStartTime = undefined;
    }
    if (
      object.epochStartHeight !== undefined &&
      object.epochStartHeight !== null
    ) {
      message.epochStartHeight = Number(object.epochStartHeight);
    } else {
      message.epochStartHeight = 0;
    }
    return message;
  },

  toJSON(message: HourEpoch): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = message.epochNumber);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.epochStartTime !== undefined &&
      (obj.epochStartTime = message.epochStartTime.toISOString());
    message.epochStartHeight !== undefined &&
      (obj.epochStartHeight = message.epochStartHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<HourEpoch>): HourEpoch {
    const message = { ...baseHourEpoch } as HourEpoch;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber;
    } else {
      message.epochNumber = 0;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.epochStartTime !== undefined && object.epochStartTime !== null) {
      message.epochStartTime = object.epochStartTime;
    } else {
      message.epochStartTime = undefined;
    }
    if (
      object.epochStartHeight !== undefined &&
      object.epochStartHeight !== null
    ) {
      message.epochStartHeight = object.epochStartHeight;
    } else {
      message.epochStartHeight = 0;
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
