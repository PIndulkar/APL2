function fetchData(callback) {
    setTimeout(() => {
        
        const isError = Math.random() < 0.5;
        if (isError) {
            callback("An error occurred while fetching data.");
        } else {
            const data = { message: "Hello, World!" };
            callback(null, data);
        }
    }, 1000);
}
fetchData((error, data) => {
    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    console.log("Data received:", data);
});
