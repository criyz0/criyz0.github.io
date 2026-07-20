import type { Metadata } from "next";
import { RoomScene } from "./room/room-scene";

export const metadata: Metadata = {
  title: "criyz",
  description: "criyz 的昼夜场景式个人网站入口。",
};

export default function Home() {
  return <RoomScene />;
}
