import { Any } from '../../../../google/protobuf/any';
import { Plan } from '../../../../cosmos/upgrade/v1beta1/upgrade';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "ibc.core.client.v1";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
    /** client identifier */
    clientId: string;
    /** client state */
    clientState?: Any;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
    /** consensus state height */
    height?: Height;
    /** consensus state */
    consensusState?: Any;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
    /** client identifier */
    clientId: string;
    /** consensus states and their heights associated with the client */
    consensusStates: ConsensusStateWithHeight[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */
export interface ClientUpdateProposal {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** the client identifier for the client to be updated if the proposal passes */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     */
    substituteClientId: string;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */
export interface UpgradeProposal {
    title: string;
    description: string;
    plan?: Plan;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     */
    upgradedClientState?: Any;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
    /** the revision that the client is currently on */
    revisionNumber: Long;
    /** the height within the given revision */
    revisionHeight: Long;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
    /** allowed_clients defines the list of allowed client state types. */
    allowedClients: string[];
}
export declare const IdentifiedClientState: {
    encode(message: IdentifiedClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedClientState;
    fromJSON(object: any): IdentifiedClientState;
    toJSON(message: IdentifiedClientState): unknown;
    fromPartial<I extends unknown>(object: I): IdentifiedClientState;
};
export declare const ConsensusStateWithHeight: {
    encode(message: ConsensusStateWithHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateWithHeight;
    fromJSON(object: any): ConsensusStateWithHeight;
    toJSON(message: ConsensusStateWithHeight): unknown;
    fromPartial<I extends unknown>(object: I): ConsensusStateWithHeight;
};
export declare const ClientConsensusStates: {
    encode(message: ClientConsensusStates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientConsensusStates;
    fromJSON(object: any): ClientConsensusStates;
    toJSON(message: ClientConsensusStates): unknown;
    fromPartial<I extends unknown>(object: I): ClientConsensusStates;
};
export declare const ClientUpdateProposal: {
    encode(message: ClientUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientUpdateProposal;
    fromJSON(object: any): ClientUpdateProposal;
    toJSON(message: ClientUpdateProposal): unknown;
    fromPartial<I extends unknown>(object: I): ClientUpdateProposal;
};
export declare const UpgradeProposal: {
    encode(message: UpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeProposal;
    fromJSON(object: any): UpgradeProposal;
    toJSON(message: UpgradeProposal): unknown;
    fromPartial<I extends unknown>(object: I): UpgradeProposal;
};
export declare const Height: {
    encode(message: Height, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Height;
    fromJSON(object: any): Height;
    toJSON(message: Height): unknown;
    fromPartial<I extends unknown>(object: I): Height;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends unknown>(object: I): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
