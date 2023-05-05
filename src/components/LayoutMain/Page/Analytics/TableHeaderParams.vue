<template>
    <th
        @mousedown="mouseTracking"
        @mouseup="disableMouseTracking"
        @mouseleave="disableMouseTracking"
        @mousemove="cursorMoving"
        class="theader"
        :id="'theader' + myid"
        v-if="!!head === true"
    >
        <div class="table__header" :style="{ width: trackingWidth }">
            {{ head.name }} {{ myid }}
        </div>
    </th>
</template>

<script>
export default {
    props: {
        head: {
            type: Object,
        },
        myid: {
            type: Number,
        },
    },
    data() {
        return {
            mouseDown: null,
            trackingWidth: null,
        };
    },
    methods: {
        mouseTracking() {
            this.mouseDown = true;
            this.changeWidth(`#theader${this.myid}`);
        },
        disableMouseTracking() {
            if (this.mouseDown === true) {
                this.mouseDown = false;
                console.log("Dis");
            }
        },
        cursorMoving() {
            if (this.mouseDown === true) {
                this.changeWidth(`#theader${this.myid}`);
            }
        },
        getCoords(elem) {
            let box = elem.getBoundingClientRect();

            return {
                left: box.left + window.pageXOffset,
                right: box.right + window.pageXOffset,
            };
        },
        changeWidth(el) {
            const rightSide = event.pageX;
            const leftSide = this.getCoords(document.querySelector(el)).left;
            this.trackingWidth = rightSide - leftSide + "px";
            console.log(this.trackingWidth + " Моя ширина");
        },
    },
    mounted() {
        console.log(this.myid);
    },
};
</script>

<style>
.theader {
    position: relative;
    height: 45px;
    width: 10px;
}
span {
    margin: 0 auto;
    /* position: absolute; */
    /* left: 0; */
}
.table__header {
    appearance: none;
    position: absolute;
    left: 0%;
    top: 0%;
    /* width: 100%; */
}

.table__header::-webkit-slider-thumb {
    appearance: none;
    border-radius: 0;
    width: 1px;
    height: 45px;
    background: #ccc;
}
</style>
