import{ render } from '@testing-library/react'
import App from './App.tsx'

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)
    
    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Mayk')).toBeInTheDocument()
  })
})