/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Contract,
  ContractInterface,
} from "../../implementations/Contract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bar",
        type: "uint256",
      },
    ],
    name: "aFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "foo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805560ed806100236000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063b4e857c2146037578063c2985578146048575b600080fd5b604660423660046079565b6062565b005b605060005481565b60405190815260200160405180910390f35b80600080828254607191906091565b909155505050565b600060208284031215608a57600080fd5b5035919050565b8082018082111560b157634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220d729605ffbdb6d8dc63a829417280856c9d251755466963eacda7b44b82de67b64736f6c63430008110033";

type ContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Contract__factory extends ContractFactory {
  constructor(...args: ContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Contract> {
    return super.deploy(overrides || {}) as Promise<Contract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Contract {
    return super.attach(address) as Contract;
  }
  override connect(signer: Signer): Contract__factory {
    return super.connect(signer) as Contract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractInterface {
    return new utils.Interface(_abi) as ContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Contract {
    return new Contract(address, _abi, signerOrProvider) as Contract;
  }
}
