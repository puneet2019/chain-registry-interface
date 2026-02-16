/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "../../../feemarket/feemarket/v1/params";
import { State } from "../../../feemarket/feemarket/v1/genesis";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "feemarket.feemarket.v1";

/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {}

/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params: Params | undefined;
}

/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {}

/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
  state: State | undefined;
}

/** GasPriceRequest is the request type for the Query/GasPrice RPC method. */
export interface GasPriceRequest {
  /** denom we are querying gas price in */
  denom: string;
}

/**
 * GasPriceResponse is the response type for the Query/GasPrice RPC method.
 * Returns a gas price in specified denom.
 */
export interface GasPriceResponse {
  price: DecCoin | undefined;
}

/** GasPriceRequest is the request type for the Query/GasPrices RPC method. */
export interface GasPricesRequest {}

/**
 * GasPricesResponse is the response type for the Query/GasPrices RPC method.
 * Returns a gas price in all available denoms.
 */
export interface GasPricesResponse {
  prices: DecCoin[];
}

const baseParamsRequest: object = {};

export const ParamsRequest = {
  encode(
    _: ParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsRequest } as ParamsRequest;
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

  fromJSON(_: any): ParamsRequest {
    const message = { ...baseParamsRequest } as ParamsRequest;
    return message;
  },

  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest {
    const message = { ...baseParamsRequest } as ParamsRequest;
    return message;
  },
};

const baseParamsResponse: object = {};

export const ParamsResponse = {
  encode(
    message: ParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsResponse } as ParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsResponse {
    const message = { ...baseParamsResponse } as ParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse {
    const message = { ...baseParamsResponse } as ParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseStateRequest: object = {};

export const StateRequest = {
  encode(
    _: StateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateRequest } as StateRequest;
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

  fromJSON(_: any): StateRequest {
    const message = { ...baseStateRequest } as StateRequest;
    return message;
  },

  toJSON(_: StateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StateRequest>): StateRequest {
    const message = { ...baseStateRequest } as StateRequest;
    return message;
  },
};

const baseStateResponse: object = {};

export const StateResponse = {
  encode(
    message: StateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateResponse } as StateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateResponse {
    const message = { ...baseStateResponse } as StateResponse;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },

  toJSON(message: StateResponse): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StateResponse>): StateResponse {
    const message = { ...baseStateResponse } as StateResponse;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },
};

const baseGasPriceRequest: object = { denom: "" };

export const GasPriceRequest = {
  encode(
    message: GasPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGasPriceRequest } as GasPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GasPriceRequest {
    const message = { ...baseGasPriceRequest } as GasPriceRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: GasPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<GasPriceRequest>): GasPriceRequest {
    const message = { ...baseGasPriceRequest } as GasPriceRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseGasPriceResponse: object = {};

export const GasPriceResponse = {
  encode(
    message: GasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGasPriceResponse } as GasPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GasPriceResponse {
    const message = { ...baseGasPriceResponse } as GasPriceResponse;
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: GasPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined &&
      (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GasPriceResponse>): GasPriceResponse {
    const message = { ...baseGasPriceResponse } as GasPriceResponse;
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },
};

const baseGasPricesRequest: object = {};

export const GasPricesRequest = {
  encode(
    _: GasPricesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGasPricesRequest } as GasPricesRequest;
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

  fromJSON(_: any): GasPricesRequest {
    const message = { ...baseGasPricesRequest } as GasPricesRequest;
    return message;
  },

  toJSON(_: GasPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GasPricesRequest>): GasPricesRequest {
    const message = { ...baseGasPricesRequest } as GasPricesRequest;
    return message;
  },
};

const baseGasPricesResponse: object = {};

export const GasPricesResponse = {
  encode(
    message: GasPricesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.prices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGasPricesResponse } as GasPricesResponse;
    message.prices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GasPricesResponse {
    const message = { ...baseGasPricesResponse } as GasPricesResponse;
    message.prices = [];
    if (object.prices !== undefined && object.prices !== null) {
      for (const e of object.prices) {
        message.prices.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GasPricesResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.prices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GasPricesResponse>): GasPricesResponse {
    const message = { ...baseGasPricesResponse } as GasPricesResponse;
    message.prices = [];
    if (object.prices !== undefined && object.prices !== null) {
      for (const e of object.prices) {
        message.prices.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query Service for the feemarket module. */
export interface Query {
  /** Params returns the current feemarket module parameters. */
  Params(request: ParamsRequest): Promise<ParamsResponse>;
  /** State returns the current feemarket module state. */
  State(request: StateRequest): Promise<StateResponse>;
  /**
   * GasPrice returns the current feemarket module gas price
   * for specified denom.
   */
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
  /**
   * GasPrices returns the current feemarket module list of gas prices
   * in all available denoms.
   */
  GasPrices(request: GasPricesRequest): Promise<GasPricesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "feemarket.feemarket.v1.Query",
      "Params",
      data
    );
    return promise.then((data) => ParamsResponse.decode(new _m0.Reader(data)));
  }

  State(request: StateRequest): Promise<StateResponse> {
    const data = StateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "feemarket.feemarket.v1.Query",
      "State",
      data
    );
    return promise.then((data) => StateResponse.decode(new _m0.Reader(data)));
  }

  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "feemarket.feemarket.v1.Query",
      "GasPrice",
      data
    );
    return promise.then((data) =>
      GasPriceResponse.decode(new _m0.Reader(data))
    );
  }

  GasPrices(request: GasPricesRequest): Promise<GasPricesResponse> {
    const data = GasPricesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "feemarket.feemarket.v1.Query",
      "GasPrices",
      data
    );
    return promise.then((data) =>
      GasPricesResponse.decode(new _m0.Reader(data))
    );
  }
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
