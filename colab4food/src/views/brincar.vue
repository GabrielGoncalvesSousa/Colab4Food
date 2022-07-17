<template>
  <ui-table v-model="refObject.selectedRows" :data="refObject.displayedData" :thead="refObject.thead"
    :tbody="refObject.tbody" :tfoot="refObject.tfoot" row-checkbox fullwidth selected-key="id_organizacao">
    <template #nomeSlot aria-describedby="th-cell-1">
      Nome
      <ui-icon v-tooltip="'Deixa de ser gay'" aria-describedby="th-cell-1">
        error_outline
      </ui-icon>
    </template>
    <template #nome="{ data }">
      <div class="">{{ data.nomeOrganizacao }}</div>
    </template>
    <template #actions="{ data }">
      <ui-icon @click="show(data)">edit</ui-icon>
      <ui-icon @click="remove(data)">delete</ui-icon>
      <UiButton @click="$alert('cona')">Click Me</UiButton>
      <UiBottomSheet></UiBottomSheet>
    </template>

    <ui-pagination v-model="refObject.page" :total="refObject.total" @click="onPage(refObject.page)" showTotal>
    </ui-pagination>
  </ui-table>


  <Transition name="edit" ref="TransEDIT">
    <v-card v-if="switcher" style="text-align: center;">
      <p>{{ dataFromRow }}</p>

    </v-card>
  </Transition>


  <!-- <Transition name="remove">
    <v-card v-if="aa" style="text-align: center;">
      <v-card-title>CONA</v-card-title>
    </v-card>
  </Transition>


  <Transition name="edit">
    <v-card v-if="aa" style="text-align: center;">
      <v-card-title>CONA</v-card-title>
    </v-card>
  </Transition> -->

</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import { ref } from 'vue'

let dataFromRow = ref();
let switcher = ref();
let refObject = ref({
  conaSshower: false,
  displayedData: [
  ],
  allData: [

  ],
  thead: [
    {
      value: 'ID Org',
      sort: 'asc',
      columnId: 'id_organizacao'
    },
    {
      slot: 'nomeSlot',
      class: 'good',
      sort: 'none',
      columnId: 'nomeOrganizacao',

    },
    'Cidade',
    'Distrito',
    'Tipo Org',
    'Prioridade',
    'Actions'
  ],


  tbody: [

    {
      field: 'id_organizacao',
      align: 'center'
    },
    {
      slot: 'nome',
      align: 'left'
    },
    {
      field: 'cidade',
      class: 'test',
      align: 'left'
    },
    {
      field: 'id_distrito',
      align: 'left',
      fn: (data: { distrito: { nomeDistrito: any; }; }) => {
        return data.distrito.nomeDistrito
      }
    },
    {
      field: 'id_tipoOrganizacao',
      align: 'left',
      fn: (data: { tipo_organizacao: { nomeTipoOrganizacao: any; }; }) => {
        // return data.tipo_organizacao.nomeTipoOrganizacao
        return data.tipo_organizacao.nomeTipoOrganizacao
      }
    },

    {
      field: 'prioridade',
      fn: (data: { prioridade: { nomePrioridade: any; }; }) => {
        return data.prioridade.nomePrioridade
      },
      align: 'left',
      colClass: 'prioridadeClass',
    },

    {
      slot: 'actions'
    }
  ],

  tfoot: [],

  selectedRows: [],
  page: 1,
  total: 100

})

const storeCounter = useCounterStore()

let temp: any

storeCounter.axios.get('http://192.168.1.82:3000/organizacao/getAllOrgsWithPriority')
  .then((response) => {

    temp = response.data
    temp = temp.concat(response.data, response.data, response.data, response.data, response.data, response.data)

    let shuffled = temp
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: { sort: number; }, b: { sort: number; }) => a.sort - b.sort)
      //@ts-ignore
      .map(({ value }) => value)

    refObject.value.allData = shuffled
    refObject.value.total = refObject.value.allData.length
    refObject.value.displayedData = refObject.value.allData.slice(0, 10)

  })


function show(rowData: any) {

  console.log(rowData);
  dataFromRow.value = rowData
  switcher.value = !switcher.value
}

function edit(rowData: any) {
  console.log("trying to edit you cocksucker")
  console.log(rowData)
}

function remove(rowData: any) {
  console.log("ill remove your ass")
  console.log(rowData)
}

function onPage(page: number) {

  //Caso pagina seja a primeira o displayedData vai gardar os dados do allData dos index de  0 -9 (sao 10 resultados por pagina)
  //Caso contrario, por exemplo estamos na pagina 2, fica slice(10,20) , funcao que retorna de 10-19
  page == 1 ? refObject.value.displayedData = refObject.value.allData.slice(0, 10) : refObject.value.displayedData = refObject.value.allData.slice((page - 1) * 10, page * 10)

}

</script>

<style lang="scss">
.edit-enter-active {
  animation: bounce-in 0.5s;
}

.edit-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style> 