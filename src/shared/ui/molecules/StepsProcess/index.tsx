import React, { FC } from "react"

import * as S from "./style"
import { StepsProps } from "./types"

export const StepsProcess: FC<StepsProps> = ({ steps, stepActive = 1, setStep }) => (
  <S.StepsList>
    {steps.map((step) => (
      <S.StepItem
        key={step.id}
        isActive={stepActive === step.id}
        onClick={() => {
          if (step.id <= stepActive) {
            setStep(step.id)
          }
        }}
      >
        <S.Text>{step.title}</S.Text>
      </S.StepItem>
    ))}
  </S.StepsList>
)
