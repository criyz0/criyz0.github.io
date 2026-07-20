import type { Metadata } from "next";
import { RoomScene } from "./room-scene";

export const metadata: Metadata = {
  title: "场景入口",
  description: "criyz 的昼夜场景式个人网站入口。",
};

export default function RoomPage() {
  return <RoomScene />;
}
