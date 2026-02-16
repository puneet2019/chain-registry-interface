/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../../tendermint/crypto/keys";
import { Vote, Proposal } from "../../tendermint/types/types";

export const protobufPackage = "tendermint.privval";

export enum Errors {
  ERRORS_UNKNOWN = 0,
  ERRORS_UNEXPECTED_RESPONSE = 1,
  ERRORS_NO_CONNECTION = 2,
  ERRORS_CONNECTION_TIMEOUT = 3,
  ERRORS_READ_TIMEOUT = 4,
  ERRORS_WRITE_TIMEOUT = 5,
  UNRECOGNIZED = -1,
}

export function errorsFromJSON(object: any): Errors {
  switch (object) {
    case 0:
    case "ERRORS_UNKNOWN":
      return Errors.ERRORS_UNKNOWN;
    case 1:
    case "ERRORS_UNEXPECTED_RESPONSE":
      return Errors.ERRORS_UNEXPECTED_RESPONSE;
    case 2:
    case "ERRORS_NO_CONNECTION":
      return Errors.ERRORS_NO_CONNECTION;
    case 3:
    case "ERRORS_CONNECTION_TIMEOUT":
      return Errors.ERRORS_CONNECTION_TIMEOUT;
    case 4:
    case "ERRORS_READ_TIMEOUT":
      return Errors.ERRORS_READ_TIMEOUT;
    case 5:
    case "ERRORS_WRITE_TIMEOUT":
      return Errors.ERRORS_WRITE_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Errors.UNRECOGNIZED;
  }
}

export function errorsToJSON(object: Errors): string {
  switch (object) {
    case Errors.ERRORS_UNKNOWN:
      return "ERRORS_UNKNOWN";
    case Errors.ERRORS_UNEXPECTED_RESPONSE:
      return "ERRORS_UNEXPECTED_RESPONSE";
    case Errors.ERRORS_NO_CONNECTION:
      return "ERRORS_NO_CONNECTION";
    case Errors.ERRORS_CONNECTION_TIMEOUT:
      return "ERRORS_CONNECTION_TIMEOUT";
    case Errors.ERRORS_READ_TIMEOUT:
      return "ERRORS_READ_TIMEOUT";
    case Errors.ERRORS_WRITE_TIMEOUT:
      return "ERRORS_WRITE_TIMEOUT";
    default:
      return "UNKNOWN";
  }
}

export interface RemoteSignerError {
  code: number;
  description: string;
}

/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
  chainId: string;
}

/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
  pubKey: PublicKey | undefined;
  error: RemoteSignerError | undefined;
}

/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
  vote: Vote | undefined;
  chainId: string;
}

/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
  vote: Vote | undefined;
  error: RemoteSignerError | undefined;
}

/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
  proposal: Proposal | undefined;
  chainId: string;
}

/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
  proposal: Proposal | undefined;
  error: RemoteSignerError | undefined;
}

/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {}

/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {}

export interface Message {
  pubKeyRequest: PubKeyRequest | undefined;
  pubKeyResponse: PubKeyResponse | undefined;
  signVoteRequest: SignVoteRequest | undefined;
  signedVoteResponse: SignedVoteResponse | undefined;
  signProposalRequest: SignProposalRequest | undefined;
  signedProposalResponse: SignedProposalResponse | undefined;
  pingRequest: PingRequest | undefined;
  pingResponse: PingResponse | undefined;
}

const baseRemoteSignerError: object = { code: 0, description: "" };

export const RemoteSignerError = {
  encode(
    message: RemoteSignerError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSignerError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoteSignerError } as RemoteSignerError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoteSignerError {
    const message = { ...baseRemoteSignerError } as RemoteSignerError;
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: RemoteSignerError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoteSignerError>): RemoteSignerError {
    const message = { ...baseRemoteSignerError } as RemoteSignerError;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const basePubKeyRequest: object = { chainId: "" };

export const PubKeyRequest = {
  encode(
    message: PubKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePubKeyRequest } as PubKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PubKeyRequest {
    const message = { ...basePubKeyRequest } as PubKeyRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: PubKeyRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<PubKeyRequest>): PubKeyRequest {
    const message = { ...basePubKeyRequest } as PubKeyRequest;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const basePubKeyResponse: object = {};

export const PubKeyResponse = {
  encode(
    message: PubKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(
        message.error,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePubKeyResponse } as PubKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PubKeyResponse {
    const message = { ...basePubKeyResponse } as PubKeyResponse;
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromJSON(object.pubKey);
    } else {
      message.pubKey = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = RemoteSignerError.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  toJSON(message: PubKeyResponse): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error
        ? RemoteSignerError.toJSON(message.error)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PubKeyResponse>): PubKeyResponse {
    const message = { ...basePubKeyResponse } as PubKeyResponse;
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    } else {
      message.pubKey = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = RemoteSignerError.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },
};

const baseSignVoteRequest: object = { chainId: "" };

export const SignVoteRequest = {
  encode(
    message: SignVoteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignVoteRequest } as SignVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignVoteRequest {
    const message = { ...baseSignVoteRequest } as SignVoteRequest;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: SignVoteRequest): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<SignVoteRequest>): SignVoteRequest {
    const message = { ...baseSignVoteRequest } as SignVoteRequest;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseSignedVoteResponse: object = {};

export const SignedVoteResponse = {
  encode(
    message: SignedVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(
        message.error,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedVoteResponse } as SignedVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedVoteResponse {
    const message = { ...baseSignedVoteResponse } as SignedVoteResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = RemoteSignerError.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  toJSON(message: SignedVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.error !== undefined &&
      (obj.error = message.error
        ? RemoteSignerError.toJSON(message.error)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedVoteResponse>): SignedVoteResponse {
    const message = { ...baseSignedVoteResponse } as SignedVoteResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = RemoteSignerError.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },
};

const baseSignProposalRequest: object = { chainId: "" };

export const SignProposalRequest = {
  encode(
    message: SignProposalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignProposalRequest } as SignProposalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignProposalRequest {
    const message = { ...baseSignProposalRequest } as SignProposalRequest;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    return message;
  },

  toJSON(message: SignProposalRequest): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<SignProposalRequest>): SignProposalRequest {
    const message = { ...baseSignProposalRequest } as SignProposalRequest;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    return message;
  },
};

const baseSignedProposalResponse: object = {};

export const SignedProposalResponse = {
  encode(
    message: SignedProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(
        message.error,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SignedProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedProposalResponse } as SignedProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedProposalResponse {
    const message = { ...baseSignedProposalResponse } as SignedProposalResponse;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = RemoteSignerError.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },

  toJSON(message: SignedProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error
        ? RemoteSignerError.toJSON(message.error)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SignedProposalResponse>
  ): SignedProposalResponse {
    const message = { ...baseSignedProposalResponse } as SignedProposalResponse;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = RemoteSignerError.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    return message;
  },
};

const basePingRequest: object = {};

export const PingRequest = {
  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePingRequest } as PingRequest;
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

  fromJSON(_: any): PingRequest {
    const message = { ...basePingRequest } as PingRequest;
    return message;
  },

  toJSON(_: PingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PingRequest>): PingRequest {
    const message = { ...basePingRequest } as PingRequest;
    return message;
  },
};

const basePingResponse: object = {};

export const PingResponse = {
  encode(
    _: PingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePingResponse } as PingResponse;
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

  fromJSON(_: any): PingResponse {
    const message = { ...basePingResponse } as PingResponse;
    return message;
  },

  toJSON(_: PingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PingResponse>): PingResponse {
    const message = { ...basePingResponse } as PingResponse;
    return message;
  },
};

const baseMessage: object = {};

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubKeyRequest !== undefined) {
      PubKeyRequest.encode(
        message.pubKeyRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pubKeyResponse !== undefined) {
      PubKeyResponse.encode(
        message.pubKeyResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.signVoteRequest !== undefined) {
      SignVoteRequest.encode(
        message.signVoteRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.signedVoteResponse !== undefined) {
      SignedVoteResponse.encode(
        message.signedVoteResponse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.signProposalRequest !== undefined) {
      SignProposalRequest.encode(
        message.signProposalRequest,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.signedProposalResponse !== undefined) {
      SignedProposalResponse.encode(
        message.signedProposalResponse,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.pingRequest !== undefined) {
      PingRequest.encode(
        message.pingRequest,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.pingResponse !== undefined) {
      PingResponse.encode(
        message.pingResponse,
        writer.uint32(66).fork()
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
          message.pubKeyRequest = PubKeyRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.pubKeyResponse = PubKeyResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.signVoteRequest = SignVoteRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.signedVoteResponse = SignedVoteResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.signProposalRequest = SignProposalRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.signedProposalResponse = SignedProposalResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.pingRequest = PingRequest.decode(reader, reader.uint32());
          break;
        case 8:
          message.pingResponse = PingResponse.decode(reader, reader.uint32());
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
    if (object.pubKeyRequest !== undefined && object.pubKeyRequest !== null) {
      message.pubKeyRequest = PubKeyRequest.fromJSON(object.pubKeyRequest);
    } else {
      message.pubKeyRequest = undefined;
    }
    if (object.pubKeyResponse !== undefined && object.pubKeyResponse !== null) {
      message.pubKeyResponse = PubKeyResponse.fromJSON(object.pubKeyResponse);
    } else {
      message.pubKeyResponse = undefined;
    }
    if (
      object.signVoteRequest !== undefined &&
      object.signVoteRequest !== null
    ) {
      message.signVoteRequest = SignVoteRequest.fromJSON(
        object.signVoteRequest
      );
    } else {
      message.signVoteRequest = undefined;
    }
    if (
      object.signedVoteResponse !== undefined &&
      object.signedVoteResponse !== null
    ) {
      message.signedVoteResponse = SignedVoteResponse.fromJSON(
        object.signedVoteResponse
      );
    } else {
      message.signedVoteResponse = undefined;
    }
    if (
      object.signProposalRequest !== undefined &&
      object.signProposalRequest !== null
    ) {
      message.signProposalRequest = SignProposalRequest.fromJSON(
        object.signProposalRequest
      );
    } else {
      message.signProposalRequest = undefined;
    }
    if (
      object.signedProposalResponse !== undefined &&
      object.signedProposalResponse !== null
    ) {
      message.signedProposalResponse = SignedProposalResponse.fromJSON(
        object.signedProposalResponse
      );
    } else {
      message.signedProposalResponse = undefined;
    }
    if (object.pingRequest !== undefined && object.pingRequest !== null) {
      message.pingRequest = PingRequest.fromJSON(object.pingRequest);
    } else {
      message.pingRequest = undefined;
    }
    if (object.pingResponse !== undefined && object.pingResponse !== null) {
      message.pingResponse = PingResponse.fromJSON(object.pingResponse);
    } else {
      message.pingResponse = undefined;
    }
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.pubKeyRequest !== undefined &&
      (obj.pubKeyRequest = message.pubKeyRequest
        ? PubKeyRequest.toJSON(message.pubKeyRequest)
        : undefined);
    message.pubKeyResponse !== undefined &&
      (obj.pubKeyResponse = message.pubKeyResponse
        ? PubKeyResponse.toJSON(message.pubKeyResponse)
        : undefined);
    message.signVoteRequest !== undefined &&
      (obj.signVoteRequest = message.signVoteRequest
        ? SignVoteRequest.toJSON(message.signVoteRequest)
        : undefined);
    message.signedVoteResponse !== undefined &&
      (obj.signedVoteResponse = message.signedVoteResponse
        ? SignedVoteResponse.toJSON(message.signedVoteResponse)
        : undefined);
    message.signProposalRequest !== undefined &&
      (obj.signProposalRequest = message.signProposalRequest
        ? SignProposalRequest.toJSON(message.signProposalRequest)
        : undefined);
    message.signedProposalResponse !== undefined &&
      (obj.signedProposalResponse = message.signedProposalResponse
        ? SignedProposalResponse.toJSON(message.signedProposalResponse)
        : undefined);
    message.pingRequest !== undefined &&
      (obj.pingRequest = message.pingRequest
        ? PingRequest.toJSON(message.pingRequest)
        : undefined);
    message.pingResponse !== undefined &&
      (obj.pingResponse = message.pingResponse
        ? PingResponse.toJSON(message.pingResponse)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    if (object.pubKeyRequest !== undefined && object.pubKeyRequest !== null) {
      message.pubKeyRequest = PubKeyRequest.fromPartial(object.pubKeyRequest);
    } else {
      message.pubKeyRequest = undefined;
    }
    if (object.pubKeyResponse !== undefined && object.pubKeyResponse !== null) {
      message.pubKeyResponse = PubKeyResponse.fromPartial(
        object.pubKeyResponse
      );
    } else {
      message.pubKeyResponse = undefined;
    }
    if (
      object.signVoteRequest !== undefined &&
      object.signVoteRequest !== null
    ) {
      message.signVoteRequest = SignVoteRequest.fromPartial(
        object.signVoteRequest
      );
    } else {
      message.signVoteRequest = undefined;
    }
    if (
      object.signedVoteResponse !== undefined &&
      object.signedVoteResponse !== null
    ) {
      message.signedVoteResponse = SignedVoteResponse.fromPartial(
        object.signedVoteResponse
      );
    } else {
      message.signedVoteResponse = undefined;
    }
    if (
      object.signProposalRequest !== undefined &&
      object.signProposalRequest !== null
    ) {
      message.signProposalRequest = SignProposalRequest.fromPartial(
        object.signProposalRequest
      );
    } else {
      message.signProposalRequest = undefined;
    }
    if (
      object.signedProposalResponse !== undefined &&
      object.signedProposalResponse !== null
    ) {
      message.signedProposalResponse = SignedProposalResponse.fromPartial(
        object.signedProposalResponse
      );
    } else {
      message.signedProposalResponse = undefined;
    }
    if (object.pingRequest !== undefined && object.pingRequest !== null) {
      message.pingRequest = PingRequest.fromPartial(object.pingRequest);
    } else {
      message.pingRequest = undefined;
    }
    if (object.pingResponse !== undefined && object.pingResponse !== null) {
      message.pingResponse = PingResponse.fromPartial(object.pingResponse);
    } else {
      message.pingResponse = undefined;
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
