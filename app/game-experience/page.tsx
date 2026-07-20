import type { Metadata } from "next";
import { GameTables } from "./game-tables";

export const metadata: Metadata = {
  title: "游戏经历",
  description: "criyz 的游戏经历：模拟经营与其他游戏清单。",
};

export default function GameExperience() {
  return <GameTables />;
}
