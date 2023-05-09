import { ethereum } from '@graphprotocol/graph-ts'
import { Block as FTMBlock } from "../generated/schema"


export function handleBlock(block: ethereum.Block): void {
  let id = block.hash
  let entity = new FTMBlock(id)
  entity.blockNumber = block.number
  entity.blockTimeStamp = block.timestamp
  entity.save()
}

