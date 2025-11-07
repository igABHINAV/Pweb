import React from "react";
import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { UserCountContainer } from "./HeroElements";

function UserCount() {
  const others = useOthers();
  const self = useSelf();
  // Total count includes current user
  const totalUsers = others.length + (self ? 1 : 0);

  return (
    <UserCountContainer>
      👥 {totalUsers} {totalUsers === 1 ? "person is" : "people are"} currently viewing this site
    </UserCountContainer>
  );
}

export default UserCount;

