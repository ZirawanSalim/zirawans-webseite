function run(onStart, onRun, onEnd) {
    console.log("1");
    onStart();
    console.log("2");
    onRun();
    console.log("3");
    onEnd();

}
run(

    function () {
        console.log("Es geht los");
    },

    function () {
        console.log("Es wird ausgeführt");
    },

    function () {
        console.log("Es wurde ausgeführt");
    }
);