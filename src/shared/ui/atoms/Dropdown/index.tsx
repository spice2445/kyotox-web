import { useOnClickOutside } from "next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside"
import { Children, cloneElement, FC, useRef, useState } from "react"

import * as S from "./style"
import { DropdownProps } from "./types"

export const Dropdown: FC<DropdownProps> = ({ children, trigger }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(containerRef.current, () => setIsOpened(false))

  return (
    <S.Dropdown ref={containerRef}>
      <S.Trigger>
        {trigger &&
          Children.map(trigger, (item) =>
            cloneElement(item, {
              ...item?.props,

              onClick: () => {
                setIsOpened((prevState) => !prevState)

                if (item?.props.onClick) {
                  item.props.onClick()
                }
              },
            }),
          )}
      </S.Trigger>
      <S.Content isOpened={isOpened}>{children}</S.Content>
    </S.Dropdown>
  )
}
