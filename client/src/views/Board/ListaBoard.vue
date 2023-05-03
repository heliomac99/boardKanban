<template>
  <div align="center">
    <h3 class="secondaryColor" style="margin-bottom:40px">Lista Boards</h3>
    <button class="btn btn-primary primaryColorBtn" @click="inserir" style="margin-bottom:20px">Inserir Board <font-awesome-icon icon="fa-solid fa-plus"/></button>
    <DataTable ref="dataTable" :colLabels="colLabels" :dataFields="dataFields" :dataUrl="'boardPorUsuario'" :showEditButton="true" :showRemoveButton="true" :showAddButton="true" @editar="editar" @excluir="excluir" @addItem="coluna" :id="'id'"></DataTable>
    <ModalPergunta ref="modalPergunta"></ModalPergunta>
  </div>
  <ToastComponent ref="toast"></ToastComponent>
</template>

<script>
import ModalPergunta from '../../components/ModalPergunta.vue'
import DataTable from '../../components/DataTable.vue'
import axios from 'axios'
import ToastComponent from '@/components/ToastComponent.vue'

export default {
  name: 'ListaBoardView',
  components: { DataTable, ModalPergunta, ToastComponent},
  data(){
    return {
      colLabels: ['Nome'],
      dataFields: ['nome'],
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
          axios.post('http://localhost:8000/board/delete', { id: board.id }).then( 
                this.$refs.toast.ativar('Board excluído com sucesso.', 'sucesso'),
                this.$refs.dataTable.load()
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
