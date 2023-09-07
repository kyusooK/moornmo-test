<template>
    <div>
        <String label="Name" v-model="value.name" :editMode="editMode"/>
        <RankId offline label="RankId" v-model="value.rankId" :editMode="editMode" @change="change"/>
        <File offline label="File" v-model="value.file" :editMode="editMode" @change="change"/>
        <Payment offline label="Payment" v-model="value.payment" :editMode="editMode" @change="change"/>
        <Email offline label="Email" v-model="value.email" :editMode="editMode" @change="change"/>
        <Money offline label="Money" v-model="value.money" :editMode="editMode" @change="change"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>

import BaseEntity from './base-ui/BaseEntity'

export default {
    name: 'Company',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "companies"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>

