import { describe, expect, afterEach, vi, beforeEach, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import AppIcon from './AppIcon.vue'
const iconName = ref('Bell')

vi.mock('@heroicons/vue/24/solid', () => {
  return {
    BellIcon: 'loaded',
  }
})

vi.mock('@heroicons/vue/24/outline', () => {
  return {
    BellIcon: 'loaded',
  }
})

describe('Test component', () => {
  let wrapper

  expect(AppIcon).toBeTruthy()

  beforeEach(() => {
    wrapper = shallowMount(AppIcon, {
      props: {
        name: iconName.value,
      },
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should work', () => {
    expect(wrapper.vm.outline).toBe(false)
    expect(wrapper.vm.icon).toEqual('loaded')
  })
})
