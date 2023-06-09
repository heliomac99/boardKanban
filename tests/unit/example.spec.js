import { shallowMount } from '@vue/test-utils'
import ValidationForm from '../../client/src/components/ValidationForm.vue'

describe('Teste Validação dos Formulários', () => {
  it('Testa string completamente fora do padrão de email retorna false', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ValidationForm, {
    })
    const result = wrapper.vm.validaEmailRegex('a')
    expect(result).toBe(false)
  })
  it('Testa email sem provedor.com', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ValidationForm, {
    })
    const result = wrapper.vm.validaEmailRegex('a@')
    expect(result).toBe(false)
  })
  it('Testa email sem .com', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ValidationForm, {
    })
    const result = wrapper.vm.validaEmailRegex('a@gmail')
    expect(result).toBe(false)
  })
  it('Testa email sem com', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ValidationForm, {
    })
    const result = wrapper.vm.validaEmailRegex('a@gmail.')
    expect(result).toBe(false)
  })
  it('Testa email valido', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ValidationForm, {
    })
    const result = wrapper.vm.validaEmailRegex('a@gmail.com')
    expect(result).toBe(true)
  })
})