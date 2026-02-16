/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { TwapRecord } from "../../../osmosis/twap/v1beta1/twap_record";

export const protobufPackage = "osmosis.twap.v1beta1";

/** Params holds parameters for the twap module */
export interface Params {
  pruneEpochIdentifier: string;
  recordHistoryKeepPeriod: Duration | undefined;
}

/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  /** twaps is the collection of all twap records. */
  twaps: TwapRecord[];
  /** params is the container of twap parameters. */
  params: Params | undefined;
}

const baseParams: object = { pruneEpochIdentifier: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pruneEpochIdentifier !== "") {
      writer.uint32(10).string(message.pruneEpochIdentifier);
    }
    if (message.recordHistoryKeepPeriod !== undefined) {
      Duration.encode(
        message.recordHistoryKeepPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruneEpochIdentifier = reader.string();
          break;
        case 2:
          message.recordHistoryKeepPeriod = Duration.decode(
            reader,
            reader.uint32()
          );
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
    if (
      object.pruneEpochIdentifier !== undefined &&
      object.pruneEpochIdentifier !== null
    ) {
      message.pruneEpochIdentifier = String(object.pruneEpochIdentifier);
    } else {
      message.pruneEpochIdentifier = "";
    }
    if (
      object.recordHistoryKeepPeriod !== undefined &&
      object.recordHistoryKeepPeriod !== null
    ) {
      message.recordHistoryKeepPeriod = Duration.fromJSON(
        object.recordHistoryKeepPeriod
      );
    } else {
      message.recordHistoryKeepPeriod = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.pruneEpochIdentifier !== undefined &&
      (obj.pruneEpochIdentifier = message.pruneEpochIdentifier);
    message.recordHistoryKeepPeriod !== undefined &&
      (obj.recordHistoryKeepPeriod = message.recordHistoryKeepPeriod
        ? Duration.toJSON(message.recordHistoryKeepPeriod)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.pruneEpochIdentifier !== undefined &&
      object.pruneEpochIdentifier !== null
    ) {
      message.pruneEpochIdentifier = object.pruneEpochIdentifier;
    } else {
      message.pruneEpochIdentifier = "";
    }
    if (
      object.recordHistoryKeepPeriod !== undefined &&
      object.recordHistoryKeepPeriod !== null
    ) {
      message.recordHistoryKeepPeriod = Duration.fromPartial(
        object.recordHistoryKeepPeriod
      );
    } else {
      message.recordHistoryKeepPeriod = undefined;
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
    for (const v of message.twaps) {
      TwapRecord.encode(v!, writer.uint32(10).fork()).ldelim();
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
    message.twaps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twaps.push(TwapRecord.decode(reader, reader.uint32()));
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
    message.twaps = [];
    if (object.twaps !== undefined && object.twaps !== null) {
      for (const e of object.twaps) {
        message.twaps.push(TwapRecord.fromJSON(e));
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
    if (message.twaps) {
      obj.twaps = message.twaps.map((e) =>
        e ? TwapRecord.toJSON(e) : undefined
      );
    } else {
      obj.twaps = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.twaps = [];
    if (object.twaps !== undefined && object.twaps !== null) {
      for (const e of object.twaps) {
        message.twaps.push(TwapRecord.fromPartial(e));
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
