/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import {
  ExecTxResult,
  Event,
  ValidatorUpdate,
  ResponseFinalizeBlock,
} from "../../tendermint/abci/types";
import { ConsensusParams } from "../../tendermint/types/params";
import { ValidatorSet } from "../../tendermint/types/validator";
import { Consensus } from "../../tendermint/version/types";
import { BlockID } from "../../tendermint/types/types";

export const protobufPackage = "tendermint.state";

/**
 * LegacyABCIResponses retains the responses
 * of the legacy ABCI calls during block processing.
 * Note ReponseDeliverTx is renamed to ExecTxResult but they are semantically the same
 * Kept for backwards compatibility for versions prior to v0.38
 */
export interface LegacyABCIResponses {
  deliverTxs: ExecTxResult[];
  endBlock: ResponseEndBlock | undefined;
  beginBlock: ResponseBeginBlock | undefined;
}

/** ResponseBeginBlock is kept for backwards compatibility for versions prior to v0.38 */
export interface ResponseBeginBlock {
  events: Event[];
}

/** ResponseEndBlock is kept for backwards compatibility for versions prior to v0.38 */
export interface ResponseEndBlock {
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates: ConsensusParams | undefined;
  events: Event[];
}

/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
  validatorSet: ValidatorSet | undefined;
  lastHeightChanged: number;
}

/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
  consensusParams: ConsensusParams | undefined;
  lastHeightChanged: number;
}

export interface ABCIResponsesInfo {
  legacyAbciResponses: LegacyABCIResponses | undefined;
  height: number;
  responseFinalizeBlock: ResponseFinalizeBlock | undefined;
}

export interface Version {
  consensus: Consensus | undefined;
  software: string;
}

export interface State {
  version: Version | undefined;
  /** immutable */
  chainId: string;
  initialHeight: number;
  /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
  lastBlockHeight: number;
  lastBlockId: BlockID | undefined;
  lastBlockTime: Date | undefined;
  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   */
  nextValidators: ValidatorSet | undefined;
  validators: ValidatorSet | undefined;
  lastValidators: ValidatorSet | undefined;
  lastHeightValidatorsChanged: number;
  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   */
  consensusParams: ConsensusParams | undefined;
  lastHeightConsensusParamsChanged: number;
  /** Merkle root of the results from executing prev block */
  lastResultsHash: Uint8Array;
  /** the latest AppHash we've received from calling abci.Commit() */
  appHash: Uint8Array;
}

const baseLegacyABCIResponses: object = {};

export const LegacyABCIResponses = {
  encode(
    message: LegacyABCIResponses,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.deliverTxs) {
      ExecTxResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(
        message.endBlock,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(
        message.beginBlock,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyABCIResponses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLegacyABCIResponses } as LegacyABCIResponses;
    message.deliverTxs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deliverTxs.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        case 2:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.beginBlock = ResponseBeginBlock.decode(
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

  fromJSON(object: any): LegacyABCIResponses {
    const message = { ...baseLegacyABCIResponses } as LegacyABCIResponses;
    message.deliverTxs = [];
    if (object.deliverTxs !== undefined && object.deliverTxs !== null) {
      for (const e of object.deliverTxs) {
        message.deliverTxs.push(ExecTxResult.fromJSON(e));
      }
    }
    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = ResponseEndBlock.fromJSON(object.endBlock);
    } else {
      message.endBlock = undefined;
    }
    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = ResponseBeginBlock.fromJSON(object.beginBlock);
    } else {
      message.beginBlock = undefined;
    }
    return message;
  },

  toJSON(message: LegacyABCIResponses): unknown {
    const obj: any = {};
    if (message.deliverTxs) {
      obj.deliverTxs = message.deliverTxs.map((e) =>
        e ? ExecTxResult.toJSON(e) : undefined
      );
    } else {
      obj.deliverTxs = [];
    }
    message.endBlock !== undefined &&
      (obj.endBlock = message.endBlock
        ? ResponseEndBlock.toJSON(message.endBlock)
        : undefined);
    message.beginBlock !== undefined &&
      (obj.beginBlock = message.beginBlock
        ? ResponseBeginBlock.toJSON(message.beginBlock)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LegacyABCIResponses>): LegacyABCIResponses {
    const message = { ...baseLegacyABCIResponses } as LegacyABCIResponses;
    message.deliverTxs = [];
    if (object.deliverTxs !== undefined && object.deliverTxs !== null) {
      for (const e of object.deliverTxs) {
        message.deliverTxs.push(ExecTxResult.fromPartial(e));
      }
    }
    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = ResponseEndBlock.fromPartial(object.endBlock);
    } else {
      message.endBlock = undefined;
    }
    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = ResponseBeginBlock.fromPartial(object.beginBlock);
    } else {
      message.beginBlock = undefined;
    }
    return message;
  },
};

const baseResponseBeginBlock: object = {};

export const ResponseBeginBlock = {
  encode(
    message: ResponseBeginBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseBeginBlock } as ResponseBeginBlock;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseBeginBlock {
    const message = { ...baseResponseBeginBlock } as ResponseBeginBlock;
    message.events = [];
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ResponseBeginBlock): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseBeginBlock>): ResponseBeginBlock {
    const message = { ...baseResponseBeginBlock } as ResponseBeginBlock;
    message.events = [];
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromPartial(e));
      }
    }
    return message;
  },
};

const baseResponseEndBlock: object = {};

export const ResponseEndBlock = {
  encode(
    message: ResponseEndBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(
        message.consensusParamUpdates,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseEndBlock } as ResponseEndBlock;
    message.validatorUpdates = [];
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseEndBlock {
    const message = { ...baseResponseEndBlock } as ResponseEndBlock;
    message.validatorUpdates = [];
    message.events = [];
    if (
      object.validatorUpdates !== undefined &&
      object.validatorUpdates !== null
    ) {
      for (const e of object.validatorUpdates) {
        message.validatorUpdates.push(ValidatorUpdate.fromJSON(e));
      }
    }
    if (
      object.consensusParamUpdates !== undefined &&
      object.consensusParamUpdates !== null
    ) {
      message.consensusParamUpdates = ConsensusParams.fromJSON(
        object.consensusParamUpdates
      );
    } else {
      message.consensusParamUpdates = undefined;
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ResponseEndBlock): unknown {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map((e) =>
        e ? ValidatorUpdate.toJSON(e) : undefined
      );
    } else {
      obj.validatorUpdates = [];
    }
    message.consensusParamUpdates !== undefined &&
      (obj.consensusParamUpdates = message.consensusParamUpdates
        ? ConsensusParams.toJSON(message.consensusParamUpdates)
        : undefined);
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseEndBlock>): ResponseEndBlock {
    const message = { ...baseResponseEndBlock } as ResponseEndBlock;
    message.validatorUpdates = [];
    message.events = [];
    if (
      object.validatorUpdates !== undefined &&
      object.validatorUpdates !== null
    ) {
      for (const e of object.validatorUpdates) {
        message.validatorUpdates.push(ValidatorUpdate.fromPartial(e));
      }
    }
    if (
      object.consensusParamUpdates !== undefined &&
      object.consensusParamUpdates !== null
    ) {
      message.consensusParamUpdates = ConsensusParams.fromPartial(
        object.consensusParamUpdates
      );
    } else {
      message.consensusParamUpdates = undefined;
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(Event.fromPartial(e));
      }
    }
    return message;
  },
};

const baseValidatorsInfo: object = { lastHeightChanged: 0 };

export const ValidatorsInfo = {
  encode(
    message: ValidatorsInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(
        message.validatorSet,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.lastHeightChanged !== 0) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorsInfo } as ValidatorsInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastHeightChanged = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorsInfo {
    const message = { ...baseValidatorsInfo } as ValidatorsInfo;
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromJSON(object.validatorSet);
    } else {
      message.validatorSet = undefined;
    }
    if (
      object.lastHeightChanged !== undefined &&
      object.lastHeightChanged !== null
    ) {
      message.lastHeightChanged = Number(object.lastHeightChanged);
    } else {
      message.lastHeightChanged = 0;
    }
    return message;
  },

  toJSON(message: ValidatorsInfo): unknown {
    const obj: any = {};
    message.validatorSet !== undefined &&
      (obj.validatorSet = message.validatorSet
        ? ValidatorSet.toJSON(message.validatorSet)
        : undefined);
    message.lastHeightChanged !== undefined &&
      (obj.lastHeightChanged = message.lastHeightChanged);
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorsInfo>): ValidatorsInfo {
    const message = { ...baseValidatorsInfo } as ValidatorsInfo;
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet);
    } else {
      message.validatorSet = undefined;
    }
    if (
      object.lastHeightChanged !== undefined &&
      object.lastHeightChanged !== null
    ) {
      message.lastHeightChanged = object.lastHeightChanged;
    } else {
      message.lastHeightChanged = 0;
    }
    return message;
  },
};

const baseConsensusParamsInfo: object = { lastHeightChanged: 0 };

export const ConsensusParamsInfo = {
  encode(
    message: ConsensusParamsInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(
        message.consensusParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.lastHeightChanged !== 0) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusParamsInfo } as ConsensusParamsInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.lastHeightChanged = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusParamsInfo {
    const message = { ...baseConsensusParamsInfo } as ConsensusParamsInfo;
    if (
      object.consensusParams !== undefined &&
      object.consensusParams !== null
    ) {
      message.consensusParams = ConsensusParams.fromJSON(
        object.consensusParams
      );
    } else {
      message.consensusParams = undefined;
    }
    if (
      object.lastHeightChanged !== undefined &&
      object.lastHeightChanged !== null
    ) {
      message.lastHeightChanged = Number(object.lastHeightChanged);
    } else {
      message.lastHeightChanged = 0;
    }
    return message;
  },

  toJSON(message: ConsensusParamsInfo): unknown {
    const obj: any = {};
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    message.lastHeightChanged !== undefined &&
      (obj.lastHeightChanged = message.lastHeightChanged);
    return obj;
  },

  fromPartial(object: DeepPartial<ConsensusParamsInfo>): ConsensusParamsInfo {
    const message = { ...baseConsensusParamsInfo } as ConsensusParamsInfo;
    if (
      object.consensusParams !== undefined &&
      object.consensusParams !== null
    ) {
      message.consensusParams = ConsensusParams.fromPartial(
        object.consensusParams
      );
    } else {
      message.consensusParams = undefined;
    }
    if (
      object.lastHeightChanged !== undefined &&
      object.lastHeightChanged !== null
    ) {
      message.lastHeightChanged = object.lastHeightChanged;
    } else {
      message.lastHeightChanged = 0;
    }
    return message;
  },
};

const baseABCIResponsesInfo: object = { height: 0 };

export const ABCIResponsesInfo = {
  encode(
    message: ABCIResponsesInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.legacyAbciResponses !== undefined) {
      LegacyABCIResponses.encode(
        message.legacyAbciResponses,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    if (message.responseFinalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(
        message.responseFinalizeBlock,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseABCIResponsesInfo } as ABCIResponsesInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyAbciResponses = LegacyABCIResponses.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.responseFinalizeBlock = ResponseFinalizeBlock.decode(
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

  fromJSON(object: any): ABCIResponsesInfo {
    const message = { ...baseABCIResponsesInfo } as ABCIResponsesInfo;
    if (
      object.legacyAbciResponses !== undefined &&
      object.legacyAbciResponses !== null
    ) {
      message.legacyAbciResponses = LegacyABCIResponses.fromJSON(
        object.legacyAbciResponses
      );
    } else {
      message.legacyAbciResponses = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (
      object.responseFinalizeBlock !== undefined &&
      object.responseFinalizeBlock !== null
    ) {
      message.responseFinalizeBlock = ResponseFinalizeBlock.fromJSON(
        object.responseFinalizeBlock
      );
    } else {
      message.responseFinalizeBlock = undefined;
    }
    return message;
  },

  toJSON(message: ABCIResponsesInfo): unknown {
    const obj: any = {};
    message.legacyAbciResponses !== undefined &&
      (obj.legacyAbciResponses = message.legacyAbciResponses
        ? LegacyABCIResponses.toJSON(message.legacyAbciResponses)
        : undefined);
    message.height !== undefined && (obj.height = message.height);
    message.responseFinalizeBlock !== undefined &&
      (obj.responseFinalizeBlock = message.responseFinalizeBlock
        ? ResponseFinalizeBlock.toJSON(message.responseFinalizeBlock)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ABCIResponsesInfo>): ABCIResponsesInfo {
    const message = { ...baseABCIResponsesInfo } as ABCIResponsesInfo;
    if (
      object.legacyAbciResponses !== undefined &&
      object.legacyAbciResponses !== null
    ) {
      message.legacyAbciResponses = LegacyABCIResponses.fromPartial(
        object.legacyAbciResponses
      );
    } else {
      message.legacyAbciResponses = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (
      object.responseFinalizeBlock !== undefined &&
      object.responseFinalizeBlock !== null
    ) {
      message.responseFinalizeBlock = ResponseFinalizeBlock.fromPartial(
        object.responseFinalizeBlock
      );
    } else {
      message.responseFinalizeBlock = undefined;
    }
    return message;
  },
};

const baseVersion: object = { software: "" };

export const Version = {
  encode(
    message: Version,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.consensus !== undefined) {
      Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersion } as Version;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Version {
    const message = { ...baseVersion } as Version;
    if (object.consensus !== undefined && object.consensus !== null) {
      message.consensus = Consensus.fromJSON(object.consensus);
    } else {
      message.consensus = undefined;
    }
    if (object.software !== undefined && object.software !== null) {
      message.software = String(object.software);
    } else {
      message.software = "";
    }
    return message;
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    message.consensus !== undefined &&
      (obj.consensus = message.consensus
        ? Consensus.toJSON(message.consensus)
        : undefined);
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },

  fromPartial(object: DeepPartial<Version>): Version {
    const message = { ...baseVersion } as Version;
    if (object.consensus !== undefined && object.consensus !== null) {
      message.consensus = Consensus.fromPartial(object.consensus);
    } else {
      message.consensus = undefined;
    }
    if (object.software !== undefined && object.software !== null) {
      message.software = object.software;
    } else {
      message.software = "";
    }
    return message;
  },
};

const baseState: object = {
  chainId: "",
  initialHeight: 0,
  lastBlockHeight: 0,
  lastHeightValidatorsChanged: 0,
  lastHeightConsensusParamsChanged: 0,
};

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.initialHeight !== 0) {
      writer.uint32(112).int64(message.initialHeight);
    }
    if (message.lastBlockHeight !== 0) {
      writer.uint32(24).int64(message.lastBlockHeight);
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastBlockTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.nextValidators !== undefined) {
      ValidatorSet.encode(
        message.nextValidators,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.validators !== undefined) {
      ValidatorSet.encode(
        message.validators,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.lastValidators !== undefined) {
      ValidatorSet.encode(
        message.lastValidators,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.lastHeightValidatorsChanged !== 0) {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(
        message.consensusParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.lastHeightConsensusParamsChanged !== 0) {
      writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(106).bytes(message.appHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseState } as State;
    message.lastResultsHash = new Uint8Array();
    message.appHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 14:
          message.initialHeight = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.lastBlockHeight = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastBlockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.nextValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 7:
          message.validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 8:
          message.lastValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastHeightValidatorsChanged = longToNumber(
            reader.int64() as Long
          );
          break;
        case 10:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.lastHeightConsensusParamsChanged = longToNumber(
            reader.int64() as Long
          );
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.appHash = reader.bytes();
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
    message.lastResultsHash = new Uint8Array();
    message.appHash = new Uint8Array();
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromJSON(object.version);
    } else {
      message.version = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = Number(object.initialHeight);
    } else {
      message.initialHeight = 0;
    }
    if (
      object.lastBlockHeight !== undefined &&
      object.lastBlockHeight !== null
    ) {
      message.lastBlockHeight = Number(object.lastBlockHeight);
    } else {
      message.lastBlockHeight = 0;
    }
    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = BlockID.fromJSON(object.lastBlockId);
    } else {
      message.lastBlockId = undefined;
    }
    if (object.lastBlockTime !== undefined && object.lastBlockTime !== null) {
      message.lastBlockTime = fromJsonTimestamp(object.lastBlockTime);
    } else {
      message.lastBlockTime = undefined;
    }
    if (object.nextValidators !== undefined && object.nextValidators !== null) {
      message.nextValidators = ValidatorSet.fromJSON(object.nextValidators);
    } else {
      message.nextValidators = undefined;
    }
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = ValidatorSet.fromJSON(object.validators);
    } else {
      message.validators = undefined;
    }
    if (object.lastValidators !== undefined && object.lastValidators !== null) {
      message.lastValidators = ValidatorSet.fromJSON(object.lastValidators);
    } else {
      message.lastValidators = undefined;
    }
    if (
      object.lastHeightValidatorsChanged !== undefined &&
      object.lastHeightValidatorsChanged !== null
    ) {
      message.lastHeightValidatorsChanged = Number(
        object.lastHeightValidatorsChanged
      );
    } else {
      message.lastHeightValidatorsChanged = 0;
    }
    if (
      object.consensusParams !== undefined &&
      object.consensusParams !== null
    ) {
      message.consensusParams = ConsensusParams.fromJSON(
        object.consensusParams
      );
    } else {
      message.consensusParams = undefined;
    }
    if (
      object.lastHeightConsensusParamsChanged !== undefined &&
      object.lastHeightConsensusParamsChanged !== null
    ) {
      message.lastHeightConsensusParamsChanged = Number(
        object.lastHeightConsensusParamsChanged
      );
    } else {
      message.lastHeightConsensusParamsChanged = 0;
    }
    if (
      object.lastResultsHash !== undefined &&
      object.lastResultsHash !== null
    ) {
      message.lastResultsHash = bytesFromBase64(object.lastResultsHash);
    }
    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = bytesFromBase64(object.appHash);
    }
    return message;
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = message.version
        ? Version.toJSON(message.version)
        : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.initialHeight !== undefined &&
      (obj.initialHeight = message.initialHeight);
    message.lastBlockHeight !== undefined &&
      (obj.lastBlockHeight = message.lastBlockHeight);
    message.lastBlockId !== undefined &&
      (obj.lastBlockId = message.lastBlockId
        ? BlockID.toJSON(message.lastBlockId)
        : undefined);
    message.lastBlockTime !== undefined &&
      (obj.lastBlockTime = message.lastBlockTime.toISOString());
    message.nextValidators !== undefined &&
      (obj.nextValidators = message.nextValidators
        ? ValidatorSet.toJSON(message.nextValidators)
        : undefined);
    message.validators !== undefined &&
      (obj.validators = message.validators
        ? ValidatorSet.toJSON(message.validators)
        : undefined);
    message.lastValidators !== undefined &&
      (obj.lastValidators = message.lastValidators
        ? ValidatorSet.toJSON(message.lastValidators)
        : undefined);
    message.lastHeightValidatorsChanged !== undefined &&
      (obj.lastHeightValidatorsChanged = message.lastHeightValidatorsChanged);
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    message.lastHeightConsensusParamsChanged !== undefined &&
      (obj.lastHeightConsensusParamsChanged =
        message.lastHeightConsensusParamsChanged);
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined
          ? message.lastResultsHash
          : new Uint8Array()
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<State>): State {
    const message = { ...baseState } as State;
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromPartial(object.version);
    } else {
      message.version = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = object.initialHeight;
    } else {
      message.initialHeight = 0;
    }
    if (
      object.lastBlockHeight !== undefined &&
      object.lastBlockHeight !== null
    ) {
      message.lastBlockHeight = object.lastBlockHeight;
    } else {
      message.lastBlockHeight = 0;
    }
    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = BlockID.fromPartial(object.lastBlockId);
    } else {
      message.lastBlockId = undefined;
    }
    if (object.lastBlockTime !== undefined && object.lastBlockTime !== null) {
      message.lastBlockTime = object.lastBlockTime;
    } else {
      message.lastBlockTime = undefined;
    }
    if (object.nextValidators !== undefined && object.nextValidators !== null) {
      message.nextValidators = ValidatorSet.fromPartial(object.nextValidators);
    } else {
      message.nextValidators = undefined;
    }
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = ValidatorSet.fromPartial(object.validators);
    } else {
      message.validators = undefined;
    }
    if (object.lastValidators !== undefined && object.lastValidators !== null) {
      message.lastValidators = ValidatorSet.fromPartial(object.lastValidators);
    } else {
      message.lastValidators = undefined;
    }
    if (
      object.lastHeightValidatorsChanged !== undefined &&
      object.lastHeightValidatorsChanged !== null
    ) {
      message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged;
    } else {
      message.lastHeightValidatorsChanged = 0;
    }
    if (
      object.consensusParams !== undefined &&
      object.consensusParams !== null
    ) {
      message.consensusParams = ConsensusParams.fromPartial(
        object.consensusParams
      );
    } else {
      message.consensusParams = undefined;
    }
    if (
      object.lastHeightConsensusParamsChanged !== undefined &&
      object.lastHeightConsensusParamsChanged !== null
    ) {
      message.lastHeightConsensusParamsChanged =
        object.lastHeightConsensusParamsChanged;
    } else {
      message.lastHeightConsensusParamsChanged = 0;
    }
    if (
      object.lastResultsHash !== undefined &&
      object.lastResultsHash !== null
    ) {
      message.lastResultsHash = object.lastResultsHash;
    } else {
      message.lastResultsHash = new Uint8Array();
    }
    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = object.appHash;
    } else {
      message.appHash = new Uint8Array();
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
