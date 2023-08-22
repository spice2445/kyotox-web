import Link from "next/link"
import React, { FC, useMemo } from "react"

import { CheckIcon, Telegram, Twitter } from "../../../../shared/lib/icons"
import { Button } from "../../../../shared/ui/atoms"

import * as S from "./style"
import { ProjectProps } from "./types"

export const ProjectItem: FC<ProjectProps> = ({
  img,
  altImg,
  title,
  subtitle,
  closedIn,
  listTechnology,
  id,
  hideDetails,
  onParticipate,
  isCompleted,
  onClaim,
}) => {
  const socialNetworks = useMemo(
    () => (
      <S.SocialNetwork margin={hideDetails}>
        <a href="https://t.me">
          <Telegram />
        </a>
        <a href="https://twitter.com">
          <Twitter />
        </a>
      </S.SocialNetwork>
    ),
    [hideDetails],
  )

  return (
    <S.Wrapper>
      <S.StyledImage src={img} alt={altImg} />
      <S.InnerWrapper smallPadding={!listTechnology?.length || hideDetails}>
        {listTechnology?.length && !hideDetails ? (
          <S.TopWrapper>
            <S.Technology>
              {listTechnology.map((item) => (
                <S.WrapperButton key={item.title}>
                  <Button theme="overLightEmerald" radius="medium" size="average" isLetterSpacing>
                    {item.title}
                  </Button>
                </S.WrapperButton>
              ))}
            </S.Technology>
            {socialNetworks}
          </S.TopWrapper>
        ) : null}
        <S.WrapperInfo>
          <S.Title>{title}</S.Title>
          {hideDetails && socialNetworks}
          <S.SubTitle>{subtitle}</S.SubTitle>
          <S.CloseTimer gap={isCompleted}>
            {isCompleted ? (
              <>
                Completed
                <CheckIcon />
              </>
            ) : (
              <>
                Closes in: <b>{closedIn}</b>
              </>
            )}
          </S.CloseTimer>
          <S.WrapperButtons>
            <Button
              theme="red"
              radius="medium"
              size="large"
              isLetterSpacing
              stretch
              uppercase
              onClick={() => (isCompleted ? onClaim?.() : onParticipate?.(id))}
            >
              {isCompleted ? "Claim" : "Participate"}
            </Button>
            {!hideDetails && (
              <Link href={`/launchpad/${id}`}>
                <Button radius="medium" size="large" isLetterSpacing stretch uppercase>
                  Details
                </Button>
              </Link>
            )}
          </S.WrapperButtons>
        </S.WrapperInfo>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}
