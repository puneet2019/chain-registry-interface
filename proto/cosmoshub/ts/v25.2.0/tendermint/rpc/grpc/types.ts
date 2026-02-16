/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResponseCheckTx, ExecTxResult } from "../../../tendermint/abci/types";

export const protobufPackage = "tendermint.rpc.grpc";

export interface RequestPing {}

export interface RequestBroadcastTx {
  tx: Uint8Array;
}

export interface ResponsePing {}

export interface ResponseBroadcastTx {
  checkTx: ResponseCheckTx | undefined;
  txResult: ExecTxResult | undefined;
}

const baseRequestPing: object = {};

export const RequestPing = {
  encode(_: RequestPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestPing } as RequestPing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestPing {
    const message = { ...baseRequestPing } as RequestPing;
    return message;
  },

  toJSON(_: RequestPing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RequestPing>): RequestPing {
    const message = { ...baseRequestPing } as RequestPing;
    return message;
  },
};

const baseRequestBroadcastTx: object = {};

export const RequestBroadcastTx = {
  encode(
    message: RequestBroadcastTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestBroadcastTx } as RequestBroadcastTx;
    message.tx = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestBroadcastTx {
    const message = { ...baseRequestBroadcastTx } as RequestBroadcastTx;
    message.tx = new Uint8Array();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    return message;
  },

  toJSON(message: RequestBroadcastTx): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<RequestBroadcastTx>): RequestBroadcastTx {
    const message = { ...baseRequestBroadcastTx } as RequestBroadcastTx;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = object.tx;
    } else {
      message.tx = new Uint8Array();
    }
    return message;
  },
};

const baseResponsePing: object = {};

export const ResponsePing = {
  encode(
    _: ResponsePing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponsePing } as ResponsePing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponsePing {
    const message = { ...baseResponsePing } as ResponsePing;
    return message;
  },

  toJSON(_: ResponsePing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ResponsePing>): ResponsePing {
    const message = { ...baseResponsePing } as ResponsePing;
    return message;
  },
};

const baseResponseBroadcastTx: object = {};

export const ResponseBroadcastTx = {
  encode(
    message: ResponseBroadcastTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(
        message.checkTx,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.txResult !== undefined) {
      ExecTxResult.encode(message.txResult, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseBroadcastTx } as ResponseBroadcastTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResult = ExecTxResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseBroadcastTx {
    const message = { ...baseResponseBroadcastTx } as ResponseBroadcastTx;
    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = ResponseCheckTx.fromJSON(object.checkTx);
    } else {
      message.checkTx = undefined;
    }
    if (object.txResult !== undefined && object.txResult !== null) {
      message.txResult = ExecTxResult.fromJSON(object.txResult);
    } else {
      message.txResult = undefined;
    }
    return message;
  },

  toJSON(message: ResponseBroadcastTx): unknown {
    const obj: any = {};
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? ResponseCheckTx.toJSON(message.checkTx)
        : undefined);
    message.txResult !== undefined &&
      (obj.txResult = message.txResult
        ? ExecTxResult.toJSON(message.txResult)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseBroadcastTx>): ResponseBroadcastTx {
    const message = { ...baseResponseBroadcastTx } as ResponseBroadcastTx;
    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = ResponseCheckTx.fromPartial(object.checkTx);
    } else {
      message.checkTx = undefined;
    }
    if (object.txResult !== undefined && object.txResult !== null) {
      message.txResult = ExecTxResult.fromPartial(object.txResult);
    } else {
      message.txResult = undefined;
    }
    return message;
  },
};

/**
 * BroadcastAPI
 *
 * Deprecated: This API will be superseded by a more comprehensive gRPC-based
 * broadcast API, and is scheduled for removal after v0.38.
 */
export interface BroadcastAPI {
  Ping(request: RequestPing): Promise<ResponsePing>;
  BroadcastTx(request: RequestBroadcastTx): Promise<ResponseBroadcastTx>;
}

export class BroadcastAPIClientImpl implements BroadcastAPI {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Ping(request: RequestPing): Promise<ResponsePing> {
    const data = RequestPing.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.rpc.grpc.BroadcastAPI",
      "Ping",
      data
    );
    return promise.then((data) => ResponsePing.decode(new _m0.Reader(data)));
  }

  BroadcastTx(request: RequestBroadcastTx): Promise<ResponseBroadcastTx> {
    const data = RequestBroadcastTx.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.rpc.grpc.BroadcastAPI",
      "BroadcastTx",
      data
    );
    return promise.then((data) =>
      ResponseBroadcastTx.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
