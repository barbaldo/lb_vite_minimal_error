"use client";

import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense";
import { Editor } from "./editor";

export default function App() {
  return (
    <LiveblocksProvider
      publicApiKey={
        "<pk_here>"
      }
    >
      <RoomProvider id="test_room" autoConnect>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <Editor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
