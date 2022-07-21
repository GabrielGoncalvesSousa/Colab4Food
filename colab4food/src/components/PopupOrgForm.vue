<template>


    <v-row justify="center">
        <v-dialog v-model="props.modelValue" persistent>
            <!--Acrescentar contained caso queira centrar no proprio conteudo mas nao fica tao bem-->
            <v-card>
                <v-card-title>


                    dwdwda
                    <span class=" text-h5">TITULO</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal first name*" required></v-text-field>
                            </v-col>
                            dwd
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal middle name" hint="example of helper text only on focus">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                    persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Password*" type="password" required></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" sm="6">
                                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests" multiple></v-autocomplete>

                            </v-col> -->

                            <v-col>
                                {{ dataToDisplay }}
                            </v-col>

                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" text @click="$emit('update:modelValue', $event.target.value)">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" text @click="$emit('update:modelValue', $event.target.value)">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    <p></p>

</template>

<script setup lang="ts">
import { ref } from 'vue';

let props = defineProps(['modelValue', 'dataToDisplay'])
defineEmits(['update:modelValue'])
console.log(props);
let fds = ref()
console.log(props.dataToDisplay);

function teste() {

}

</script>

<style>
</style>