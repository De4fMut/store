<template>
    <table class="table__wrapper">
        <thead class="th__wrapper">
            <tr class="header__string">
                <table-header-params
                    v-for="(head, index) in params"
                    :key="index"
                    :head="head"
                    :myid="index"
                />
                <div class="ggg">0</div>
            </tr>
        </thead>
        <tbody>
            <table-string 
            v-for="el in items" 
            :key="el" 
            :el="el" />
        </tbody>
    </table>
</template>

<script>
import TableString from "./TableString.vue";
import TableHeaderParams from "./TableHeaderParams.vue";

export default {
    data() {
        return {
            items: [1, 2, 3, 4, 5],
            params: [
                {
                    name: "#",
                },
                {
                    name: "|",
                },
                {
                    name: "Наименование еденицы",
                },
                {
                    name: "Цена",
                },
                {
                    name: "Кол-во",
                },
                {
                    name: "Название товара",
                },
                {
                    name: "Итого",
                },
            ],
           
            left: [],
            right: [],
            index: 2,
        };
    },
    components: {
        TableString,
        TableHeaderParams,
    },
    computed: {
        getWidth() {
            return this.trackingWidth;
        },
    },
    watch: {},
    methods: {
        mouseTracking() {
            this.mouseDown = true;
        },
        indexTracking(){
            this.index = index
        },
        disableMouseTracking() {
            if (this.mouseDown === true) {
                this.mouseDown = false;
                console.log("Dis");
            }
        },
        cursorMoving() {
            if (this.mouseDown === true) {
                console.log(event.pageX);
                this.right = event.pageX;
                console.log(this.right + "px");
                this.changeWidth(`#theader`);
            }
        },
        getCoords(elem) {
            let box = elem.getBoundingClientRect();

            return {
                left: box.left + window.pageXOffset,
                right: box.right + window.pageXOffset,
            };
        },
        cords(el) {
            let array = document.querySelectorAll(el);
            const arrBlock = [];
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                const computedWidth = Number(
                    this.getCoords(element).right - this.getCoords(element).left
                );
                arrBlock[index] = {
                    id: "theader" + index,
                    left: this.getCoords(element).left,
                    right: this.getCoords(element).right,
                    width: computedWidth + "px",
                };
                console.dir(element)
            }
            console.log(arrBlock);
        },
        changeWidth(el) {
            // this.right = this.getCoords(document.querySelector(el)).right;
            let heh
            this.left = this.getCoords(document.querySelector(el)).left;
            console.log(this.left + "LOOOOOOK");
            console.log(this.right - this.left + "px CHANGED");
            return (
                (this.trackingWidth = this.right - this.left + "px"),
                console.log(this.trackingWidth + " Моя ширина")
            );
        },
    },
    mounted() {
        // this.cords('.theader')
        // console.log(this.getCoords(document.querySelector('.ggg')).left)
        // console.log(this.getCoords(document.querySelector('.ggg')).right)
        // this.changeWidth(".theader");
        this.cords(".theader");
    },
};
</script>

<style lang="scss">
.ggg {
    height: 200px;
    width: 3px;
    background: rgb(25, 165, 142);
    position: absolute;
}
.table__wrapper {
    background: #fff;
    border-collapse: collapse;
    tr {
        width: 100%;
    }
}
.header__string {
    th {
        border: 3px solid #ccc;
        &::after {
            content: "";
            height: 100%;
            width: 1px;
            background: blue;
            display: block;
            position: absolute;
            right: -2px;
            top: 0;
        }
    }
}
</style>
