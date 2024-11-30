import { mount } from '@vue/test-utils'
import HmSkeletonScreen from '#base/app/components/hm/HmSkeletonScreen.vue'

describe('HmSkeletonScreen', () => {
  test('ref component', () => {
    expect(HmSkeletonScreen).toBeTruthy()
  })

  test('mount component', () => {
    const wrapper = mount(HmSkeletonScreen, {
      props: {
        isLoadingContent: true,
      },
    })

    expect(wrapper.getCurrentComponent()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders props', () => {
    const wrapper = mount(HmSkeletonScreen, {
      props: {
        isLoadingContent: true,
        borderRadius: '20px',
        width: '200px',
        height: '100px',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props('borderRadius')).toBe('20px')
    expect(wrapper.props('width')).toBe('200px')
    expect(wrapper.props('height')).toBe('100px')
  })

  test('Should display skeleton screen when isLoadingContent is true', () => {
    const wrapper = mount(HmSkeletonScreen, {
      props: {
        isLoadingContent: true,
      },
    })

    expect(wrapper.find('.skeleton-screen')).toBeTruthy()
    expect(wrapper.find('.slot-content').exists()).toBe(false)
  })

  test('Should display slot content when isLoadingContent is false', () => {
    const wrapper = mount(HmSkeletonScreen, {
      props: {
        isLoadingContent: false,
      },
      slots: {
        default: '<div class="slot-content">Slot Content</div>',
      },
    })

    expect(wrapper.find('.skeleton-screen').exists()).toBe(false)
    expect(wrapper.find('.slot-content').text()).toBe('Slot Content')
  })
})
