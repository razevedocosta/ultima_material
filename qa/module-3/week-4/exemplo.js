function printAsync() {
    console.log("Teste");
};

function printAsync2() {
    setTimeout((printAsync) => {
        console.log("Texto teste")
    }, 5000);
};

printAsync2();