import { renderHook } from '@testing-library/react-hooks'
import * as gatsby from 'gatsby'

import { useMainMenuData } from './useMainMenuData'

beforeAll(() => {
  jest.spyOn(gatsby, 'useStaticQuery').mockImplementation(() => ({
    menusJson: {
      links: [
        {
          href: '/foo/',
          label: 'foo',
        },
      ],
    },
  }))
})

it('should return label object as expected', () => {
  const { result } = renderHook(() => useMainMenuData())
  expect(result.current).toEqual({
    links: [
      {
        href: '/foo/',
        label: 'foo',
      },
    ],
  })
})

afterAll(() => {
  jest.resetAllMocks()
})