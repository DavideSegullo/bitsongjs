import { Channel, Packet } from './channel';
import { Height } from '../../client/v1/client';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "ibc.core.channel.v1";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel?: Channel;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previousChannelId: string;
    channel?: Channel;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet?: Packet;
    proofCommitment: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet?: Packet;
    proofUnreceived: Uint8Array;
    proofHeight?: Height;
    nextSequenceRecv: Long;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet?: Packet;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight?: Height;
    nextSequenceRecv: Long;
    signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet?: Packet;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
}
export declare const MsgChannelOpenInit: {
    encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit;
    fromJSON(object: any): MsgChannelOpenInit;
    toJSON(message: MsgChannelOpenInit): unknown;
    fromPartial<I extends unknown>(object: I): MsgChannelOpenInit;
};
export declare const MsgChannelOpenInitResponse: {
    encode(_: MsgChannelOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
    fromJSON(_: any): MsgChannelOpenInitResponse;
    toJSON(_: MsgChannelOpenInitResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgChannelOpenInitResponse;
};
export declare const MsgChannelOpenTry: {
    encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry;
    fromJSON(object: any): MsgChannelOpenTry;
    toJSON(message: MsgChannelOpenTry): unknown;
    fromPartial<I extends unknown>(object: I): MsgChannelOpenTry;
};
export declare const MsgChannelOpenTryResponse: {
    encode(_: MsgChannelOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
    fromJSON(_: any): MsgChannelOpenTryResponse;
    toJSON(_: MsgChannelOpenTryResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgChannelOpenTryResponse;
};
export declare const MsgChannelOpenAck: {
    encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck;
    fromJSON(object: any): MsgChannelOpenAck;
    toJSON(message: MsgChannelOpenAck): unknown;
    fromPartial<I extends unknown>(object: I): MsgChannelOpenAck;
};
export declare const MsgChannelOpenAckResponse: {
    encode(_: MsgChannelOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
    fromJSON(_: any): MsgChannelOpenAckResponse;
    toJSON(_: MsgChannelOpenAckResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgChannelOpenAckResponse;
};
export declare const MsgChannelOpenConfirm: {
    encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm;
    fromJSON(object: any): MsgChannelOpenConfirm;
    toJSON(message: MsgChannelOpenConfirm): unknown;
    fromPartial<I extends unknown>(object: I): MsgChannelOpenConfirm;
};
export declare const MsgChannelOpenConfirmResponse: {
    encode(_: MsgChannelOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
    fromJSON(_: any): MsgChannelOpenConfirmResponse;
    toJSON(_: MsgChannelOpenConfirmResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgChannelOpenConfirmResponse;
};
export declare const MsgChannelCloseInit: {
    encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit;
    fromJSON(object: any): MsgChannelCloseInit;
    toJSON(message: MsgChannelCloseInit): unknown;
    fromPartial<I extends unknown>(object: I): MsgChannelCloseInit;
};
export declare const MsgChannelCloseInitResponse: {
    encode(_: MsgChannelCloseInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
    fromJSON(_: any): MsgChannelCloseInitResponse;
    toJSON(_: MsgChannelCloseInitResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgChannelCloseInitResponse;
};
export declare const MsgChannelCloseConfirm: {
    encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm;
    fromJSON(object: any): MsgChannelCloseConfirm;
    toJSON(message: MsgChannelCloseConfirm): unknown;
    fromPartial<I extends unknown>(object: I): MsgChannelCloseConfirm;
};
export declare const MsgChannelCloseConfirmResponse: {
    encode(_: MsgChannelCloseConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
    fromJSON(_: any): MsgChannelCloseConfirmResponse;
    toJSON(_: MsgChannelCloseConfirmResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgChannelCloseConfirmResponse;
};
export declare const MsgRecvPacket: {
    encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket;
    fromJSON(object: any): MsgRecvPacket;
    toJSON(message: MsgRecvPacket): unknown;
    fromPartial<I extends unknown>(object: I): MsgRecvPacket;
};
export declare const MsgRecvPacketResponse: {
    encode(_: MsgRecvPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse;
    fromJSON(_: any): MsgRecvPacketResponse;
    toJSON(_: MsgRecvPacketResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgRecvPacketResponse;
};
export declare const MsgTimeout: {
    encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout;
    fromJSON(object: any): MsgTimeout;
    toJSON(message: MsgTimeout): unknown;
    fromPartial<I extends unknown>(object: I): MsgTimeout;
};
export declare const MsgTimeoutResponse: {
    encode(_: MsgTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse;
    fromJSON(_: any): MsgTimeoutResponse;
    toJSON(_: MsgTimeoutResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgTimeoutResponse;
};
export declare const MsgTimeoutOnClose: {
    encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose;
    fromJSON(object: any): MsgTimeoutOnClose;
    toJSON(message: MsgTimeoutOnClose): unknown;
    fromPartial<I extends unknown>(object: I): MsgTimeoutOnClose;
};
export declare const MsgTimeoutOnCloseResponse: {
    encode(_: MsgTimeoutOnCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
    fromJSON(_: any): MsgTimeoutOnCloseResponse;
    toJSON(_: MsgTimeoutOnCloseResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgTimeoutOnCloseResponse;
};
export declare const MsgAcknowledgement: {
    encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement;
    fromJSON(object: any): MsgAcknowledgement;
    toJSON(message: MsgAcknowledgement): unknown;
    fromPartial<I extends unknown>(object: I): MsgAcknowledgement;
};
export declare const MsgAcknowledgementResponse: {
    encode(_: MsgAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse;
    fromJSON(_: any): MsgAcknowledgementResponse;
    toJSON(_: MsgAcknowledgementResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgAcknowledgementResponse;
};
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
