<template>
    <tr>
        <td :style="trackedWidth" class="cell"></td>
        <td :style="trackedWidth" class="cell"></td>
        <td :style="trackedWidth" id="cell2" class="cell">
            <div>{{ el }}</div>
        </td>
        <td :style="trackedWidth" class="cell"></td>
        <td :style="trackedWidth" class="cell"></td>
        <td :style="trackedWidth" class="cell"></td>
        <td :style="trackedWidth" class="cell"></td>
    </tr>
</template>

<script>
export default {
    props: {
        el: {
            type: Number,
        },
        trackedWidth:{
            type: Number
        }
    },
};
</script>

<style lang="scss">
.cell {
    width: 120px;
    div {
        width: inherit;
        height: 30px;
        border: 2px dotted darkmagenta;
        border-radius: 5px;
        margin: 5px auto;
    }
}
#cell2{
    border: solid 1px #f02727;
}
td{
    width: 100px;
    border: 1px solid #aaa;
}
</style>
