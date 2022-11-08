<template>
  <div align="center">
    <h3 class="secondaryColor" style="margin-bottom:40px">Lista Boards</h3>
    <button class="btn btn-primary primaryColorBtn" @click="inserir" style="margin-bottom:20px">Inserir Board <font-awesome-icon icon="fa-solid fa-plus"/></button>
    <DataTable ref="dataTable" :colLabels="colLabels" :dataFields="dataFields" :dataUrl="'http://localhost:8000/board'" :showEditButton="true" :showRemoveButton="true" :showAddButton="true" @editar="editar" @excluir="excluir" @addItem="coluna" :key="dataTableKey" :id="'id'"></DataTable>
    <ModalPergunta ref="modalPergunta"></ModalPergunta>
  </div>
</template>

<script>
import ModalPergunta from '../../components/ModalPergunta.vue'
import DataTable from '../../components/DataTable.vue'
import axios from 'axios'
export default {
  name: 'ListaBoardView',
  components: { DataTable, ModalPergunta},
  data(){
    return {
      colLabels: ['Nome'],
      dataFields: ['nome'],
      dataTableKey: 0
    }
  },
  methods: {
    inserir(){
      this.$router.push({ name: 'CadastroEdicaoBoard', params: { codigoBoard: 0 } })
    },
    editar(board){
      this.$router.push({ name: 'CadastroEdicaoBoard', params: { codigoBoard: board.id } })
    },
    async excluir(board) { 
      const ok = await this.$refs.modalPergunta.show({
          title: 'Excluir Board',
          message: 'Tem certeza que gostaria de excluir o board?',
          okButton: 'Sim',
      })

      if (ok) {
          axios.post('http://localhost:8000/board/delete', {id: board.id}).then( 
                this.$swal("Sucesso", "Board excluído com sucesso!", "success"),
                this.dataTableKey++
          )
      }
    },
    coluna(id){
      this.$router.push({ name: 'CadastroEdicaoColuna', params: { codigoBoard: id } })
    }
  },
}
</script>

<style>
</style>
