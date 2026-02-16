/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.benchmark.module.v1";

/** Module is the config object of the benchmark module. */
export interface Module {
  genesisParams: GeneratorParams | undefined;
}

/** GenesisParams defines the genesis parameters for the benchmark module. */
export interface GeneratorParams {
  /** seed is the seed for the random number generator. */
  seed: number;
  /** bucket_count is the number of store keys to uniformly distribute genesis_count keys across. */
  bucketCount: number;
  /** key_mean is the mean size (in normal distribution) of keys in each bucket. */
  keyMean: number;
  /** key_std_dev is the standard deviation of key sizes in each bucket. */
  keyStdDev: number;
  /** value_mean is the mean size (in normal distribution) of values in each bucket. */
  valueMean: number;
  /** value_std_dev is the standard deviation of value sizes in each bucket. */
  valueStdDev: number;
  /** genesis_count is the number of keys to insert in the store, distributed across all buckets. */
  genesisCount: number;
  /** insert_weight is the weight of insert operations. */
  insertWeight: number;
  /** update_weight is the weight of update operations. */
  updateWeight: number;
  /** get_weight is the weight of get operations. */
  getWeight: number;
  /** delete_weight is the weight of delete operations. */
  deleteWeight: number;
}

const baseModule: object = {};

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.genesisParams !== undefined) {
      GeneratorParams.encode(
        message.genesisParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModule } as Module;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisParams = GeneratorParams.decode(
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

  fromJSON(object: any): Module {
    const message = { ...baseModule } as Module;
    if (object.genesisParams !== undefined && object.genesisParams !== null) {
      message.genesisParams = GeneratorParams.fromJSON(object.genesisParams);
    } else {
      message.genesisParams = undefined;
    }
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.genesisParams !== undefined &&
      (obj.genesisParams = message.genesisParams
        ? GeneratorParams.toJSON(message.genesisParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    if (object.genesisParams !== undefined && object.genesisParams !== null) {
      message.genesisParams = GeneratorParams.fromPartial(object.genesisParams);
    } else {
      message.genesisParams = undefined;
    }
    return message;
  },
};

const baseGeneratorParams: object = {
  seed: 0,
  bucketCount: 0,
  keyMean: 0,
  keyStdDev: 0,
  valueMean: 0,
  valueStdDev: 0,
  genesisCount: 0,
  insertWeight: 0,
  updateWeight: 0,
  getWeight: 0,
  deleteWeight: 0,
};

export const GeneratorParams = {
  encode(
    message: GeneratorParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seed !== 0) {
      writer.uint32(8).uint64(message.seed);
    }
    if (message.bucketCount !== 0) {
      writer.uint32(16).uint64(message.bucketCount);
    }
    if (message.keyMean !== 0) {
      writer.uint32(24).uint64(message.keyMean);
    }
    if (message.keyStdDev !== 0) {
      writer.uint32(32).uint64(message.keyStdDev);
    }
    if (message.valueMean !== 0) {
      writer.uint32(48).uint64(message.valueMean);
    }
    if (message.valueStdDev !== 0) {
      writer.uint32(56).uint64(message.valueStdDev);
    }
    if (message.genesisCount !== 0) {
      writer.uint32(64).uint64(message.genesisCount);
    }
    if (message.insertWeight !== 0) {
      writer.uint32(77).float(message.insertWeight);
    }
    if (message.updateWeight !== 0) {
      writer.uint32(85).float(message.updateWeight);
    }
    if (message.getWeight !== 0) {
      writer.uint32(101).float(message.getWeight);
    }
    if (message.deleteWeight !== 0) {
      writer.uint32(93).float(message.deleteWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratorParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGeneratorParams } as GeneratorParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bucketCount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.keyMean = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.keyStdDev = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.valueMean = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.valueStdDev = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.genesisCount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.insertWeight = reader.float();
          break;
        case 10:
          message.updateWeight = reader.float();
          break;
        case 12:
          message.getWeight = reader.float();
          break;
        case 11:
          message.deleteWeight = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeneratorParams {
    const message = { ...baseGeneratorParams } as GeneratorParams;
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = Number(object.seed);
    } else {
      message.seed = 0;
    }
    if (object.bucketCount !== undefined && object.bucketCount !== null) {
      message.bucketCount = Number(object.bucketCount);
    } else {
      message.bucketCount = 0;
    }
    if (object.keyMean !== undefined && object.keyMean !== null) {
      message.keyMean = Number(object.keyMean);
    } else {
      message.keyMean = 0;
    }
    if (object.keyStdDev !== undefined && object.keyStdDev !== null) {
      message.keyStdDev = Number(object.keyStdDev);
    } else {
      message.keyStdDev = 0;
    }
    if (object.valueMean !== undefined && object.valueMean !== null) {
      message.valueMean = Number(object.valueMean);
    } else {
      message.valueMean = 0;
    }
    if (object.valueStdDev !== undefined && object.valueStdDev !== null) {
      message.valueStdDev = Number(object.valueStdDev);
    } else {
      message.valueStdDev = 0;
    }
    if (object.genesisCount !== undefined && object.genesisCount !== null) {
      message.genesisCount = Number(object.genesisCount);
    } else {
      message.genesisCount = 0;
    }
    if (object.insertWeight !== undefined && object.insertWeight !== null) {
      message.insertWeight = Number(object.insertWeight);
    } else {
      message.insertWeight = 0;
    }
    if (object.updateWeight !== undefined && object.updateWeight !== null) {
      message.updateWeight = Number(object.updateWeight);
    } else {
      message.updateWeight = 0;
    }
    if (object.getWeight !== undefined && object.getWeight !== null) {
      message.getWeight = Number(object.getWeight);
    } else {
      message.getWeight = 0;
    }
    if (object.deleteWeight !== undefined && object.deleteWeight !== null) {
      message.deleteWeight = Number(object.deleteWeight);
    } else {
      message.deleteWeight = 0;
    }
    return message;
  },

  toJSON(message: GeneratorParams): unknown {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = message.seed);
    message.bucketCount !== undefined &&
      (obj.bucketCount = message.bucketCount);
    message.keyMean !== undefined && (obj.keyMean = message.keyMean);
    message.keyStdDev !== undefined && (obj.keyStdDev = message.keyStdDev);
    message.valueMean !== undefined && (obj.valueMean = message.valueMean);
    message.valueStdDev !== undefined &&
      (obj.valueStdDev = message.valueStdDev);
    message.genesisCount !== undefined &&
      (obj.genesisCount = message.genesisCount);
    message.insertWeight !== undefined &&
      (obj.insertWeight = message.insertWeight);
    message.updateWeight !== undefined &&
      (obj.updateWeight = message.updateWeight);
    message.getWeight !== undefined && (obj.getWeight = message.getWeight);
    message.deleteWeight !== undefined &&
      (obj.deleteWeight = message.deleteWeight);
    return obj;
  },

  fromPartial(object: DeepPartial<GeneratorParams>): GeneratorParams {
    const message = { ...baseGeneratorParams } as GeneratorParams;
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = object.seed;
    } else {
      message.seed = 0;
    }
    if (object.bucketCount !== undefined && object.bucketCount !== null) {
      message.bucketCount = object.bucketCount;
    } else {
      message.bucketCount = 0;
    }
    if (object.keyMean !== undefined && object.keyMean !== null) {
      message.keyMean = object.keyMean;
    } else {
      message.keyMean = 0;
    }
    if (object.keyStdDev !== undefined && object.keyStdDev !== null) {
      message.keyStdDev = object.keyStdDev;
    } else {
      message.keyStdDev = 0;
    }
    if (object.valueMean !== undefined && object.valueMean !== null) {
      message.valueMean = object.valueMean;
    } else {
      message.valueMean = 0;
    }
    if (object.valueStdDev !== undefined && object.valueStdDev !== null) {
      message.valueStdDev = object.valueStdDev;
    } else {
      message.valueStdDev = 0;
    }
    if (object.genesisCount !== undefined && object.genesisCount !== null) {
      message.genesisCount = object.genesisCount;
    } else {
      message.genesisCount = 0;
    }
    if (object.insertWeight !== undefined && object.insertWeight !== null) {
      message.insertWeight = object.insertWeight;
    } else {
      message.insertWeight = 0;
    }
    if (object.updateWeight !== undefined && object.updateWeight !== null) {
      message.updateWeight = object.updateWeight;
    } else {
      message.updateWeight = 0;
    }
    if (object.getWeight !== undefined && object.getWeight !== null) {
      message.getWeight = object.getWeight;
    } else {
      message.getWeight = 0;
    }
    if (object.deleteWeight !== undefined && object.deleteWeight !== null) {
      message.deleteWeight = object.deleteWeight;
    } else {
      message.deleteWeight = 0;
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
