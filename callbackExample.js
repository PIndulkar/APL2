
function fetchData(callback) {
    setTimeout(() => {
        const data = { message: "Hello, World!" };
        callback(null, data); 
    }, 5000); 
}
fetchData((error, data) => {
    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    console.log("Data received:", data  );
});
