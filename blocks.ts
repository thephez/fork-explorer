import { getblockcount, getblockhash, getblockheader } from "./jsonrpc/index.ts";

import config from "./config/config.ts";

export interface IBlock {
  height: number;
  // hash: string;
  signals: boolean | undefined;
}

const blocks: IBlock[] = [];

export async function bootstrapBlocks() {
  console.log("Bootstrapping block data...");

  const blockCount = await getblockcount();
  const difficultyPeriodStartHeight = blockCount - (blockCount % 2016);
  const difficultyPeriodEndHeight = difficultyPeriodStartHeight + 2016;

  console.log(`Current block height is ${blockCount}`);

  for (let i = difficultyPeriodStartHeight; i < difficultyPeriodEndHeight; i++) {
    if (i > blockCount) {
      blocks.push({
        height: i,
        signals: undefined,
      });
      continue;
    }
    try {
      const blockHash = await getblockhash(i);
      const blockheader = await getblockheader(blockHash);
      blocks.push({
        height: blockheader.height,
        // hash: blockheader.hash,
        signals: (blockheader.version & (config.fork.versionBit + 1)) === config.fork.versionBit + 1,
      });
    } catch (error) {
      console.error("Block boostrapping failed");
      throw error;
    }
  }

  setInterval(async () => {
    console.log("Checking for new blocks");
    const newBlockCount = await getblockcount();
    if (newBlockCount > blockCount) {
      for (let i = blockCount; i < newBlockCount; i++) {
        const blockHash = await getblockhash(i + 1);
        const blockheader = await getblockheader(blockHash);
        blocks[i % 2016].signals = (blockheader.version & (config.fork.versionBit + 1)) === config.fork.versionBit + 1;
      }
    }
  }, 10 * 1000);

  console.log("Done.");
}

export function getBlocks() {
  return blocks;
}
