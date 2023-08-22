import React, { FC } from "react"

import * as S from "./style"
import { TabsProps, Trigger } from "./types"

export const TabsTrigger: FC<Trigger> = ({ value, header, onClickHeader }) => (
  <S.StyledTrigger value={value} onClick={onClickHeader}>
    {header}
  </S.StyledTrigger>
)

export const TabsWrapper: FC<TabsProps> = ({ triggerList, contentList }) => (
  <S.TabsRoot defaultValue="Details" orientation="vertical">
    <S.StyledTabsList>
      {triggerList.map((trigger) => (
        <TabsTrigger
          key={trigger.value}
          value={trigger.value}
          onClickHeader={trigger.onClickHeader}
          header={trigger.header}
        />
      ))}
    </S.StyledTabsList>
    {contentList.map((content) => (
      <S.StyledContent key={content.value} value={content.value}>
        {content.children}
      </S.StyledContent>
    ))}
  </S.TabsRoot>
)
