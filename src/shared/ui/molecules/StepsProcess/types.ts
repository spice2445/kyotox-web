export interface Step {
  title: string
  id: number
}

export interface StepsProps {
  steps: Step[]
  stepActive?: number
  setStep: (value: number) => void
}
