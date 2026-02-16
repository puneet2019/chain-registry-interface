/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.ingest.v1beta1";

/** PoolData represents a structure encapsulating an Osmosis liquidity pool. */
export interface PoolData {
  /** ChainModel is the chain representation model of the pool. */
  chainModel: Uint8Array;
  /** SqsModel is additional pool data used by the sidecar query server. */
  sqsModel: Uint8Array;
  /**
   * TickModel is the tick data of a concentrated liquidity pool.
   * This field is only valid and set for concentrated pools. It is nil
   * otherwise.
   */
  tickModel: Uint8Array;
}

/**
 * The block process request.
 * Sends taker fees, block height and pools.
 */
export interface ProcessBlockRequest {
  /** block height is the height of the block being processed. */
  blockHeight: number;
  /** taker_fees_map is the map of taker fees for the block. */
  takerFeesMap: Uint8Array;
  /** pools in the block. */
  pools: PoolData[];
}

/** The response after completing the block processing. */
export interface ProcessBlockReply {}

const basePoolData: object = {};

export const PoolData = {
  encode(
    message: PoolData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainModel.length !== 0) {
      writer.uint32(10).bytes(message.chainModel);
    }
    if (message.sqsModel.length !== 0) {
      writer.uint32(18).bytes(message.sqsModel);
    }
    if (message.tickModel.length !== 0) {
      writer.uint32(26).bytes(message.tickModel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolData } as PoolData;
    message.chainModel = new Uint8Array();
    message.sqsModel = new Uint8Array();
    message.tickModel = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainModel = reader.bytes();
          break;
        case 2:
          message.sqsModel = reader.bytes();
          break;
        case 3:
          message.tickModel = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolData {
    const message = { ...basePoolData } as PoolData;
    message.chainModel = new Uint8Array();
    message.sqsModel = new Uint8Array();
    message.tickModel = new Uint8Array();
    if (object.chainModel !== undefined && object.chainModel !== null) {
      message.chainModel = bytesFromBase64(object.chainModel);
    }
    if (object.sqsModel !== undefined && object.sqsModel !== null) {
      message.sqsModel = bytesFromBase64(object.sqsModel);
    }
    if (object.tickModel !== undefined && object.tickModel !== null) {
      message.tickModel = bytesFromBase64(object.tickModel);
    }
    return message;
  },

  toJSON(message: PoolData): unknown {
    const obj: any = {};
    message.chainModel !== undefined &&
      (obj.chainModel = base64FromBytes(
        message.chainModel !== undefined ? message.chainModel : new Uint8Array()
      ));
    message.sqsModel !== undefined &&
      (obj.sqsModel = base64FromBytes(
        message.sqsModel !== undefined ? message.sqsModel : new Uint8Array()
      ));
    message.tickModel !== undefined &&
      (obj.tickModel = base64FromBytes(
        message.tickModel !== undefined ? message.tickModel : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<PoolData>): PoolData {
    const message = { ...basePoolData } as PoolData;
    if (object.chainModel !== undefined && object.chainModel !== null) {
      message.chainModel = object.chainModel;
    } else {
      message.chainModel = new Uint8Array();
    }
    if (object.sqsModel !== undefined && object.sqsModel !== null) {
      message.sqsModel = object.sqsModel;
    } else {
      message.sqsModel = new Uint8Array();
    }
    if (object.tickModel !== undefined && object.tickModel !== null) {
      message.tickModel = object.tickModel;
    } else {
      message.tickModel = new Uint8Array();
    }
    return message;
  },
};

const baseProcessBlockRequest: object = { blockHeight: 0 };

export const ProcessBlockRequest = {
  encode(
    message: ProcessBlockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.takerFeesMap.length !== 0) {
      writer.uint32(18).bytes(message.takerFeesMap);
    }
    for (const v of message.pools) {
      PoolData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessBlockRequest } as ProcessBlockRequest;
    message.pools = [];
    message.takerFeesMap = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.takerFeesMap = reader.bytes();
          break;
        case 3:
          message.pools.push(PoolData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessBlockRequest {
    const message = { ...baseProcessBlockRequest } as ProcessBlockRequest;
    message.pools = [];
    message.takerFeesMap = new Uint8Array();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.takerFeesMap !== undefined && object.takerFeesMap !== null) {
      message.takerFeesMap = bytesFromBase64(object.takerFeesMap);
    }
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(PoolData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ProcessBlockRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.takerFeesMap !== undefined &&
      (obj.takerFeesMap = base64FromBytes(
        message.takerFeesMap !== undefined
          ? message.takerFeesMap
          : new Uint8Array()
      ));
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? PoolData.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessBlockRequest>): ProcessBlockRequest {
    const message = { ...baseProcessBlockRequest } as ProcessBlockRequest;
    message.pools = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.takerFeesMap !== undefined && object.takerFeesMap !== null) {
      message.takerFeesMap = object.takerFeesMap;
    } else {
      message.takerFeesMap = new Uint8Array();
    }
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(PoolData.fromPartial(e));
      }
    }
    return message;
  },
};

const baseProcessBlockReply: object = {};

export const ProcessBlockReply = {
  encode(
    _: ProcessBlockReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessBlockReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessBlockReply } as ProcessBlockReply;
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

  fromJSON(_: any): ProcessBlockReply {
    const message = { ...baseProcessBlockReply } as ProcessBlockReply;
    return message;
  },

  toJSON(_: ProcessBlockReply): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ProcessBlockReply>): ProcessBlockReply {
    const message = { ...baseProcessBlockReply } as ProcessBlockReply;
    return message;
  },
};

/**
 * SQSIngester is a a data ingester from an Osmosis node to
 * the sidecar query server.
 */
export interface SQSIngester {
  /** ProcessBlock processes a block from the Osmosis node. */
  ProcessBlock(request: ProcessBlockRequest): Promise<ProcessBlockReply>;
}

export class SQSIngesterClientImpl implements SQSIngester {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ProcessBlock(request: ProcessBlockRequest): Promise<ProcessBlockReply> {
    const data = ProcessBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.ingest.v1beta1.SQSIngester",
      "ProcessBlock",
      data
    );
    return promise.then((data) =>
      ProcessBlockReply.decode(new _m0.Reader(data))
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
