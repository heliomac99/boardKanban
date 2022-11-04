<template>
    <table class="table" style="margin-top:20px;">
        <thead>
            <tr>
                <th style="width:20%" v-if="showEditButton || showRemoveButton || showAddButton"></th>
                <th v-for="(value, index) in colLabels" :key="index" class="primaryColor" scope="col">{{value}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in filteredData" :key="index">
                <td v-if="showEditButton || showRemoveButton ||  showAddButton" align="center">
                    <button title="Editar"  style="margin-left:10px;"  v-if="showEditButton" type="button" @click="$emit('editar', item )" class="btn btn-primary primaryColorBtn">
                        <font-awesome-icon icon="fa-solid fa-pen" />
                    </button>
                    <button v-if="showAddButton" style="margin-left:10px;" type="button" @click="$emit('addItem', item[id] )" class="btn btn-primary primaryColorBtn">
                        <font-awesome-icon icon="fa-solid fa-plus" />
                    </button>
                    <button title="Excluir"  v-if="showRemoveButton" style="margin-left:10px;" type="button" @click="$emit('excluir', item )" class="btn btn-secondary primaryColorBtn">
                        <font-awesome-icon icon="fa-solid fa-trash" />
                    </button>

                </td>
                <td v-for="(dataField, index) in dataFields" :key="index">{{item[dataField]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
  import axios from 'axios'
  export default {
        name: 'DataTable',
        props: {
            colLabels: null,
            dataFields: null,
            showEditButton: null,
            showRemoveButton: null,
            showAddButton: null,
            dataUrl: null,
            paramsUrl: null,
            id: null
        },
        data() {
            return {
                filteredData: null,
                originalData: null
            }
        },
        methods: {
            filter(propertyName, value) {
                this.filteredData = this.originalData
                if (value) {
                    this.filteredData = this.filteredData.filter(function (el) {
                        return el[propertyName].toLowerCase().includes(value.toLowerCase())
                    });
                } 
            },
            // formatDate(date){
            //     const [ano, mes, dia] = date.split('-');
            //     const result = `${dia}/${mes}/${ano}`;
            //     return result
            // },
            // dataFormater() {
            //     var dateDataFields = this.dataFields.filter(function (el) { return el.type == 'date' });

            //     var i = 0
            //     var j = 0

            //     for(i = 0; i < dateDataFields.length; i++)
            //         for(j = 0; j < this.filteredData.length; j++)
            //             this.filteredData[j][dateDataFields[i].value] = this.formatDate(this.filteredData[j][dateDataFields[i].value])            
            // }
        },
        async created() {
            if(!this.paramsUrl){
                await axios.post(this.dataUrl).then( (result) => {
                    this.originalData = result.data
                    this.filteredData = this.originalData
                    //this.dataFormater()
                })
            }
            else{
                await axios.post(this.dataUrl, this.paramsUrl).then( (result) => {
                    this.originalData = result.data
                    this.filteredData = this.originalData 
                    //this.dataFormater()                   
                })
            } 
        }
    }
</script>



