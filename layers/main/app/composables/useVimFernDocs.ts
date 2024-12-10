export function useVimFernDocs() {
  const sections = ref<Section[]>([
    {
      id: 'introduction',
      title: 'Introduction',
      content: [
        'Fern is a general purpose asynchronous tree viewer written in Pure Vim script.',
        'It provides rich features for file system manipulation while being agnostic to the tree source.',
      ],
    },
    {
      id: 'usage',
      title: 'Usage',
      content: [
        'Open fern on the left side of a window',
        ':Fern . -reveal=% -drawer -toggle -width=35',
        'Open fern on project root',
        ':Fern . -reveal=%',
      ],
      commands: [
        { name: ':Fern {url}', description: 'Open a fern tree viewer' },
        { name: ':Fern {url} -reveal={path}', description: 'Open a fern tree viewer and reveal the {path}' },
        { name: ':Fern {url} -drawer', description: 'Open a fern tree viewer as drawer (split window)' },
        { name: ':Fern {url} -drawer -toggle', description: 'Open a fern tree viewer as drawer or close existing drawer' },
      ],
    },
    // Add more sections here to cover all the content from the help file
  ])

  const activeSection = ref<string>('introduction')

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      activeSection.value = sectionId
    }
  }

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }, { threshold: 0.5 })

    sections.value.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })
  })

  return {
    sections,
    activeSection,
    scrollToSection,
  }
}
