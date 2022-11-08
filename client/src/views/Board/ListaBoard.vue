<template>
  <div align="center">
    <h3 class="secondaryColor" style="margin-bottom:40px">Lista Boards</h3>
    <button class="btn btn-primary primaryColorBtn" @click="inserir" style="margin-bottom:20px">Inserir Board <font-awesome-icon icon="fa-solid fa-plus"/></button>
    <!-- <DataTable ref="dataTable" :colLabels="colLabels" :dataFields="dataFields" :dataUrl="'http://localhost:8000/autor'" :showEditButton="true" :showRemoveButton="true" @editar="editar" @excluir="excluir" :key="dataTableKey" :id="'id'"></DataTable>
    <ModalPergunta ref="modalPergunta"></ModalPergunta> -->
  </div>
</template>

<script>
export default {
  name: 'ListaBoardView',
  data(){
    return {
    }
  },
  methods: {
  },
}
</script>

<style>
</style>
