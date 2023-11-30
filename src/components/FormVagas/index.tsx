import React, { FormEvent, ChangeEvent, useState } from 'react'
import { StyledButtonPesquisar, StyledCampo, StyledForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={handleInputChange}
        type="search"
      />
      <StyledButtonPesquisar type="submit">Pesquisar</StyledButtonPesquisar>
    </StyledForm>
  )
}

export default FormVagas
