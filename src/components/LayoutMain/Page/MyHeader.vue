<template>
    <div class="header__wrapper">
        <nav><router-link to="/">Home</router-link> |</nav>
    </div>
</template>

<script></script>

<style lang="scss">
.header__wrapper{
    width: 1000px;
    height: 120px;
}
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>