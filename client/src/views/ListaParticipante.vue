<template>
  <div align="center">
    <h3 class="secondaryColor" style="margin-bottom:40px">Lista Participantes</h3>
    <button class="btn btn-primary primaryColorBtn" @click="inserir" style="margin-bottom:20px">Inserir Participante <font-awesome-icon icon="fa-solid fa-plus"/></button>
    <DataTable ref="dataTable" :colLabels="colLabels" :dataFields="dataFields" :dataUrl="'http://localhost:8000/autor'" :showEditButton="true" :showRemoveButton="true" @editar="editar" :key="dataTableKey" :id="'id'"></DataTable>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
export default {
  name: 'ListaParticipanteView',
  components: { DataTable },
  data(){
    return {
      colLabels: ['Nome', 'E-mail'],
      dataFields: ['nome', 'email'],
      dataTableKey: 0
    }
  },
  methods: {
    inserir(){
      this.$router.push({ name: 'cadastroedicaoparticipante', params: { codigoParticipante: 0 } })
    },
    editar(participante){
      this.$router.push({ name: 'cadastroedicaoparticipante', params: { codigoParticipante: participante.id } })
    }
  }

}
</script>

<style>
</style>
