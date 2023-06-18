import { shallowMount, mount } from "@vue/test-utils";
import ValidationForm from "../../client/src/components/ValidationForm.vue";
import MenuCard from "../../client/src/components/MenuCard.vue";
import ModalPergunta from "../../client/src/components/ModalPergunta.vue";
import PopupModal from "../../client/src/components/PopupModal.vue";

describe("Teste Validação dos Formulários", () => {
  it("Testa string completamente fora do padrão de email retorna false", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("a");
    expect(result).toBe(false);
  });
  it("Testa email sem provedor.com", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("a@");
    expect(result).toBe(false);
  });
  it("Testa email sem .com", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("a@gmail");
    expect(result).toBe(false);
  });
  it("Testa email sem com", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("a@gmail.");
    expect(result).toBe(false);
  });
  it("Testa email valido", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("a@gmail.com");
    expect(result).toBe(true);
  });
  it("Testa email sem @", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("agmail.com");
    expect(result).toBe(false);
  });
  it("Testa email empty", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaEmailRegex("");
    expect(result).toBe(false);
  });
  it("Testa senha forte", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("MinhaSenha!23");
    expect(result).toBe(2);
  });
  it("Testa senha média", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("Minha!2");
    expect(result).toBe(1);
  });
  it("Testa senha fraca", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("senha");
    expect(result).toBe(0);
  });
  it("Testa senha sem letra maiuscula", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("minhasenha!23");
    expect(result).toBe(0);
  });
  it("Testa senha com menos de 8 letras", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("MinhaSen");
    expect(result).toBe(0);
  });
  it("Testa senha sem caractere especial", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("MinhaSenha123");
    expect(result).toBe(0);
  });
  it("Testa senha sem número", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("MinhaSenha!");
    expect(result).toBe(1);
  });
  it("Testa senha vazia", () => {
    const msg = "new message";
    const wrapper = shallowMount(ValidationForm, {});
    const result = wrapper.vm.validaForçaDaSenha("");
    expect(result).toBe(0);
  });
});

describe("Testes de Integração", () => {
  test("renders correctly MenuCard", () => {
    const wrapper = mount(MenuCard);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("renders correctly ModalPergunta", () => {
    const wrapper = mount(ModalPergunta);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("renders correctly PopupModal", () => {
    const wrapper = mount(PopupModal);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("renders correctly Validation Form", () => {
    const wrapper = mount(ValidationForm);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("renders correctly DataTable", () => {
    const wrapper = mount(ValidationForm);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
