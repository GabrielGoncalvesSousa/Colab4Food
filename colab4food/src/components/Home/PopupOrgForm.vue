<template>
 <!-- <v-dialog max-width="600px" v-model="props.modelValue">
  <v-card>
   <v-card-title>
    <h2>Adicionar Organização</h2>
   </v-card-title>
   <v-card-text>
    <v-form class="px-3">
     <v-text-field v-model="props.dataToDisplay.nomeOrganizacao" label="Nome" required
      :rules="[v => !!v || 'Nome é obrigatório']">
     </v-text-field>
     <v-text-field v-model="props.dataToDisplay.rua" label="E-mail" required
      :rules="[v => !!v || 'E-mail é obrigatório']">
     </v-text-field>
    </v-form>
   </v-card-text>
  </v-card>
 </v-dialog>
  -->


 <v-dialog v-model="props.modelValue" contained persistent>

  <!--Acrescentar contained caso queira centrar no proprio conteudo mas nao fica tao bem-->
  <v-card>
   <v-card-title>
    <span class=" text-h5">Editar</span>
   </v-card-title>
   <v-card-text>
    <v-form>
     <v-row>
      <!-- Nome Organizacao -->
      <v-col cols="12" md="4">
       <v-text-field required hint="Nome da Organização" v-model="dataToDisplay.nomeOrganizacao"></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Prioridade" v-model=dataToDisplay.prioridade.nomePrioridade>
       </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Cidade" v-model=dataToDisplay.cidade>

       </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Codigo-postal" v-model="dataToDisplay['codigo-postal']">

       </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Rua" v-model="dataToDisplay.rua">

       </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Tipo Organização" v-model="dataToDisplay.tipo_organizacao.nomeTipoOrganizacao">

       </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Utilizador que criou a organização" v-model="dataToDisplay.user.nomeUser">
       </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
       <v-text-field hint="Nome Distrito" v-model="dataToDisplay.distrito.nomeDistrito">
       </v-text-field>
      </v-col>

      <v-row>
       <v-col v-for="contacto in dataToDisplay.contactos">
        <v-text-field hint="Nome Contacto" v-model="contacto.nomeContacto">
         <v-icon v-if="contacto.isContactoPrincipal = true">mdiShieldCrownOutline</v-icon>
        </v-text-field>
       </v-col>
      </v-row>

     </v-row>
    </v-form>



    <small>*indicates required field</small>
   </v-card-text>
   <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn color="blue-darken-1" text @click="$emit('update:modelValue', $event.target.value)">
     Close
    </v-btn>
    <v-btn color="blue-darken-1" text @click="saveEdit()">
     Save
    </v-btn>
   </v-card-actions>


  </v-card>

 </v-dialog>






</template>

<script setup lang="ts">import { ref } from '@vue/runtime-dom';



let props = defineProps(['modelValue', 'dataToDisplay'])
const emit = defineEmits(['update:modelValue'])


function saveEdit() {
 console.log(props);
 console.log(props.dataToDisplay);
 emit('update:modelValue', false)
}


</script>

<style>
</style>