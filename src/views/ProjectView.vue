<script>
import BaseProject from "@/components/BaseProject.vue";
import { useRouter } from "vue-router";

export default {
    name: "ProjectView",
    components: {
        BaseProject,
    }, 
    data: () => ({
        temp: useRouter().currentRoute.value.params.projectName,
        webku: {
            name: 'Blog Pribadi',
            src: '/src/assets/webFauzi.png',
            detail: 'Merupakan tugas mata kuliah Pengantar Teknik',
        },
        dietku: {
            name: 'Diet KU',
            src: '/src/assets/dietku.png',
            detail: 'Merupakan proyek akhir dari mata kuliah Desain & Pemrograman Web',
        },
        mobileApp: {
            name: 'Mobile App',
            src: '/src/assets/mobile.png',
            detail: 'Merupakan proyek akhir dari mata kuliah Pengembangan Berbasis Platform', 
        },
    }),
}
</script>

<template>
    <BaseProject 
    v-if="this.temp == 'webku'"
    :label="webku.name"
    :source="webku.src"
    :detail="webku.detail"
    />
    <BaseProject 
    v-if="this.temp == 'dietku'"
    :label="dietku.name"
    :source="dietku.src"
    :detail="dietku.detail"
    />
    <BaseProject 
    v-if="this.temp == 'mobileApp'"
    :label="mobileApp.name"
    :source="mobileApp.src"
    :detail="mobileApp.detail"
    />
</template>
