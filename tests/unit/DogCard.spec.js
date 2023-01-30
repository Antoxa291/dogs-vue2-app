import { shallowMount } from '@vue/test-utils'
import DogCard from './DogCard.vue'

describe('DogCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DogCard, {
      propsData: {
        dog: {
          name: 'Fido',
          image: 'fido.jpg',
          breed: 'Labrador Retriever',
          registration: 'AKC 123456',
          birth: '01/01/2010',
          last_update: 'Yesterday'
        },
        mod: 'full'
      }
    })
  })

  it('renders the dog name', () => {
    expect(wrapper.find('h3').text()).toBe('Fido')
  })

  it('renders the dog image', () => {
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders the dog information', () => {
    expect(wrapper.find('.dog-info').text()).toContain('Labrador Retriever')
    expect(wrapper.find('.dog-info').text()).toContain('AKC 123456')
    expect(wrapper.find('.dog-info').text()).toContain('01/01/2010')
    expect(wrapper.find('.dog-info').text()).toContain('Yesterday')
  })

  it('emits a dogClick event when the detail button is clicked', () => {
    wrapper.find('.button').trigger('click')
    expect(wrapper.emitted().dogClick).toBeTruthy()
  })
})
