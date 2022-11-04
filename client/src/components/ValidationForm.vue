<template>
    <form @submit.prevent="submit">
        <slot></slot>
    </form>
</template>

<script>
  export default {
        name: 'ValidationForm',
        props: {
            model: null,
        },
        data() {
            return{
                erros: 0,
                submitted: false,
                validations: [],
                newValidations: {},
            }
        },
        methods: {
            submit() {
                this.submitted = true
                if(this.validar()){
                    this.$emit('save');
                }                
            },
            insereChangeEventInput(){
                let inputs = document.querySelectorAll('input,select')
                inputs.forEach(element => {
                    element.addEventListener('change', () => {
                        this.validar()
                    });
                })
            },
            insereErrorMessageRequired(field, label){
                document.querySelectorAll('span[name=' + field + ']')[0].innerHTML = label + " é obrigatório"
            },
            insereErrorMessageEmail(field, label){
                document.querySelectorAll('span[name=' + field + ']')[0].innerHTML = label + " inválido"
            },
            insereErrorMessageMinlength(field, label, length){
                document.querySelectorAll('span[name=' + field + ']')[0].innerHTML = label + " deve conter pelo menos " + length + " digitos"
            },
            insereErrorMessageEqual(field, label){
                document.querySelectorAll('span[name=' + field + ']')[0].innerHTML = label + " não conferem"
            },
            insereErrorMessage(field, msg){
                document.querySelectorAll('span[name=' + field + ']')[0].innerHTML = msg
            },
            limparErros(){
                let spans = document.querySelectorAll('span')
                spans.forEach(element => {
                    element.innerHTML = ''
                })
            },
            required(nome, label){
                this.validations.push({"field": nome, "validation": "required", "label": label})
            },
            email(nome, label){
                this.validations.push({"field": nome, "validation": "email", "label": label})
            },
            minLength(nome, label, length){
                this.validations.push({"field": nome, "validation": "minLength", "label": label, "length": length})
            },
            equal(nome, nome2, label){
                this.validations.push({"field": nome, "field2": nome2 ,"validation": "equal", "label": label})
            },
            // eslint-disable-next-line no-unused-vars
            customValidation(nome, func = (model) => {return true}, msg){
                this.validations.push({"field": nome ,"validation": "custom", "msg": msg, "func": func})
            },
            // eslint-disable-next-line no-unused-vars
            newValidation(nome, func = (model) => {return true}, msg){
                this.newValidations[nome] = {"func": func, "msg": msg}
            },
            applyValidation(nome, validation){
                this.validations.push({"field": nome ,"validation": "new", "msg": this.newValidations[validation].msg, "func": this.newValidations[validation].func})
            },
            insereErro(nome, msg){
                this.erros++
                this.insereErrorMessage(nome, msg)
            },
            validar(){
                this.limparErros()
                this.erros = 0

                if(this.submitted){
                    this.validations.forEach(element => {
                        if(element.validation === 'required'){
                            if(!this.model[element.field]){
                                this.erros++
                                this.insereErrorMessageRequired(element.field, element.label)
                            }
                        }
                        else if(element.validation === 'email'){
                            const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                            if(!regexEmail.test(this.model[element.field])){
                                this.erros++
                                this.insereErrorMessageEmail(element.field, element.label)
                            }
                        }
                        else if(element.validation === 'minLength'){    
                            if(!this.model[element.field] || this.model[element.field].length < element.length){
                                this.erros++
                                this.insereErrorMessageMinlength(element.field, element.label, element.length)
                            }
                        }
                        else if(element.validation === 'equal'){
                            if(this.model[element.field] != this.model[element.field2]){
                                this.erros++
                                this.insereErrorMessageEqual(element.field, element.label, element.length)
                            }
                        }
                        else if(element.validation === 'custom'){
                            if(!element.func(this.model)){
                                this.erros++
                                this.insereErrorMessage(element.field, element.msg)
                            }
                        }
                        else if(element.validation === 'new'){
                            if(!element.func(this.model)){
                                this.erros++
                                this.insereErrorMessage(element.field, element.msg)
                            }
                        }

                    });

                    if(this.erros > 0)
                        return false

                    return true
                } 
        
            }
        },
        mounted() {
            this.insereChangeEventInput()
        }
    }
</script>



