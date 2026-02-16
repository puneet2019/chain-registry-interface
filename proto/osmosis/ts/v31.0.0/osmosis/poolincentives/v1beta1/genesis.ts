/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Params,
  DistrInfo,
  AnyPoolToInternalGauges,
  ConcentratedPoolToNoLockGauges,
} from "../../../osmosis/poolincentives/v1beta1/incentives";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "osmosis.poolincentives.v1beta1";

/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  lockableDurations: Duration[];
  distrInfo: DistrInfo | undefined;
  /**
   * any_pool_to_internal_gauges defines the gauges for any pool to internal
   * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
   * link
   */
  anyPoolToInternalGauges: AnyPoolToInternalGauges | undefined;
  /**
   * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
   * concentrated pool. This only exists between concentrated pool and no lock
   * gauges. Both external and internal gauges are included.
   */
  concentratedPoolToNoLockGauges: ConcentratedPoolToNoLockGauges | undefined;
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
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.anyPoolToInternalGauges !== undefined) {
      AnyPoolToInternalGauges.encode(
        message.anyPoolToInternalGauges,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.concentratedPoolToNoLockGauges !== undefined) {
      ConcentratedPoolToNoLockGauges.encode(
        message.concentratedPoolToNoLockGauges,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.lockableDurations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lockableDurations.push(
            Duration.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.anyPoolToInternalGauges = AnyPoolToInternalGauges.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.decode(
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.lockableDurations = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.lockableDurations !== undefined &&
      object.lockableDurations !== null
    ) {
      for (const e of object.lockableDurations) {
        message.lockableDurations.push(Duration.fromJSON(e));
      }
    }
    if (object.distrInfo !== undefined && object.distrInfo !== null) {
      message.distrInfo = DistrInfo.fromJSON(object.distrInfo);
    } else {
      message.distrInfo = undefined;
    }
    if (
      object.anyPoolToInternalGauges !== undefined &&
      object.anyPoolToInternalGauges !== null
    ) {
      message.anyPoolToInternalGauges = AnyPoolToInternalGauges.fromJSON(
        object.anyPoolToInternalGauges
      );
    } else {
      message.anyPoolToInternalGauges = undefined;
    }
    if (
      object.concentratedPoolToNoLockGauges !== undefined &&
      object.concentratedPoolToNoLockGauges !== null
    ) {
      message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.fromJSON(
        object.concentratedPoolToNoLockGauges
      );
    } else {
      message.concentratedPoolToNoLockGauges = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map((e) =>
        e ? Duration.toJSON(e) : undefined
      );
    } else {
      obj.lockableDurations = [];
    }
    message.distrInfo !== undefined &&
      (obj.distrInfo = message.distrInfo
        ? DistrInfo.toJSON(message.distrInfo)
        : undefined);
    message.anyPoolToInternalGauges !== undefined &&
      (obj.anyPoolToInternalGauges = message.anyPoolToInternalGauges
        ? AnyPoolToInternalGauges.toJSON(message.anyPoolToInternalGauges)
        : undefined);
    message.concentratedPoolToNoLockGauges !== undefined &&
      (obj.concentratedPoolToNoLockGauges = message.concentratedPoolToNoLockGauges
        ? ConcentratedPoolToNoLockGauges.toJSON(
            message.concentratedPoolToNoLockGauges
          )
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.lockableDurations = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.lockableDurations !== undefined &&
      object.lockableDurations !== null
    ) {
      for (const e of object.lockableDurations) {
        message.lockableDurations.push(Duration.fromPartial(e));
      }
    }
    if (object.distrInfo !== undefined && object.distrInfo !== null) {
      message.distrInfo = DistrInfo.fromPartial(object.distrInfo);
    } else {
      message.distrInfo = undefined;
    }
    if (
      object.anyPoolToInternalGauges !== undefined &&
      object.anyPoolToInternalGauges !== null
    ) {
      message.anyPoolToInternalGauges = AnyPoolToInternalGauges.fromPartial(
        object.anyPoolToInternalGauges
      );
    } else {
      message.anyPoolToInternalGauges = undefined;
    }
    if (
      object.concentratedPoolToNoLockGauges !== undefined &&
      object.concentratedPoolToNoLockGauges !== null
    ) {
      message.concentratedPoolToNoLockGauges = ConcentratedPoolToNoLockGauges.fromPartial(
        object.concentratedPoolToNoLockGauges
      );
    } else {
      message.concentratedPoolToNoLockGauges = undefined;
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
