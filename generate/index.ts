import { setupPeriod } from "../backend/blocks/index.ts";

const periodString = Deno.args[0];

if (!periodString) {
  console.log("Usage: [period]");
  Deno.exit(0);
}

const period = Number.parseInt(periodString);
console.log("Period: "+ period);

if (Number.isNaN(period)) {
  console.log("Error: Invalid period: " + periodString + " (evaluated as " + period + ")");
  Deno.exit(1);
}

const difficultyPeriodStartHeight = period * 4032;
const difficultyPeriodEndHeight = difficultyPeriodStartHeight + 4032;

const blocks = await setupPeriod(period * 4032 + 4032, difficultyPeriodStartHeight, difficultyPeriodEndHeight);
await Deno.writeTextFile(Deno.cwd() + `/data/periods/${period}.json`, JSON.stringify(blocks));
