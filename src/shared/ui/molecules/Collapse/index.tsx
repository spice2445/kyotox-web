import React, { FC } from "react"

import { ArrowToDown } from "../../../../shared/lib/icons"

import * as S from "./style"
import { CollapseItemProps, CollapseProps } from "./types"

export const Collapse: FC<CollapseProps> = ({ children, ...props }) => (
  <S.Collapse {...props}>{children}</S.Collapse>
)

export const CollapseItem: FC<CollapseItemProps> = ({
  header,
  value,
  children,
  triggerArrow,
  onClickHeader,
  isDefault,
}) => (
  <S.CollapseItem value={value} isDefault>
    <S.StyledHeader>
      {isDefault ? (
        <S.StyledTriggerDefault onClick={onClickHeader}>
          {header}
          {triggerArrow || <ArrowToDown />}
        </S.StyledTriggerDefault>
      ) : (
        <S.StyledTrigger onClick={onClickHeader}>
          {header}
          {triggerArrow || <ArrowToDown />}
        </S.StyledTrigger>
      )}
    </S.StyledHeader>
    <S.StyledContent>{children}</S.StyledContent>
  </S.CollapseItem>
)
