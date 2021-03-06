/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NftInterface extends ethers.utils.Interface {
  functions: {
    "a_tk()": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
    "withdrawBnb()": FunctionFragment;
    "create_nft(string,uint256,uint256)": FunctionFragment;
    "get_nft_list_size()": FunctionFragment;
    "get_nft(uint256)": FunctionFragment;
    "mint_fee(uint256)": FunctionFragment;
    "mint(uint256,uint256,uint256)": FunctionFragment;
    "buy_fee(uint256)": FunctionFragment;
    "loyalty(uint256)": FunctionFragment;
    "buy(address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "a_tk", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "withdrawBnb",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "create_nft",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_nft_list_size",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_nft",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint_fee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy_fee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "loyalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "a_tk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBnb",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create_nft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_nft_list_size",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint_fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy_fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "loyalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class Nft extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NftInterface;

  functions: {
    a_tk(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\{id\}` substring with the actual token type ID.
     */
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    withdrawBnb(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    create_nft(
      _hash: string,
      a_price: BigNumberish,
      b_price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get_nft_list_size(overrides?: CallOverrides): Promise<[BigNumber]>;

    get_nft(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string] & {
        _hash: string;
        a_price: BigNumber;
        b_price: BigNumber;
        creator: string;
      }
    >;

    mint_fee(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mint(
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy_fee(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    loyalty(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buy(
      from: string,
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  a_tk(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
   */
  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
   */
  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * See {IERC1155-isApprovedForAll}.
   */
  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC1155-safeBatchTransferFrom}.
   */
  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC1155-safeTransferFrom}.
   */
  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC1155-setApprovalForAll}.
   */
  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\{id\}` substring with the actual token type ID.
   */
  uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  withdrawBnb(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  create_nft(
    _hash: string,
    a_price: BigNumberish,
    b_price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get_nft_list_size(overrides?: CallOverrides): Promise<BigNumber>;

  get_nft(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, string] & {
      _hash: string;
      a_price: BigNumber;
      b_price: BigNumber;
      creator: string;
    }
  >;

  mint_fee(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    nft_id: BigNumberish,
    amount: BigNumberish,
    tk_id: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy_fee(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  loyalty(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  buy(
    from: string,
    nft_id: BigNumberish,
    amount: BigNumberish,
    tk_id: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    a_tk(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\{id\}` substring with the actual token type ID.
     */
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    withdrawBnb(overrides?: CallOverrides): Promise<void>;

    create_nft(
      _hash: string,
      a_price: BigNumberish,
      b_price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_nft_list_size(overrides?: CallOverrides): Promise<BigNumber>;

    get_nft(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string] & {
        _hash: string;
        a_price: BigNumber;
        b_price: BigNumber;
        creator: string;
      }
    >;

    mint_fee(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy_fee(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    loyalty(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      from: string,
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    URI(
      value?: null,
      id?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;
  };

  estimateGas: {
    a_tk(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\{id\}` substring with the actual token type ID.
     */
    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawBnb(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    create_nft(
      _hash: string,
      a_price: BigNumberish,
      b_price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get_nft_list_size(overrides?: CallOverrides): Promise<BigNumber>;

    get_nft(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mint_fee(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy_fee(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    loyalty(price: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      from: string,
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    a_tk(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-isApprovedForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-safeBatchTransferFrom}.
     */
    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-safeTransferFrom}.
     */
    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC1155MetadataURI-uri}. This implementation returns the same URI for *all* token types. It relies on the token type ID substitution mechanism https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP]. Clients calling this function must replace the `\{id\}` substring with the actual token type ID.
     */
    uri(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawBnb(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    create_nft(
      _hash: string,
      a_price: BigNumberish,
      b_price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get_nft_list_size(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_nft(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint_fee(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy_fee(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    loyalty(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      from: string,
      nft_id: BigNumberish,
      amount: BigNumberish,
      tk_id: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
