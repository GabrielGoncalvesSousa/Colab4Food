<template>


    <v-container class="mx-auto" block fixed>

        <ui-table v-model="selectedRows" :data="displayedData" :thead="thead" :tbody="tbody" :tfoot="tfoot" row-checkbox
            fullwidth selected-key="id_organizacao">
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
                <ui-icon @click="edit(data)">edit</ui-icon>
                <ui-icon @click="remove(data)">delete</ui-icon>

                <UiButton @click="$alert('Hello BalmUI')">Click Me</UiButton>
                <UiBottomSheet></UiBottomSheet>
            </template>

            <ui-pagination v-model="page" :total="total" @click="onPage(page)" showTotal></ui-pagination>
        </ui-table>

        <button @click="show = !show">Toggle</button>

        <!-- <v-btn @click="conaSshower = !conaSshower">
            Click me to show CONA
        </v-btn>

        <Transition>
            <v-card v-if="conaSshower">
                <v-card-title>CONA</v-card-title>
            </v-card>
        </Transition> -->


    </v-container>

</template>


<script >
import { useCounterStore } from '../stores/counter';

export default {

    data() {

        return {
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
                    fn: data => {
                        return data.distrito.nomeDistrito
                    }
                },
                {
                    field: 'id_tipoOrganizacao',
                    align: 'left',
                    fn: data => {
                        // return data.tipo_organizacao.nomeTipoOrganizacao
                        return data.tipo_organizacao.nomeTipoOrganizacao
                    }
                },

                {
                    field: 'prioridade',
                    fn: data => {
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
        };
    },
    created() {
        console.log(this)
        // let { data } =
        const storeCounter = useCounterStore()

        let temp = storeCounter.axios.get('http://192.168.1.82:3000/organizacao/getAllOrgsWithPriority')
            .then((response) => {

                temp = response.data
                temp = temp.concat(response.data, response.data, response.data, response.data, response.data, response.data)

                let shuffled = temp
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)

                this.allData = shuffled
                this.total = this.allData.length
                this.displayedData = this.allData.slice(0, 10)
            })



        // this.page = Math.round(megaArray.length / 10)

        // this.total = response.data.length

    },
    methods: {
        show(selectedRowsData) {

            console.log(selectedRowsData);
        },

        edit(rowData) {
            console.log("trying to edit you cocksucker");
            console.log(rowData);
        },

        remove(rowData) {
            console.log("ill remove your ass");
            console.log(rowData);
        },
        onPage(page) {

            //Caso pagina seja a primeira o displayedData vai gardar os dados do allData dos index de  0 -9 (sao 10 resultados por pagina)
            //Caso contrario, por exemplo estamos na pagina 2, fica slice(10,20) , funcao que retorna de 10-19
            page == 1 ? this.displayedData = this.allData.slice(0, 10) : this.displayedData = this.allData.slice((page - 1) * 10, page * 10)

        }
    }
};
</script>

<style lang="scss">
</style> 