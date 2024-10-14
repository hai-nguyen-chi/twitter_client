import { ReactNode } from 'react'

interface FloatLabelInterface {
  children: ReactNode
  id: string
  label: string
}

const FloatLabel: React.FC<FloatLabelInterface> = ({ children, id, label }: FloatLabelInterface) => {
  return (
    <div className='form-floating mb-3'>
      {children}
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FloatLabel
