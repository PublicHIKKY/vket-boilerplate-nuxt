import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HaVideo from '#base/app/components/ha/HaVideo.vue'

describe('HaVideo', () => {
  test('ref component', () => {
    expect(HaVideo).toBeTruthy()
  })

  test('mount component', () => {
    const wrapper = mount(HaVideo, {
      props: {
        src: '',
        height: '',
        width: '',
        play: false,
        autoplay: true,
        controls: true,
        muted: true,
        playsinline: false,
        preload: '',
      },
    })

    expect(wrapper.find('video').exists()).toBe(true)
    expect(wrapper.getCurrentComponent()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders video with default props', () => {
    const wrapper = mount(HaVideo, {
      props: {
        src: 'test.mp4',
        height: '400px',
        width: '600px',
        play: false,
        autoplay: false,
        autopictureinpicture: false,
        controls: true,
        disablepictureinpicture: false,
        disableremoteplayback: true,
        loop: false,
        muted: false,
        playsinline: false,
        poster: 'poster.jpg',
        controlslist: 'nofullscreen',
        crossorigin: 'anonymous',
        preload: 'auto',
      },
    })

    const videoElement = wrapper.find('video').element
    expect(videoElement).toBeTruthy()
    expect(videoElement.src).toContain('test.mp4')
    expect(wrapper.props('height')).toBe('400px')
    expect(wrapper.props('width')).toBe('600px')
    expect(wrapper.props('play')).toBe(false)
    expect(videoElement.autoplay).toBe(false)
    expect(wrapper.props('autopictureinpicture')).toBe(false)
    expect(videoElement.controls).toBe(true)
    expect(wrapper.props('disablepictureinpicture')).toBe(false)
    expect(wrapper.props('disableremoteplayback')).toBe(true)
    expect(wrapper.get('video').attributes('x-webkit-airplay')).toBe('deny')
    expect(videoElement.loop).toBe(false)
    expect(videoElement.muted).toBe(false)
    expect(wrapper.props('playsinline')).toBe(false)
    expect(videoElement.poster).toContain('poster.jpg')
    expect(wrapper.props('controlslist')).toContain('nofullscreen')
    expect(wrapper.props('crossorigin')).toBe('anonymous')
    expect(wrapper.props('preload')).toBe('auto')
  })

  test('emit', async () => {
    const wrapper = mount(HaVideo, {
      props: {
        src: '',
        height: '',
        width: '',
        play: false,
        autoplay: true,
        controls: true,
        muted: true,
        playsinline: false,
        preload: '',
      },
    })

    const videoElement = wrapper.find('video')

    // Trigger video events
    await videoElement.trigger('progress')
    await videoElement.trigger('suspend')
    await videoElement.trigger('durationchange')
    await videoElement.trigger('loadedmetadata')
    await videoElement.trigger('loadeddata')
    await videoElement.trigger('canplay')
    await videoElement.trigger('playing')
    await videoElement.trigger('pause')
    await videoElement.trigger('ended')
    await videoElement.trigger('seeking')
    await videoElement.trigger('timeupdate')
    await videoElement.trigger('volumechange')
    await videoElement.trigger('ratechange')
    await videoElement.trigger('waiting')

    // Assuming your component emits custom event
    expect(wrapper.emitted().progress).toBeTruthy()
    expect(wrapper.emitted().suspend).toBeTruthy()
    expect(wrapper.emitted().durationchange).toBeTruthy()
    expect(wrapper.emitted().loadedmetadata).toBeTruthy()
    expect(wrapper.emitted().loadeddata).toBeTruthy()
    expect(wrapper.emitted().canplay).toBeTruthy()
    expect(wrapper.emitted().playing).toBeTruthy()
    expect(wrapper.emitted().pause).toBeTruthy()
    expect(wrapper.emitted().ended).toBeTruthy()
    expect(wrapper.emitted().seeking).toBeTruthy()
    expect(wrapper.emitted().timeupdate).toBeTruthy()
    expect(wrapper.emitted().volumechange).toBeTruthy()
    expect(wrapper.emitted().ratechange).toBeTruthy()
    expect(wrapper.emitted().waiting).toBeTruthy()
    // check the number of times each event was emitted
    expect(wrapper.emitted().progress).toHaveLength(1)
    expect(wrapper.emitted().suspend).toHaveLength(1)
    expect(wrapper.emitted().durationchange).toHaveLength(1)
    expect(wrapper.emitted().loadedmetadata).toHaveLength(1)
    expect(wrapper.emitted().loadeddata).toHaveLength(1)
    expect(wrapper.emitted().canplay).toHaveLength(1)
    expect(wrapper.emitted().playing).toHaveLength(1)
    expect(wrapper.emitted().pause).toHaveLength(1)
    expect(wrapper.emitted().ended).toHaveLength(1)
    expect(wrapper.emitted().seeking).toHaveLength(1)
    expect(wrapper.emitted().timeupdate).toHaveLength(1)
    expect(wrapper.emitted().volumechange).toHaveLength(1)
    expect(wrapper.emitted().ratechange).toHaveLength(1)
    expect(wrapper.emitted().waiting).toHaveLength(1)
  })

  test('watches for changes in play prop and plays or pauses the video accordingly', async () => {
    // Mock play and pause method before running the tests
    HTMLMediaElement.prototype.play = vi.fn()
    HTMLMediaElement.prototype.pause = vi.fn()

    const wrapper = mount(HaVideo, {
      props: {
        src: '',
        height: '',
        width: '',
        play: false,
        autoplay: true,
        controls: true,
        muted: true,
        playsinline: false,
        preload: '',
      },
    })

    await wrapper.setProps({ play: true })
    // Check if the play method was called
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled()

    await wrapper.setProps({ play: false })
    // Check if the pause method was called
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled()
  })
})
