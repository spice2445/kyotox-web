import { FC } from "react"

import * as S from "./style"
import { ProjectTitleProps } from "./types"

export const ProjectTitle: FC<ProjectTitleProps> = ({ children, size }) => (
  <S.ProjectTitle size={size}>{children}</S.ProjectTitle>
)
