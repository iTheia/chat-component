import React from "react";
import { ChatProps } from "./types";
import { CHAT_STYLES, useStyles } from "./style";
import { ChatSearch } from "../Search";
import { ChatHeader } from "../Header";
import { ChatList } from "../List";
import { ChatMessages } from "../Messages";
import { ChatControls } from "../Controls";
import { ChatForm } from "../Form";
import { HeaderContainer, ScrollContainer } from "../Containers";
import { ChatProviders } from "../../providers";

export const Chat: React.FC<ChatProps> = ({ rigthPanel, leftPanel, url }) => {
  const classes = useStyles();

  return (
    <ChatProviders>
      <div className={classes.root}>
        <HeaderContainer>
          <ChatControls />
        </HeaderContainer>
        <HeaderContainer>
          <ChatHeader />
        </HeaderContainer>
        <ChatSearch />
        <ScrollContainer styles={CHAT_STYLES}>
          <ChatMessages />
        </ScrollContainer>
        <ScrollContainer>
          <ChatList />
        </ScrollContainer>
        <ChatForm />
      </div>
    </ChatProviders>
  );
};
