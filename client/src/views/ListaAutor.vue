<template>
  <div align="center">
    <h3 style="margin-bottom:40px">Lista Autores</h3>
    <DataTable ref="dataTable" :colLabels="colLabels" :dataFields="dataFields" :dataUrl="'http://localhost:8000/autor'" :showEditButton="true" :showRemoveButton="true" :key="dataTableKey" :id="'id'"></DataTable>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
export default {
  name: 'ListaAutorView',
  components: { DataTable },
  data(){
    return {
      colLabels: ['Nome', 'E-mail'],
      dataFields: ['nome', 'email'],
      dataTableKey: 0
    }
  }

}
</script>

<style>
</style>
