import React, { FC, useState } from "react"

import { RightArrowIcon, Telegram, Twitter } from "../../../../shared/lib/icons"
import { Input } from "../../../../shared/ui/atoms"

import * as S from "./style"
import { NewsletterSubscriptionProps } from "./types"

export const NewsletterSubscription: FC<NewsletterSubscriptionProps> = ({ topMargin }) => {
  const [value, setValue] = useState<string>("")

  return (
    <S.Wrapper topMargin={topMargin}>
      <S.Title>Sign up for Newsletter</S.Title>
      <S.WrapperInput>
        <Input
          size="medium"
          stretch
          theme="dark"
          type="email"
          name="newsletter"
          placeholder="example@mail.com"
          value={value}
          onChange={(address) => setValue(address)}
        />
        <S.WrapperButton>
          <RightArrowIcon />
        </S.WrapperButton>
      </S.WrapperInput>
      <S.SocialNetworks>
        <S.WrapperSocialNetwork>
          <Telegram />
        </S.WrapperSocialNetwork>
        <S.WrapperSocialNetwork>
          <Twitter />
        </S.WrapperSocialNetwork>
      </S.SocialNetworks>
    </S.Wrapper>
  )
}
