<template>
    <div>
        <button v-on:click="incre">+</button>
        <button v-on:click="del">-</button>
        <p><span>{{number}}</span></p>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props:['number'],
        data(){
            return {
                msg : '大家好',
                //number:0,
            }
        },
        methods:{
            del(){
                this.number < 0 ? this.number = 0 : this.number--;

            },
            incre(){
                this.number++;
            }
        }
    }

</script>

<style scoped>

</style>