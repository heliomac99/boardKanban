<template>
  <div align="center">
    <h3 class="secondaryColor" style="margin-bottom:40px">Lista Participantes</h3>
    <button class="btn btn-primary primaryColorBtn" @click="inserir" style="margin-bottom:20px">Inserir Participante <font-awesome-icon icon="fa-solid fa-plus"/></button>
    <DataTable ref="dataTable" :colLabels="colLabels" :dataFields="dataFields" :dataUrl="'http://localhost:8000/autor'" :showEditButton="true" :showRemoveButton="true" @editar="editar" @excluir="excluir" :key="dataTableKey" :id="'id'"></DataTable>
    <ModalPergunta ref="modalPergunta"></ModalPergunta>
  </div>
</template>

<script>
import ModalPergunta from '../../components/ModalPergunta.vue'
import DataTable from '../../components/DataTable.vue'
import axios from 'axios'
export default {
  name: 'ListaParticipanteView',
  components: { DataTable, ModalPergunta },
  data(){
    return {
      colLabels: ['Nome', 'E-mail'],
      dataFields: ['nome', 'email'],
      dataTableKey: 0
    }
  },
  methods: {
    inserir(){
      this.$router.push({ name: 'CadastroEdicaoParticipante', params: { codigoParticipante: 0 } })
    },
    editar(participante){
      this.$router.push({ name: 'CadastroEdicaoParticipante', params: { codigoParticipante: participante.id } })
    },
    async excluir(participante) { 
      const ok = await this.$refs.modalPergunta.show({
          title: 'Excluir Participante',
          message: 'Tem certeza que gostaria de excluir o participante?',
          okButton: 'Sim',
      })

      if (ok) {
          axios.post('http://localhost:8000/autor/delete', {id: participante.id}).then((result) => {
              if(result.data.podeExcluir){
                this.$swal("Sucesso", "Participante excluído com sucesso!", "success")
                this.dataTableKey++
              }
              else
                this.$swal("Erro", "Participante possui vínculo com algum Card!", "error")
          })
      }
    },
  },
}
</script>

<style>
</style>
