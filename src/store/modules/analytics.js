export default {
    state: {
        trackingWidth: null,
        mouseDown: null
    },
    getters: {
        getCoords(elem) {
            let box = elem.getBoundingClientRect();

            return {
                left: box.left + window.pageXOffset,
                right: box.right + window.pageXOffset,
            };
        },
    },
    mutations: {
        requireWidth(state, getters, el) {
            const rightSide = event.pageX;
            const leftSide = getters.getCoords(document.querySelector(el)).left;
            state.trackingWidth = rightSide - leftSide + "px";
            console.log(state.trackingWidth + " Моя ширина");
        },
        mouseTracking(state, element) {
            state.mouseDown = true;
            this.commit("requireWidth", element)
        },
        disableMouseTracking(state) {
            if (state.mouseDown === true) {
                state.mouseDown = false;
                console.log("Dis");
            }
        },
        cursorMoving(state, element) {
            if (state.mouseDown === true) {
                this.commit("requireWidth", element);
            }
            // убери отсюда слушатели, придумай что-нибудь с маусдаун
        },
    },
    actions: {
        mouseEvents ({commit}, myid){
            return{
                down: commit ("mouseTracking", myid),
                disable: commit("disableMouseTracking"),
                move: commit("cursorMoving", myid) 
            }
        }
    },
    namespaced: true,
};
