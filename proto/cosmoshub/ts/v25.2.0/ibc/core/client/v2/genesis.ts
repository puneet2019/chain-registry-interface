/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CounterpartyInfo } from "../../../../ibc/core/client/v2/counterparty";

export const protobufPackage = "ibc.core.client.v2";

/** GenesisCounterpartyInfo defines the state associating a client with a counterparty. */
export interface GenesisCounterpartyInfo {
  /** ClientId is the ID of the given client. */
  clientId: string;
  /** CounterpartyInfo is the counterparty info of the given client. */
  counterpartyInfo: CounterpartyInfo | undefined;
}

/** GenesisState defines the ibc client v2 submodule's genesis state. */
export interface GenesisState {
  /** counterparty info for each client */
  counterpartyInfos: GenesisCounterpartyInfo[];
}

const baseGenesisCounterpartyInfo: object = { clientId: "" };

export const GenesisCounterpartyInfo = {
  encode(
    message: GenesisCounterpartyInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterpartyInfo !== undefined) {
      CounterpartyInfo.encode(
        message.counterpartyInfo,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisCounterpartyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisCounterpartyInfo,
    } as GenesisCounterpartyInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyInfo = CounterpartyInfo.decode(
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

  fromJSON(object: any): GenesisCounterpartyInfo {
    const message = {
      ...baseGenesisCounterpartyInfo,
    } as GenesisCounterpartyInfo;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (
      object.counterpartyInfo !== undefined &&
      object.counterpartyInfo !== null
    ) {
      message.counterpartyInfo = CounterpartyInfo.fromJSON(
        object.counterpartyInfo
      );
    } else {
      message.counterpartyInfo = undefined;
    }
    return message;
  },

  toJSON(message: GenesisCounterpartyInfo): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterpartyInfo !== undefined &&
      (obj.counterpartyInfo = message.counterpartyInfo
        ? CounterpartyInfo.toJSON(message.counterpartyInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisCounterpartyInfo>
  ): GenesisCounterpartyInfo {
    const message = {
      ...baseGenesisCounterpartyInfo,
    } as GenesisCounterpartyInfo;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = "";
    }
    if (
      object.counterpartyInfo !== undefined &&
      object.counterpartyInfo !== null
    ) {
      message.counterpartyInfo = CounterpartyInfo.fromPartial(
        object.counterpartyInfo
      );
    } else {
      message.counterpartyInfo = undefined;
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
    for (const v of message.counterpartyInfos) {
      GenesisCounterpartyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.counterpartyInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyInfos.push(
            GenesisCounterpartyInfo.decode(reader, reader.uint32())
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
    message.counterpartyInfos = [];
    if (
      object.counterpartyInfos !== undefined &&
      object.counterpartyInfos !== null
    ) {
      for (const e of object.counterpartyInfos) {
        message.counterpartyInfos.push(GenesisCounterpartyInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.counterpartyInfos) {
      obj.counterpartyInfos = message.counterpartyInfos.map((e) =>
        e ? GenesisCounterpartyInfo.toJSON(e) : undefined
      );
    } else {
      obj.counterpartyInfos = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.counterpartyInfos = [];
    if (
      object.counterpartyInfos !== undefined &&
      object.counterpartyInfos !== null
    ) {
      for (const e of object.counterpartyInfos) {
        message.counterpartyInfos.push(GenesisCounterpartyInfo.fromPartial(e));
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
