import { FC } from "react"

import * as S from "./style"
import { AcceptReadModalProps } from "./types"
import { Modal } from "../../atoms"

export const AcceptReadModal: FC<AcceptReadModalProps> = ({
  isOpened,
  handleClose,
  icon,
  title,
  actions,
  children,
}) => (
  <Modal
    isOpened={isOpened}
    handleClose={handleClose}
    actions={actions}
    actionsDirection="row"
    size="large"
  >
    <S.Icon>{icon}</S.Icon>
    <S.Title>{title}</S.Title>
    <S.Content>{children}</S.Content>
  </Modal>
)
