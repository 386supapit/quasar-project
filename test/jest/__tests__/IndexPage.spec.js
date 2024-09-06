import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage.vue', () => {
    it('should display initial values in input fields', () => {
      const wrapper = shallowMount(IndexPage)
  
      // Find input elements
      const firstNameInput = wrapper.find('#firstName')
      const lastNameInput = wrapper.find('#lastName')
      const nickNameInput = wrapper.find('#nickName')
      const studentIdInput = wrapper.find('#studentId')
  
      // Check initial values
      expect(firstNameInput.element.value).toBe('ศุภพิชญ์')
      expect(lastNameInput.element.value).toBe('พุ่มนิล')
      expect(nickNameInput.element.value).toBe('ผัดไท')
      expect(studentIdInput.element.value).toBe('6604101386')
    })
})    

test('should show the form element on the user output', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

 

  test('should have button', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })