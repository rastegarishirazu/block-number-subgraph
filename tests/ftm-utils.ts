import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AmarokRouterSet,
  ExecutorSet,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RecoverGasSet,
  RubicTransferCompleted,
  RubicTransferRecovered,
  RubicTransferStarted,
  StargateRouterSet
} from "../generated/ftm/ftm"

export function createAmarokRouterSetEvent(router: Address): AmarokRouterSet {
  let amarokRouterSetEvent = changetype<AmarokRouterSet>(newMockEvent())

  amarokRouterSetEvent.parameters = new Array()

  amarokRouterSetEvent.parameters.push(
    new ethereum.EventParam("router", ethereum.Value.fromAddress(router))
  )

  return amarokRouterSetEvent
}

export function createExecutorSetEvent(executor: Address): ExecutorSet {
  let executorSetEvent = changetype<ExecutorSet>(newMockEvent())

  executorSetEvent.parameters = new Array()

  executorSetEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )

  return executorSetEvent
}

export function createOwnershipTransferRequestedEvent(
  _from: Address,
  _to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRecoverGasSetEvent(recoverGas: BigInt): RecoverGasSet {
  let recoverGasSetEvent = changetype<RecoverGasSet>(newMockEvent())

  recoverGasSetEvent.parameters = new Array()

  recoverGasSetEvent.parameters.push(
    new ethereum.EventParam(
      "recoverGas",
      ethereum.Value.fromUnsignedBigInt(recoverGas)
    )
  )

  return recoverGasSetEvent
}

export function createRubicTransferCompletedEvent(
  transactionId: Bytes,
  receivingAssetId: Address,
  receiver: Address,
  amount: BigInt,
  timestamp: BigInt
): RubicTransferCompleted {
  let rubicTransferCompletedEvent = changetype<RubicTransferCompleted>(
    newMockEvent()
  )

  rubicTransferCompletedEvent.parameters = new Array()

  rubicTransferCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromFixedBytes(transactionId)
    )
  )
  rubicTransferCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "receivingAssetId",
      ethereum.Value.fromAddress(receivingAssetId)
    )
  )
  rubicTransferCompletedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  rubicTransferCompletedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rubicTransferCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return rubicTransferCompletedEvent
}

export function createRubicTransferRecoveredEvent(
  transactionId: Bytes,
  receivingAssetId: Address,
  receiver: Address,
  amount: BigInt,
  timestamp: BigInt
): RubicTransferRecovered {
  let rubicTransferRecoveredEvent = changetype<RubicTransferRecovered>(
    newMockEvent()
  )

  rubicTransferRecoveredEvent.parameters = new Array()

  rubicTransferRecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromFixedBytes(transactionId)
    )
  )
  rubicTransferRecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "receivingAssetId",
      ethereum.Value.fromAddress(receivingAssetId)
    )
  )
  rubicTransferRecoveredEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  rubicTransferRecoveredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rubicTransferRecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return rubicTransferRecoveredEvent
}

export function createRubicTransferStartedEvent(
  bridgeData: ethereum.Tuple
): RubicTransferStarted {
  let rubicTransferStartedEvent = changetype<RubicTransferStarted>(
    newMockEvent()
  )

  rubicTransferStartedEvent.parameters = new Array()

  rubicTransferStartedEvent.parameters.push(
    new ethereum.EventParam("bridgeData", ethereum.Value.fromTuple(bridgeData))
  )

  return rubicTransferStartedEvent
}

export function createStargateRouterSetEvent(
  router: Address
): StargateRouterSet {
  let stargateRouterSetEvent = changetype<StargateRouterSet>(newMockEvent())

  stargateRouterSetEvent.parameters = new Array()

  stargateRouterSetEvent.parameters.push(
    new ethereum.EventParam("router", ethereum.Value.fromAddress(router))
  )

  return stargateRouterSetEvent
}
