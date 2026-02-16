/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Message } from "../../tendermint/consensus/types";
import { Duration } from "../../google/protobuf/duration";
import { EventDataRoundState } from "../../tendermint/types/events";

export const protobufPackage = "tendermint.consensus";

/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
  msg: Message | undefined;
  peerId: string;
}

/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
  duration: Duration | undefined;
  height: number;
  round: number;
  step: number;
}

/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
  height: number;
}

export interface WALMessage {
  eventDataRoundState: EventDataRoundState | undefined;
  msgInfo: MsgInfo | undefined;
  timeoutInfo: TimeoutInfo | undefined;
  endHeight: EndHeight | undefined;
}

/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
  time: Date | undefined;
  msg: WALMessage | undefined;
}

const baseMsgInfo: object = { peerId: "" };

export const MsgInfo = {
  encode(
    message: MsgInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== undefined) {
      Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInfo } as MsgInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = Message.decode(reader, reader.uint32());
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInfo {
    const message = { ...baseMsgInfo } as MsgInfo;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Message.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    return message;
  },

  toJSON(message: MsgInfo): unknown {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? Message.toJSON(message.msg) : undefined);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInfo>): MsgInfo {
    const message = { ...baseMsgInfo } as MsgInfo;
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Message.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    return message;
  },
};

const baseTimeoutInfo: object = { height: 0, round: 0, step: 0 };

export const TimeoutInfo = {
  encode(
    message: TimeoutInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimeoutInfo } as TimeoutInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.step = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeoutInfo {
    const message = { ...baseTimeoutInfo } as TimeoutInfo;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = Number(object.step);
    } else {
      message.step = 0;
    }
    return message;
  },

  toJSON(message: TimeoutInfo): unknown {
    const obj: any = {};
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.step !== undefined && (obj.step = message.step);
    return obj;
  },

  fromPartial(object: DeepPartial<TimeoutInfo>): TimeoutInfo {
    const message = { ...baseTimeoutInfo } as TimeoutInfo;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = object.step;
    } else {
      message.step = 0;
    }
    return message;
  },
};

const baseEndHeight: object = { height: 0 };

export const EndHeight = {
  encode(
    message: EndHeight,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndHeight } as EndHeight;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EndHeight {
    const message = { ...baseEndHeight } as EndHeight;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: EndHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<EndHeight>): EndHeight {
    const message = { ...baseEndHeight } as EndHeight;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseWALMessage: object = {};

export const WALMessage = {
  encode(
    message: WALMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eventDataRoundState !== undefined) {
      EventDataRoundState.encode(
        message.eventDataRoundState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.msgInfo !== undefined) {
      MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeoutInfo !== undefined) {
      TimeoutInfo.encode(
        message.timeoutInfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.endHeight !== undefined) {
      EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWALMessage } as WALMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventDataRoundState = EventDataRoundState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.msgInfo = MsgInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.timeoutInfo = TimeoutInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.endHeight = EndHeight.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WALMessage {
    const message = { ...baseWALMessage } as WALMessage;
    if (
      object.eventDataRoundState !== undefined &&
      object.eventDataRoundState !== null
    ) {
      message.eventDataRoundState = EventDataRoundState.fromJSON(
        object.eventDataRoundState
      );
    } else {
      message.eventDataRoundState = undefined;
    }
    if (object.msgInfo !== undefined && object.msgInfo !== null) {
      message.msgInfo = MsgInfo.fromJSON(object.msgInfo);
    } else {
      message.msgInfo = undefined;
    }
    if (object.timeoutInfo !== undefined && object.timeoutInfo !== null) {
      message.timeoutInfo = TimeoutInfo.fromJSON(object.timeoutInfo);
    } else {
      message.timeoutInfo = undefined;
    }
    if (object.endHeight !== undefined && object.endHeight !== null) {
      message.endHeight = EndHeight.fromJSON(object.endHeight);
    } else {
      message.endHeight = undefined;
    }
    return message;
  },

  toJSON(message: WALMessage): unknown {
    const obj: any = {};
    message.eventDataRoundState !== undefined &&
      (obj.eventDataRoundState = message.eventDataRoundState
        ? EventDataRoundState.toJSON(message.eventDataRoundState)
        : undefined);
    message.msgInfo !== undefined &&
      (obj.msgInfo = message.msgInfo
        ? MsgInfo.toJSON(message.msgInfo)
        : undefined);
    message.timeoutInfo !== undefined &&
      (obj.timeoutInfo = message.timeoutInfo
        ? TimeoutInfo.toJSON(message.timeoutInfo)
        : undefined);
    message.endHeight !== undefined &&
      (obj.endHeight = message.endHeight
        ? EndHeight.toJSON(message.endHeight)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WALMessage>): WALMessage {
    const message = { ...baseWALMessage } as WALMessage;
    if (
      object.eventDataRoundState !== undefined &&
      object.eventDataRoundState !== null
    ) {
      message.eventDataRoundState = EventDataRoundState.fromPartial(
        object.eventDataRoundState
      );
    } else {
      message.eventDataRoundState = undefined;
    }
    if (object.msgInfo !== undefined && object.msgInfo !== null) {
      message.msgInfo = MsgInfo.fromPartial(object.msgInfo);
    } else {
      message.msgInfo = undefined;
    }
    if (object.timeoutInfo !== undefined && object.timeoutInfo !== null) {
      message.timeoutInfo = TimeoutInfo.fromPartial(object.timeoutInfo);
    } else {
      message.timeoutInfo = undefined;
    }
    if (object.endHeight !== undefined && object.endHeight !== null) {
      message.endHeight = EndHeight.fromPartial(object.endHeight);
    } else {
      message.endHeight = undefined;
    }
    return message;
  },
};

const baseTimedWALMessage: object = {};

export const TimedWALMessage = {
  encode(
    message: TimedWALMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimedWALMessage } as TimedWALMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.msg = WALMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimedWALMessage {
    const message = { ...baseTimedWALMessage } as TimedWALMessage;
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = WALMessage.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: TimedWALMessage): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.msg !== undefined &&
      (obj.msg = message.msg ? WALMessage.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TimedWALMessage>): TimedWALMessage {
    const message = { ...baseTimedWALMessage } as TimedWALMessage;
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = undefined;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = WALMessage.fromPartial(object.msg);
    } else {
      message.msg = undefined;
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
