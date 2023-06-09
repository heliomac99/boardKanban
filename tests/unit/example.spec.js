import { shallowMount } from '@vue/test-utils'
import ValidationForm from '../../client/src/components/ValidationForm.vue'

describe('Teste Validação dos Formulários', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ValidationForm, {
      propsData: {
        submited: true
      }
    })
    const result = wrapper.vm.teste()
    expect(result).toBe(true)
  })
})