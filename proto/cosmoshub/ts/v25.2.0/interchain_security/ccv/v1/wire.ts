/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Infraction,
  infractionFromJSON,
  infractionToJSON,
} from "../../../cosmos/staking/v1beta1/staking";
import { ValidatorUpdate, Validator } from "../../../tendermint/abci/types";

export const protobufPackage = "interchain_security.ccv.v1";

/** ConsumerPacketType indicates interchain security specific packet types. */
export enum ConsumerPacketDataType {
  /** CONSUMER_PACKET_TYPE_UNSPECIFIED - UNSPECIFIED packet type */
  CONSUMER_PACKET_TYPE_UNSPECIFIED = 0,
  /** CONSUMER_PACKET_TYPE_SLASH - Slash packet */
  CONSUMER_PACKET_TYPE_SLASH = 1,
  /** CONSUMER_PACKET_TYPE_VSCM - VSCMatured packet */
  CONSUMER_PACKET_TYPE_VSCM = 2,
  UNRECOGNIZED = -1,
}

export function consumerPacketDataTypeFromJSON(
  object: any
): ConsumerPacketDataType {
  switch (object) {
    case 0:
    case "CONSUMER_PACKET_TYPE_UNSPECIFIED":
      return ConsumerPacketDataType.CONSUMER_PACKET_TYPE_UNSPECIFIED;
    case 1:
    case "CONSUMER_PACKET_TYPE_SLASH":
      return ConsumerPacketDataType.CONSUMER_PACKET_TYPE_SLASH;
    case 2:
    case "CONSUMER_PACKET_TYPE_VSCM":
      return ConsumerPacketDataType.CONSUMER_PACKET_TYPE_VSCM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConsumerPacketDataType.UNRECOGNIZED;
  }
}

export function consumerPacketDataTypeToJSON(
  object: ConsumerPacketDataType
): string {
  switch (object) {
    case ConsumerPacketDataType.CONSUMER_PACKET_TYPE_UNSPECIFIED:
      return "CONSUMER_PACKET_TYPE_UNSPECIFIED";
    case ConsumerPacketDataType.CONSUMER_PACKET_TYPE_SLASH:
      return "CONSUMER_PACKET_TYPE_SLASH";
    case ConsumerPacketDataType.CONSUMER_PACKET_TYPE_VSCM:
      return "CONSUMER_PACKET_TYPE_VSCM";
    default:
      return "UNKNOWN";
  }
}

/**
 * InfractionType indicates the infraction type a validator committed.
 * Note ccv.InfractionType to maintain compatibility between ICS versions
 * using different versions of the cosmos-sdk and ibc-go modules.
 */
export enum InfractionType {
  /** INFRACTION_TYPE_UNSPECIFIED - UNSPECIFIED defines an empty infraction type. */
  INFRACTION_TYPE_UNSPECIFIED = 0,
  /** INFRACTION_TYPE_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
  INFRACTION_TYPE_DOUBLE_SIGN = 1,
  /** INFRACTION_TYPE_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
  INFRACTION_TYPE_DOWNTIME = 2,
  UNRECOGNIZED = -1,
}

export function infractionTypeFromJSON(object: any): InfractionType {
  switch (object) {
    case 0:
    case "INFRACTION_TYPE_UNSPECIFIED":
      return InfractionType.INFRACTION_TYPE_UNSPECIFIED;
    case 1:
    case "INFRACTION_TYPE_DOUBLE_SIGN":
      return InfractionType.INFRACTION_TYPE_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_TYPE_DOWNTIME":
      return InfractionType.INFRACTION_TYPE_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InfractionType.UNRECOGNIZED;
  }
}

export function infractionTypeToJSON(object: InfractionType): string {
  switch (object) {
    case InfractionType.INFRACTION_TYPE_UNSPECIFIED:
      return "INFRACTION_TYPE_UNSPECIFIED";
    case InfractionType.INFRACTION_TYPE_DOUBLE_SIGN:
      return "INFRACTION_TYPE_DOUBLE_SIGN";
    case InfractionType.INFRACTION_TYPE_DOWNTIME:
      return "INFRACTION_TYPE_DOWNTIME";
    default:
      return "UNKNOWN";
  }
}

/**
 * This packet is sent from provider chain to consumer chain if the validator
 * set for consumer chain changes (due to new bonding/unbonding messages or
 * slashing events) A VSCMatured packet from consumer chain will be sent
 * asynchronously once unbonding period is over, and this will function as
 * `UnbondingOver` message for this packet.
 */
export interface ValidatorSetChangePacketData {
  validatorUpdates: ValidatorUpdate[];
  valsetUpdateId: number;
  /**
   * consensus address of consumer chain validators
   * successfully slashed on the provider chain
   */
  slashAcks: string[];
}

/**
 * This packet is sent from the consumer chain to the provider chain
 * to notify that a VSC packet reached maturity on the consumer chain.
 */
export interface VSCMaturedPacketData {
  /** the id of the VSC packet that reached maturity */
  valsetUpdateId: number;
}

/**
 * This packet is sent from the consumer chain to the provider chain
 * to request the slashing of a validator as a result of an infraction
 * committed on the consumer chain.
 */
export interface SlashPacketData {
  validator: Validator | undefined;
  /** map to the infraction block height on the provider */
  valsetUpdateId: number;
  /** tell if the slashing is for a downtime or a double-signing infraction */
  infraction: Infraction;
}

/** ConsumerPacketData contains a consumer packet data and a type tag */
export interface ConsumerPacketData {
  type: ConsumerPacketDataType;
  slashPacketData: SlashPacketData | undefined;
  vscMaturedPacketData: VSCMaturedPacketData | undefined;
}

/** Note this type is used during IBC handshake methods for both the consumer and provider */
export interface HandshakeMetadata {
  providerFeePoolAddr: string;
  version: string;
}

/**
 * ConsumerPacketData contains a consumer packet data and a type tag
 * that is compatible with ICS v1 and v2 over the wire. It is not used for internal storage.
 */
export interface ConsumerPacketDataV1 {
  type: ConsumerPacketDataType;
  slashPacketData: SlashPacketDataV1 | undefined;
  vscMaturedPacketData: VSCMaturedPacketData | undefined;
}

/**
 * This packet is sent from the consumer chain to the provider chain
 * It is backward compatible with the ICS v1 and v2 version of the packet.
 */
export interface SlashPacketDataV1 {
  validator: Validator | undefined;
  /** map to the infraction block height on the provider */
  valsetUpdateId: number;
  /** tell if the slashing is for a downtime or a double-signing infraction */
  infraction: InfractionType;
}

const baseValidatorSetChangePacketData: object = {
  valsetUpdateId: 0,
  slashAcks: "",
};

export const ValidatorSetChangePacketData = {
  encode(
    message: ValidatorSetChangePacketData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.valsetUpdateId !== 0) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    for (const v of message.slashAcks) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ValidatorSetChangePacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseValidatorSetChangePacketData,
    } as ValidatorSetChangePacketData;
    message.validatorUpdates = [];
    message.slashAcks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.valsetUpdateId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.slashAcks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSetChangePacketData {
    const message = {
      ...baseValidatorSetChangePacketData,
    } as ValidatorSetChangePacketData;
    message.validatorUpdates = [];
    message.slashAcks = [];
    if (
      object.validatorUpdates !== undefined &&
      object.validatorUpdates !== null
    ) {
      for (const e of object.validatorUpdates) {
        message.validatorUpdates.push(ValidatorUpdate.fromJSON(e));
      }
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = Number(object.valsetUpdateId);
    } else {
      message.valsetUpdateId = 0;
    }
    if (object.slashAcks !== undefined && object.slashAcks !== null) {
      for (const e of object.slashAcks) {
        message.slashAcks.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: ValidatorSetChangePacketData): unknown {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map((e) =>
        e ? ValidatorUpdate.toJSON(e) : undefined
      );
    } else {
      obj.validatorUpdates = [];
    }
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = message.valsetUpdateId);
    if (message.slashAcks) {
      obj.slashAcks = message.slashAcks.map((e) => e);
    } else {
      obj.slashAcks = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ValidatorSetChangePacketData>
  ): ValidatorSetChangePacketData {
    const message = {
      ...baseValidatorSetChangePacketData,
    } as ValidatorSetChangePacketData;
    message.validatorUpdates = [];
    message.slashAcks = [];
    if (
      object.validatorUpdates !== undefined &&
      object.validatorUpdates !== null
    ) {
      for (const e of object.validatorUpdates) {
        message.validatorUpdates.push(ValidatorUpdate.fromPartial(e));
      }
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = object.valsetUpdateId;
    } else {
      message.valsetUpdateId = 0;
    }
    if (object.slashAcks !== undefined && object.slashAcks !== null) {
      for (const e of object.slashAcks) {
        message.slashAcks.push(e);
      }
    }
    return message;
  },
};

const baseVSCMaturedPacketData: object = { valsetUpdateId: 0 };

export const VSCMaturedPacketData = {
  encode(
    message: VSCMaturedPacketData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valsetUpdateId !== 0) {
      writer.uint32(8).uint64(message.valsetUpdateId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VSCMaturedPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVSCMaturedPacketData } as VSCMaturedPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetUpdateId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VSCMaturedPacketData {
    const message = { ...baseVSCMaturedPacketData } as VSCMaturedPacketData;
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = Number(object.valsetUpdateId);
    } else {
      message.valsetUpdateId = 0;
    }
    return message;
  },

  toJSON(message: VSCMaturedPacketData): unknown {
    const obj: any = {};
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = message.valsetUpdateId);
    return obj;
  },

  fromPartial(object: DeepPartial<VSCMaturedPacketData>): VSCMaturedPacketData {
    const message = { ...baseVSCMaturedPacketData } as VSCMaturedPacketData;
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = object.valsetUpdateId;
    } else {
      message.valsetUpdateId = 0;
    }
    return message;
  },
};

const baseSlashPacketData: object = { valsetUpdateId: 0, infraction: 0 };

export const SlashPacketData = {
  encode(
    message: SlashPacketData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.valsetUpdateId !== 0) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    if (message.infraction !== 0) {
      writer.uint32(24).int32(message.infraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSlashPacketData } as SlashPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.valsetUpdateId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.infraction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SlashPacketData {
    const message = { ...baseSlashPacketData } as SlashPacketData;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = Number(object.valsetUpdateId);
    } else {
      message.valsetUpdateId = 0;
    }
    if (object.infraction !== undefined && object.infraction !== null) {
      message.infraction = infractionFromJSON(object.infraction);
    } else {
      message.infraction = 0;
    }
    return message;
  },

  toJSON(message: SlashPacketData): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = message.valsetUpdateId);
    message.infraction !== undefined &&
      (obj.infraction = infractionToJSON(message.infraction));
    return obj;
  },

  fromPartial(object: DeepPartial<SlashPacketData>): SlashPacketData {
    const message = { ...baseSlashPacketData } as SlashPacketData;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = object.valsetUpdateId;
    } else {
      message.valsetUpdateId = 0;
    }
    if (object.infraction !== undefined && object.infraction !== null) {
      message.infraction = object.infraction;
    } else {
      message.infraction = 0;
    }
    return message;
  },
};

const baseConsumerPacketData: object = { type: 0 };

export const ConsumerPacketData = {
  encode(
    message: ConsumerPacketData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.slashPacketData !== undefined) {
      SlashPacketData.encode(
        message.slashPacketData,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.vscMaturedPacketData !== undefined) {
      VSCMaturedPacketData.encode(
        message.vscMaturedPacketData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsumerPacketData } as ConsumerPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.slashPacketData = SlashPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.vscMaturedPacketData = VSCMaturedPacketData.decode(
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

  fromJSON(object: any): ConsumerPacketData {
    const message = { ...baseConsumerPacketData } as ConsumerPacketData;
    if (object.type !== undefined && object.type !== null) {
      message.type = consumerPacketDataTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (
      object.slashPacketData !== undefined &&
      object.slashPacketData !== null
    ) {
      message.slashPacketData = SlashPacketData.fromJSON(
        object.slashPacketData
      );
    } else {
      message.slashPacketData = undefined;
    }
    if (
      object.vscMaturedPacketData !== undefined &&
      object.vscMaturedPacketData !== null
    ) {
      message.vscMaturedPacketData = VSCMaturedPacketData.fromJSON(
        object.vscMaturedPacketData
      );
    } else {
      message.vscMaturedPacketData = undefined;
    }
    return message;
  },

  toJSON(message: ConsumerPacketData): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = consumerPacketDataTypeToJSON(message.type));
    message.slashPacketData !== undefined &&
      (obj.slashPacketData = message.slashPacketData
        ? SlashPacketData.toJSON(message.slashPacketData)
        : undefined);
    message.vscMaturedPacketData !== undefined &&
      (obj.vscMaturedPacketData = message.vscMaturedPacketData
        ? VSCMaturedPacketData.toJSON(message.vscMaturedPacketData)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ConsumerPacketData>): ConsumerPacketData {
    const message = { ...baseConsumerPacketData } as ConsumerPacketData;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (
      object.slashPacketData !== undefined &&
      object.slashPacketData !== null
    ) {
      message.slashPacketData = SlashPacketData.fromPartial(
        object.slashPacketData
      );
    } else {
      message.slashPacketData = undefined;
    }
    if (
      object.vscMaturedPacketData !== undefined &&
      object.vscMaturedPacketData !== null
    ) {
      message.vscMaturedPacketData = VSCMaturedPacketData.fromPartial(
        object.vscMaturedPacketData
      );
    } else {
      message.vscMaturedPacketData = undefined;
    }
    return message;
  },
};

const baseHandshakeMetadata: object = { providerFeePoolAddr: "", version: "" };

export const HandshakeMetadata = {
  encode(
    message: HandshakeMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.providerFeePoolAddr !== "") {
      writer.uint32(10).string(message.providerFeePoolAddr);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HandshakeMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandshakeMetadata } as HandshakeMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerFeePoolAddr = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HandshakeMetadata {
    const message = { ...baseHandshakeMetadata } as HandshakeMetadata;
    if (
      object.providerFeePoolAddr !== undefined &&
      object.providerFeePoolAddr !== null
    ) {
      message.providerFeePoolAddr = String(object.providerFeePoolAddr);
    } else {
      message.providerFeePoolAddr = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    return message;
  },

  toJSON(message: HandshakeMetadata): unknown {
    const obj: any = {};
    message.providerFeePoolAddr !== undefined &&
      (obj.providerFeePoolAddr = message.providerFeePoolAddr);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<HandshakeMetadata>): HandshakeMetadata {
    const message = { ...baseHandshakeMetadata } as HandshakeMetadata;
    if (
      object.providerFeePoolAddr !== undefined &&
      object.providerFeePoolAddr !== null
    ) {
      message.providerFeePoolAddr = object.providerFeePoolAddr;
    } else {
      message.providerFeePoolAddr = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    return message;
  },
};

const baseConsumerPacketDataV1: object = { type: 0 };

export const ConsumerPacketDataV1 = {
  encode(
    message: ConsumerPacketDataV1,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.slashPacketData !== undefined) {
      SlashPacketDataV1.encode(
        message.slashPacketData,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.vscMaturedPacketData !== undefined) {
      VSCMaturedPacketData.encode(
        message.vscMaturedPacketData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConsumerPacketDataV1 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsumerPacketDataV1 } as ConsumerPacketDataV1;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.slashPacketData = SlashPacketDataV1.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.vscMaturedPacketData = VSCMaturedPacketData.decode(
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

  fromJSON(object: any): ConsumerPacketDataV1 {
    const message = { ...baseConsumerPacketDataV1 } as ConsumerPacketDataV1;
    if (object.type !== undefined && object.type !== null) {
      message.type = consumerPacketDataTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (
      object.slashPacketData !== undefined &&
      object.slashPacketData !== null
    ) {
      message.slashPacketData = SlashPacketDataV1.fromJSON(
        object.slashPacketData
      );
    } else {
      message.slashPacketData = undefined;
    }
    if (
      object.vscMaturedPacketData !== undefined &&
      object.vscMaturedPacketData !== null
    ) {
      message.vscMaturedPacketData = VSCMaturedPacketData.fromJSON(
        object.vscMaturedPacketData
      );
    } else {
      message.vscMaturedPacketData = undefined;
    }
    return message;
  },

  toJSON(message: ConsumerPacketDataV1): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = consumerPacketDataTypeToJSON(message.type));
    message.slashPacketData !== undefined &&
      (obj.slashPacketData = message.slashPacketData
        ? SlashPacketDataV1.toJSON(message.slashPacketData)
        : undefined);
    message.vscMaturedPacketData !== undefined &&
      (obj.vscMaturedPacketData = message.vscMaturedPacketData
        ? VSCMaturedPacketData.toJSON(message.vscMaturedPacketData)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ConsumerPacketDataV1>): ConsumerPacketDataV1 {
    const message = { ...baseConsumerPacketDataV1 } as ConsumerPacketDataV1;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (
      object.slashPacketData !== undefined &&
      object.slashPacketData !== null
    ) {
      message.slashPacketData = SlashPacketDataV1.fromPartial(
        object.slashPacketData
      );
    } else {
      message.slashPacketData = undefined;
    }
    if (
      object.vscMaturedPacketData !== undefined &&
      object.vscMaturedPacketData !== null
    ) {
      message.vscMaturedPacketData = VSCMaturedPacketData.fromPartial(
        object.vscMaturedPacketData
      );
    } else {
      message.vscMaturedPacketData = undefined;
    }
    return message;
  },
};

const baseSlashPacketDataV1: object = { valsetUpdateId: 0, infraction: 0 };

export const SlashPacketDataV1 = {
  encode(
    message: SlashPacketDataV1,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.valsetUpdateId !== 0) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    if (message.infraction !== 0) {
      writer.uint32(24).int32(message.infraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashPacketDataV1 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSlashPacketDataV1 } as SlashPacketDataV1;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.valsetUpdateId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.infraction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SlashPacketDataV1 {
    const message = { ...baseSlashPacketDataV1 } as SlashPacketDataV1;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = Number(object.valsetUpdateId);
    } else {
      message.valsetUpdateId = 0;
    }
    if (object.infraction !== undefined && object.infraction !== null) {
      message.infraction = infractionTypeFromJSON(object.infraction);
    } else {
      message.infraction = 0;
    }
    return message;
  },

  toJSON(message: SlashPacketDataV1): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = message.valsetUpdateId);
    message.infraction !== undefined &&
      (obj.infraction = infractionTypeToJSON(message.infraction));
    return obj;
  },

  fromPartial(object: DeepPartial<SlashPacketDataV1>): SlashPacketDataV1 {
    const message = { ...baseSlashPacketDataV1 } as SlashPacketDataV1;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = object.valsetUpdateId;
    } else {
      message.valsetUpdateId = 0;
    }
    if (object.infraction !== undefined && object.infraction !== null) {
      message.infraction = object.infraction;
    } else {
      message.infraction = 0;
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
