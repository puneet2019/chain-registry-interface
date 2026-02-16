/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";

export const protobufPackage = "feemarket.feemarket.v1";

/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /**
   * Params are the parameters for the feemarket module. These parameters
   * can be utilized to implement both the base EIP-1559 fee market and
   * and the AIMD EIP-1559 fee market.
   */
  params: Params | undefined;
  /** State contains the current state of the AIMD fee market. */
  state: State | undefined;
}

/**
 * State is utilized to track the current state of the fee market. This includes
 * the current base fee, learning rate, and block utilization within the
 * specified AIMD window.
 */
export interface State {
  /**
   * BaseGasPrice is the current base fee. This is denominated in the fee per
   * gas unit.
   */
  baseGasPrice: string;
  /** LearningRate is the current learning rate. */
  learningRate: string;
  /**
   * Window contains a list of the last blocks' utilization values. This is used
   * to calculate the next base fee. This stores the number of units of gas
   * consumed per block.
   */
  window: number[];
  /** Index is the index of the current block in the block utilization window. */
  index: number;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = State.decode(reader, reader.uint32());
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
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.state !== undefined &&
      (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },
};

const baseState: object = {
  baseGasPrice: "",
  learningRate: "",
  window: 0,
  index: 0,
};

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseGasPrice !== "") {
      writer.uint32(10).string(message.baseGasPrice);
    }
    if (message.learningRate !== "") {
      writer.uint32(18).string(message.learningRate);
    }
    writer.uint32(26).fork();
    for (const v of message.window) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.index !== 0) {
      writer.uint32(32).uint64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseState } as State;
    message.window = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseGasPrice = reader.string();
          break;
        case 2:
          message.learningRate = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.window.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.window.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): State {
    const message = { ...baseState } as State;
    message.window = [];
    if (object.baseGasPrice !== undefined && object.baseGasPrice !== null) {
      message.baseGasPrice = String(object.baseGasPrice);
    } else {
      message.baseGasPrice = "";
    }
    if (object.learningRate !== undefined && object.learningRate !== null) {
      message.learningRate = String(object.learningRate);
    } else {
      message.learningRate = "";
    }
    if (object.window !== undefined && object.window !== null) {
      for (const e of object.window) {
        message.window.push(Number(e));
      }
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    return message;
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.baseGasPrice !== undefined &&
      (obj.baseGasPrice = message.baseGasPrice);
    message.learningRate !== undefined &&
      (obj.learningRate = message.learningRate);
    if (message.window) {
      obj.window = message.window.map((e) => e);
    } else {
      obj.window = [];
    }
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<State>): State {
    const message = { ...baseState } as State;
    message.window = [];
    if (object.baseGasPrice !== undefined && object.baseGasPrice !== null) {
      message.baseGasPrice = object.baseGasPrice;
    } else {
      message.baseGasPrice = "";
    }
    if (object.learningRate !== undefined && object.learningRate !== null) {
      message.learningRate = object.learningRate;
    } else {
      message.learningRate = "";
    }
    if (object.window !== undefined && object.window !== null) {
      for (const e of object.window) {
        message.window.push(e);
      }
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
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
