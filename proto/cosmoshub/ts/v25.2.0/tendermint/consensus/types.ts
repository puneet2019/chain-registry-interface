/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  SignedMsgType,
  PartSetHeader,
  Proposal as Proposal1,
  Part,
  Vote as Vote2,
  BlockID,
  signedMsgTypeFromJSON,
  signedMsgTypeToJSON,
} from "../../tendermint/types/types";
import { BitArray } from "../../tendermint/libs/bits/types";

export const protobufPackage = "tendermint.consensus";

/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStep {
  height: number;
  round: number;
  step: number;
  secondsSinceStartTime: number;
  lastCommitRound: number;
}

/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlock {
  height: number;
  round: number;
  blockPartSetHeader: PartSetHeader | undefined;
  blockParts: BitArray | undefined;
  isCommit: boolean;
}

/** Proposal is sent when a new block is proposed. */
export interface Proposal {
  proposal: Proposal1 | undefined;
}

/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOL {
  height: number;
  proposalPolRound: number;
  proposalPol: BitArray | undefined;
}

/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPart {
  height: number;
  round: number;
  part: Part | undefined;
}

/** Vote is sent when voting for a proposal (or lack thereof). */
export interface Vote {
  vote: Vote2 | undefined;
}

/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVote {
  height: number;
  round: number;
  type: SignedMsgType;
  index: number;
}

/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23 {
  height: number;
  round: number;
  type: SignedMsgType;
  blockId: BlockID | undefined;
}

/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBits {
  height: number;
  round: number;
  type: SignedMsgType;
  blockId: BlockID | undefined;
  votes: BitArray | undefined;
}

export interface Message {
  newRoundStep: NewRoundStep | undefined;
  newValidBlock: NewValidBlock | undefined;
  proposal: Proposal | undefined;
  proposalPol: ProposalPOL | undefined;
  blockPart: BlockPart | undefined;
  vote: Vote | undefined;
  hasVote: HasVote | undefined;
  voteSetMaj23: VoteSetMaj23 | undefined;
  voteSetBits: VoteSetBits | undefined;
}

const baseNewRoundStep: object = {
  height: 0,
  round: 0,
  step: 0,
  secondsSinceStartTime: 0,
  lastCommitRound: 0,
};

export const NewRoundStep = {
  encode(
    message: NewRoundStep,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(24).uint32(message.step);
    }
    if (message.secondsSinceStartTime !== 0) {
      writer.uint32(32).int64(message.secondsSinceStartTime);
    }
    if (message.lastCommitRound !== 0) {
      writer.uint32(40).int32(message.lastCommitRound);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewRoundStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewRoundStep } as NewRoundStep;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.step = reader.uint32();
          break;
        case 4:
          message.secondsSinceStartTime = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.lastCommitRound = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewRoundStep {
    const message = { ...baseNewRoundStep } as NewRoundStep;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = Number(object.step);
    } else {
      message.step = 0;
    }
    if (
      object.secondsSinceStartTime !== undefined &&
      object.secondsSinceStartTime !== null
    ) {
      message.secondsSinceStartTime = Number(object.secondsSinceStartTime);
    } else {
      message.secondsSinceStartTime = 0;
    }
    if (
      object.lastCommitRound !== undefined &&
      object.lastCommitRound !== null
    ) {
      message.lastCommitRound = Number(object.lastCommitRound);
    } else {
      message.lastCommitRound = 0;
    }
    return message;
  },

  toJSON(message: NewRoundStep): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.step !== undefined && (obj.step = message.step);
    message.secondsSinceStartTime !== undefined &&
      (obj.secondsSinceStartTime = message.secondsSinceStartTime);
    message.lastCommitRound !== undefined &&
      (obj.lastCommitRound = message.lastCommitRound);
    return obj;
  },

  fromPartial(object: DeepPartial<NewRoundStep>): NewRoundStep {
    const message = { ...baseNewRoundStep } as NewRoundStep;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = object.step;
    } else {
      message.step = 0;
    }
    if (
      object.secondsSinceStartTime !== undefined &&
      object.secondsSinceStartTime !== null
    ) {
      message.secondsSinceStartTime = object.secondsSinceStartTime;
    } else {
      message.secondsSinceStartTime = 0;
    }
    if (
      object.lastCommitRound !== undefined &&
      object.lastCommitRound !== null
    ) {
      message.lastCommitRound = object.lastCommitRound;
    } else {
      message.lastCommitRound = 0;
    }
    return message;
  },
};

const baseNewValidBlock: object = { height: 0, round: 0, isCommit: false };

export const NewValidBlock = {
  encode(
    message: NewValidBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockPartSetHeader !== undefined) {
      PartSetHeader.encode(
        message.blockPartSetHeader,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.blockParts !== undefined) {
      BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
    }
    if (message.isCommit === true) {
      writer.uint32(40).bool(message.isCommit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewValidBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewValidBlock } as NewValidBlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockPartSetHeader = PartSetHeader.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.blockParts = BitArray.decode(reader, reader.uint32());
          break;
        case 5:
          message.isCommit = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewValidBlock {
    const message = { ...baseNewValidBlock } as NewValidBlock;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (
      object.blockPartSetHeader !== undefined &&
      object.blockPartSetHeader !== null
    ) {
      message.blockPartSetHeader = PartSetHeader.fromJSON(
        object.blockPartSetHeader
      );
    } else {
      message.blockPartSetHeader = undefined;
    }
    if (object.blockParts !== undefined && object.blockParts !== null) {
      message.blockParts = BitArray.fromJSON(object.blockParts);
    } else {
      message.blockParts = undefined;
    }
    if (object.isCommit !== undefined && object.isCommit !== null) {
      message.isCommit = Boolean(object.isCommit);
    } else {
      message.isCommit = false;
    }
    return message;
  },

  toJSON(message: NewValidBlock): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.blockPartSetHeader !== undefined &&
      (obj.blockPartSetHeader = message.blockPartSetHeader
        ? PartSetHeader.toJSON(message.blockPartSetHeader)
        : undefined);
    message.blockParts !== undefined &&
      (obj.blockParts = message.blockParts
        ? BitArray.toJSON(message.blockParts)
        : undefined);
    message.isCommit !== undefined && (obj.isCommit = message.isCommit);
    return obj;
  },

  fromPartial(object: DeepPartial<NewValidBlock>): NewValidBlock {
    const message = { ...baseNewValidBlock } as NewValidBlock;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (
      object.blockPartSetHeader !== undefined &&
      object.blockPartSetHeader !== null
    ) {
      message.blockPartSetHeader = PartSetHeader.fromPartial(
        object.blockPartSetHeader
      );
    } else {
      message.blockPartSetHeader = undefined;
    }
    if (object.blockParts !== undefined && object.blockParts !== null) {
      message.blockParts = BitArray.fromPartial(object.blockParts);
    } else {
      message.blockParts = undefined;
    }
    if (object.isCommit !== undefined && object.isCommit !== null) {
      message.isCommit = object.isCommit;
    } else {
      message.isCommit = false;
    }
    return message;
  },
};

const baseProposal: object = {};

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal1.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    const message = { ...baseProposal } as Proposal;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal1.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal1.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = { ...baseProposal } as Proposal;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal1.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },
};

const baseProposalPOL: object = { height: 0, proposalPolRound: 0 };

export const ProposalPOL = {
  encode(
    message: ProposalPOL,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.proposalPolRound !== 0) {
      writer.uint32(16).int32(message.proposalPolRound);
    }
    if (message.proposalPol !== undefined) {
      BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalPOL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposalPOL } as ProposalPOL;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.proposalPolRound = reader.int32();
          break;
        case 3:
          message.proposalPol = BitArray.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalPOL {
    const message = { ...baseProposalPOL } as ProposalPOL;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (
      object.proposalPolRound !== undefined &&
      object.proposalPolRound !== null
    ) {
      message.proposalPolRound = Number(object.proposalPolRound);
    } else {
      message.proposalPolRound = 0;
    }
    if (object.proposalPol !== undefined && object.proposalPol !== null) {
      message.proposalPol = BitArray.fromJSON(object.proposalPol);
    } else {
      message.proposalPol = undefined;
    }
    return message;
  },

  toJSON(message: ProposalPOL): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.proposalPolRound !== undefined &&
      (obj.proposalPolRound = message.proposalPolRound);
    message.proposalPol !== undefined &&
      (obj.proposalPol = message.proposalPol
        ? BitArray.toJSON(message.proposalPol)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProposalPOL>): ProposalPOL {
    const message = { ...baseProposalPOL } as ProposalPOL;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (
      object.proposalPolRound !== undefined &&
      object.proposalPolRound !== null
    ) {
      message.proposalPolRound = object.proposalPolRound;
    } else {
      message.proposalPolRound = 0;
    }
    if (object.proposalPol !== undefined && object.proposalPol !== null) {
      message.proposalPol = BitArray.fromPartial(object.proposalPol);
    } else {
      message.proposalPol = undefined;
    }
    return message;
  },
};

const baseBlockPart: object = { height: 0, round: 0 };

export const BlockPart = {
  encode(
    message: BlockPart,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.part !== undefined) {
      Part.encode(message.part, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockPart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockPart } as BlockPart;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.part = Part.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockPart {
    const message = { ...baseBlockPart } as BlockPart;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.part !== undefined && object.part !== null) {
      message.part = Part.fromJSON(object.part);
    } else {
      message.part = undefined;
    }
    return message;
  },

  toJSON(message: BlockPart): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.part !== undefined &&
      (obj.part = message.part ? Part.toJSON(message.part) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockPart>): BlockPart {
    const message = { ...baseBlockPart } as BlockPart;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.part !== undefined && object.part !== null) {
      message.part = Part.fromPartial(object.part);
    } else {
      message.part = undefined;
    }
    return message;
  },
};

const baseVote: object = {};

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote2.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote2.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote2.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote2.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
};

const baseHasVote: object = { height: 0, round: 0, type: 0, index: 0 };

export const HasVote = {
  encode(
    message: HasVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.index !== 0) {
      writer.uint32(32).int32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HasVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHasVote } as HasVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.index = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HasVote {
    const message = { ...baseHasVote } as HasVote;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    return message;
  },

  toJSON(message: HasVote): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.type !== undefined &&
      (obj.type = signedMsgTypeToJSON(message.type));
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<HasVote>): HasVote {
    const message = { ...baseHasVote } as HasVote;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    return message;
  },
};

const baseVoteSetMaj23: object = { height: 0, round: 0, type: 0 };

export const VoteSetMaj23 = {
  encode(
    message: VoteSetMaj23,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetMaj23 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteSetMaj23 } as VoteSetMaj23;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteSetMaj23 {
    const message = { ...baseVoteSetMaj23 } as VoteSetMaj23;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }
    return message;
  },

  toJSON(message: VoteSetMaj23): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.type !== undefined &&
      (obj.type = signedMsgTypeToJSON(message.type));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? BlockID.toJSON(message.blockId)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteSetMaj23>): VoteSetMaj23 {
    const message = { ...baseVoteSetMaj23 } as VoteSetMaj23;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }
    return message;
  },
};

const baseVoteSetBits: object = { height: 0, round: 0, type: 0 };

export const VoteSetBits = {
  encode(
    message: VoteSetBits,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.votes !== undefined) {
      BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetBits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteSetBits } as VoteSetBits;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.votes = BitArray.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteSetBits {
    const message = { ...baseVoteSetBits } as VoteSetBits;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = BitArray.fromJSON(object.votes);
    } else {
      message.votes = undefined;
    }
    return message;
  },

  toJSON(message: VoteSetBits): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.round !== undefined && (obj.round = message.round);
    message.type !== undefined &&
      (obj.type = signedMsgTypeToJSON(message.type));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? BlockID.toJSON(message.blockId)
        : undefined);
    message.votes !== undefined &&
      (obj.votes = message.votes ? BitArray.toJSON(message.votes) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteSetBits>): VoteSetBits {
    const message = { ...baseVoteSetBits } as VoteSetBits;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = BitArray.fromPartial(object.votes);
    } else {
      message.votes = undefined;
    }
    return message;
  },
};

const baseMessage: object = {};

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newRoundStep !== undefined) {
      NewRoundStep.encode(
        message.newRoundStep,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.newValidBlock !== undefined) {
      NewValidBlock.encode(
        message.newValidBlock,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
    }
    if (message.proposalPol !== undefined) {
      ProposalPOL.encode(
        message.proposalPol,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.blockPart !== undefined) {
      BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
    }
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
    }
    if (message.hasVote !== undefined) {
      HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
    }
    if (message.voteSetMaj23 !== undefined) {
      VoteSetMaj23.encode(
        message.voteSetMaj23,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.voteSetBits !== undefined) {
      VoteSetBits.encode(
        message.voteSetBits,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessage } as Message;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newRoundStep = NewRoundStep.decode(reader, reader.uint32());
          break;
        case 2:
          message.newValidBlock = NewValidBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 4:
          message.proposalPol = ProposalPOL.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockPart = BlockPart.decode(reader, reader.uint32());
          break;
        case 6:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 7:
          message.hasVote = HasVote.decode(reader, reader.uint32());
          break;
        case 8:
          message.voteSetMaj23 = VoteSetMaj23.decode(reader, reader.uint32());
          break;
        case 9:
          message.voteSetBits = VoteSetBits.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    if (object.newRoundStep !== undefined && object.newRoundStep !== null) {
      message.newRoundStep = NewRoundStep.fromJSON(object.newRoundStep);
    } else {
      message.newRoundStep = undefined;
    }
    if (object.newValidBlock !== undefined && object.newValidBlock !== null) {
      message.newValidBlock = NewValidBlock.fromJSON(object.newValidBlock);
    } else {
      message.newValidBlock = undefined;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    if (object.proposalPol !== undefined && object.proposalPol !== null) {
      message.proposalPol = ProposalPOL.fromJSON(object.proposalPol);
    } else {
      message.proposalPol = undefined;
    }
    if (object.blockPart !== undefined && object.blockPart !== null) {
      message.blockPart = BlockPart.fromJSON(object.blockPart);
    } else {
      message.blockPart = undefined;
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    if (object.hasVote !== undefined && object.hasVote !== null) {
      message.hasVote = HasVote.fromJSON(object.hasVote);
    } else {
      message.hasVote = undefined;
    }
    if (object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null) {
      message.voteSetMaj23 = VoteSetMaj23.fromJSON(object.voteSetMaj23);
    } else {
      message.voteSetMaj23 = undefined;
    }
    if (object.voteSetBits !== undefined && object.voteSetBits !== null) {
      message.voteSetBits = VoteSetBits.fromJSON(object.voteSetBits);
    } else {
      message.voteSetBits = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.newRoundStep !== undefined &&
      (obj.newRoundStep = message.newRoundStep
        ? NewRoundStep.toJSON(message.newRoundStep)
        : undefined);
    message.newValidBlock !== undefined &&
      (obj.newValidBlock = message.newValidBlock
        ? NewValidBlock.toJSON(message.newValidBlock)
        : undefined);
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    message.proposalPol !== undefined &&
      (obj.proposalPol = message.proposalPol
        ? ProposalPOL.toJSON(message.proposalPol)
        : undefined);
    message.blockPart !== undefined &&
      (obj.blockPart = message.blockPart
        ? BlockPart.toJSON(message.blockPart)
        : undefined);
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.hasVote !== undefined &&
      (obj.hasVote = message.hasVote
        ? HasVote.toJSON(message.hasVote)
        : undefined);
    message.voteSetMaj23 !== undefined &&
      (obj.voteSetMaj23 = message.voteSetMaj23
        ? VoteSetMaj23.toJSON(message.voteSetMaj23)
        : undefined);
    message.voteSetBits !== undefined &&
      (obj.voteSetBits = message.voteSetBits
        ? VoteSetBits.toJSON(message.voteSetBits)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.newRoundStep !== undefined && object.newRoundStep !== null) {
      message.newRoundStep = NewRoundStep.fromPartial(object.newRoundStep);
    } else {
      message.newRoundStep = undefined;
    }
    if (object.newValidBlock !== undefined && object.newValidBlock !== null) {
      message.newValidBlock = NewValidBlock.fromPartial(object.newValidBlock);
    } else {
      message.newValidBlock = undefined;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    if (object.proposalPol !== undefined && object.proposalPol !== null) {
      message.proposalPol = ProposalPOL.fromPartial(object.proposalPol);
    } else {
      message.proposalPol = undefined;
    }
    if (object.blockPart !== undefined && object.blockPart !== null) {
      message.blockPart = BlockPart.fromPartial(object.blockPart);
    } else {
      message.blockPart = undefined;
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    if (object.hasVote !== undefined && object.hasVote !== null) {
      message.hasVote = HasVote.fromPartial(object.hasVote);
    } else {
      message.hasVote = undefined;
    }
    if (object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null) {
      message.voteSetMaj23 = VoteSetMaj23.fromPartial(object.voteSetMaj23);
    } else {
      message.voteSetMaj23 = undefined;
    }
    if (object.voteSetBits !== undefined && object.voteSetBits !== null) {
      message.voteSetBits = VoteSetBits.fromPartial(object.voteSetBits);
    } else {
      message.voteSetBits = undefined;
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
