/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Op } from "../../../cosmos/benchmark/v1/benchmark";

export const protobufPackage = "cosmos.benchmark.v1";

/** MsgLoadTestOps defines a message containing a sequence of load test operations. */
export interface MsgLoadTest {
  caller: Uint8Array;
  ops: Op[];
}

/** MsgLoadTestResponse defines a message containing the results of a load test operation. */
export interface MsgLoadTestResponse {
  totalTime: number;
  totalErrors: number;
}

const baseMsgLoadTest: object = {};

export const MsgLoadTest = {
  encode(
    message: MsgLoadTest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.caller.length !== 0) {
      writer.uint32(10).bytes(message.caller);
    }
    for (const v of message.ops) {
      Op.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadTest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLoadTest } as MsgLoadTest;
    message.ops = [];
    message.caller = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caller = reader.bytes();
          break;
        case 2:
          message.ops.push(Op.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadTest {
    const message = { ...baseMsgLoadTest } as MsgLoadTest;
    message.ops = [];
    message.caller = new Uint8Array();
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = bytesFromBase64(object.caller);
    }
    if (object.ops !== undefined && object.ops !== null) {
      for (const e of object.ops) {
        message.ops.push(Op.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgLoadTest): unknown {
    const obj: any = {};
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(
        message.caller !== undefined ? message.caller : new Uint8Array()
      ));
    if (message.ops) {
      obj.ops = message.ops.map((e) => (e ? Op.toJSON(e) : undefined));
    } else {
      obj.ops = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLoadTest>): MsgLoadTest {
    const message = { ...baseMsgLoadTest } as MsgLoadTest;
    message.ops = [];
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    } else {
      message.caller = new Uint8Array();
    }
    if (object.ops !== undefined && object.ops !== null) {
      for (const e of object.ops) {
        message.ops.push(Op.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgLoadTestResponse: object = { totalTime: 0, totalErrors: 0 };

export const MsgLoadTestResponse = {
  encode(
    message: MsgLoadTestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalTime !== 0) {
      writer.uint32(8).uint64(message.totalTime);
    }
    if (message.totalErrors !== 0) {
      writer.uint32(16).uint64(message.totalErrors);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadTestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLoadTestResponse } as MsgLoadTestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalTime = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.totalErrors = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadTestResponse {
    const message = { ...baseMsgLoadTestResponse } as MsgLoadTestResponse;
    if (object.totalTime !== undefined && object.totalTime !== null) {
      message.totalTime = Number(object.totalTime);
    } else {
      message.totalTime = 0;
    }
    if (object.totalErrors !== undefined && object.totalErrors !== null) {
      message.totalErrors = Number(object.totalErrors);
    } else {
      message.totalErrors = 0;
    }
    return message;
  },

  toJSON(message: MsgLoadTestResponse): unknown {
    const obj: any = {};
    message.totalTime !== undefined && (obj.totalTime = message.totalTime);
    message.totalErrors !== undefined &&
      (obj.totalErrors = message.totalErrors);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLoadTestResponse>): MsgLoadTestResponse {
    const message = { ...baseMsgLoadTestResponse } as MsgLoadTestResponse;
    if (object.totalTime !== undefined && object.totalTime !== null) {
      message.totalTime = object.totalTime;
    } else {
      message.totalTime = 0;
    }
    if (object.totalErrors !== undefined && object.totalErrors !== null) {
      message.totalErrors = object.totalErrors;
    } else {
      message.totalErrors = 0;
    }
    return message;
  },
};

/** Msg defines the benchmark Msg service. */
export interface Msg {
  /** LoadTest defines a method for executing a sequence of load test operations. */
  LoadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  LoadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse> {
    const data = MsgLoadTest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.benchmark.v1.Msg",
      "LoadTest",
      data
    );
    return promise.then((data) =>
      MsgLoadTestResponse.decode(new _m0.Reader(data))
    );
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
