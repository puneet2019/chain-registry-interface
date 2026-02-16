/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Downtime,
  downtimeFromJSON,
  downtimeToJSON,
} from "../../../osmosis/downtimedetector/v1beta1/downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "osmosis.downtimedetector.v1beta1";

export interface GenesisDowntimeEntry {
  duration: Downtime;
  lastDowntime: Date | undefined;
}

/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  lastBlockTime: Date | undefined;
}

const baseGenesisDowntimeEntry: object = { duration: 0 };

export const GenesisDowntimeEntry = {
  encode(
    message: GenesisDowntimeEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.lastDowntime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastDowntime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisDowntimeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisDowntimeEntry } as GenesisDowntimeEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32() as any;
          break;
        case 2:
          message.lastDowntime = fromTimestamp(
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

  fromJSON(object: any): GenesisDowntimeEntry {
    const message = { ...baseGenesisDowntimeEntry } as GenesisDowntimeEntry;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = downtimeFromJSON(object.duration);
    } else {
      message.duration = 0;
    }
    if (object.lastDowntime !== undefined && object.lastDowntime !== null) {
      message.lastDowntime = fromJsonTimestamp(object.lastDowntime);
    } else {
      message.lastDowntime = undefined;
    }
    return message;
  },

  toJSON(message: GenesisDowntimeEntry): unknown {
    const obj: any = {};
    message.duration !== undefined &&
      (obj.duration = downtimeToJSON(message.duration));
    message.lastDowntime !== undefined &&
      (obj.lastDowntime = message.lastDowntime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisDowntimeEntry>): GenesisDowntimeEntry {
    const message = { ...baseGenesisDowntimeEntry } as GenesisDowntimeEntry;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
    }
    if (object.lastDowntime !== undefined && object.lastDowntime !== null) {
      message.lastDowntime = object.lastDowntime;
    } else {
      message.lastDowntime = undefined;
    }
    return message;
  },
};

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastBlockTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.downtimes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimes.push(
            GenesisDowntimeEntry.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.lastBlockTime = fromTimestamp(
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.downtimes = [];
    if (object.downtimes !== undefined && object.downtimes !== null) {
      for (const e of object.downtimes) {
        message.downtimes.push(GenesisDowntimeEntry.fromJSON(e));
      }
    }
    if (object.lastBlockTime !== undefined && object.lastBlockTime !== null) {
      message.lastBlockTime = fromJsonTimestamp(object.lastBlockTime);
    } else {
      message.lastBlockTime = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map((e) =>
        e ? GenesisDowntimeEntry.toJSON(e) : undefined
      );
    } else {
      obj.downtimes = [];
    }
    message.lastBlockTime !== undefined &&
      (obj.lastBlockTime = message.lastBlockTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.downtimes = [];
    if (object.downtimes !== undefined && object.downtimes !== null) {
      for (const e of object.downtimes) {
        message.downtimes.push(GenesisDowntimeEntry.fromPartial(e));
      }
    }
    if (object.lastBlockTime !== undefined && object.lastBlockTime !== null) {
      message.lastBlockTime = object.lastBlockTime;
    } else {
      message.lastBlockTime = undefined;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
