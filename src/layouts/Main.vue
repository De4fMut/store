<template>
    <div class="layout__wrapper">
        <SideMenu />
        <div>
            <component :is="currentPage"></component>
        </div>
    </div>
</template>

<script>
import MyHeader from "@/components/LayoutMain/Page/MyHeader.vue";
import SideMenu from "@/components/LayoutMain/SideMenu/SideMenu.vue";
import Analytics from "@/views/Analytics.vue";

export default {
    data() {
        return {
            currentPage: "Analytics",
        };
    },
    components: {
        MyHeader,
        SideMenu,
        Analytics,
    },
};
</script>

<style lang="scss">
.layout__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
}
</style>
