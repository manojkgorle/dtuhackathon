import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NonceManager, NonceManagerInterface } from "../NonceManager";
type NonceManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NonceManager__factory extends ContractFactory {
    constructor(...args: NonceManagerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NonceManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NonceManager;
    connect(signer: Signer): NonceManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610291806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd28e3b146100465780631b2e01b81461005b57806335567e1a14610095575b600080fd5b61005961005436600461018c565b610119565b005b6100836100693660046101ae565b600060208181529281526040808220909352908152205481565b60405190815260200160405180910390f35b6100836100a33660046101ae565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081526020818152604080832077ffffffffffffffffffffffffffffffffffffffffffffffff85168452909152908190205491901b7fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000161790565b3360009081526020818152604080832077ffffffffffffffffffffffffffffffffffffffffffffffff851684529091528120805491610157836101fc565b919050555050565b803577ffffffffffffffffffffffffffffffffffffffffffffffff8116811461018757600080fd5b919050565b60006020828403121561019e57600080fd5b6101a78261015f565b9392505050565b600080604083850312156101c157600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146101e557600080fd5b91506101f36020840161015f565b90509250929050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610254577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220246a8c46e38a8c9811f06ac9a289595dfd8b2edbad85f35b8e177f24d26fe20664736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint192";
            readonly name: "key";
            readonly type: "uint192";
        }];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint192";
            readonly name: "key";
            readonly type: "uint192";
        }];
        readonly name: "incrementNonce";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint192";
            readonly name: "";
            readonly type: "uint192";
        }];
        readonly name: "nonceSequenceNumber";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): NonceManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonceManager;
}
export {};
