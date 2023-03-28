<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <router-view/>
        </div>
    </a-config-provider>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'App',
    data() {
        return {

        }
    },
    created() {
        this.changeSize();
        window.addEventListener('resize', this.changeSize);
    },
    computed: {
        locale() {
            return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
        },
    },
    methods:{
        ...mapActions(['ToggleScreen']),
        changeSize(){
            this.ToggleScreen({width:document.body.clientWidth,height:document.body.clientHeight})
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize',this.changeSize)
    },
}
</script>

<style>
#app {
    height: 100%;
}
</style>
