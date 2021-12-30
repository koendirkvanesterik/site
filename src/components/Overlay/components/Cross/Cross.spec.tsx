import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Cross } from './Cross'

it('should render as expected', () => {
  const { getByRole } = render(<Cross />)
  expect(getByRole('button')).toBeInTheDocument()
})

it('should trigger event on click', () => {
  const mockedOnClick = jest.fn()
  const { getByRole } = render(<Cross onClick={mockedOnClick} />)
  const button = getByRole('button')

  userEvent.click(button)

  expect(mockedOnClick).toHaveBeenCalled()
})
