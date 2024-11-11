const dirPath = path.join(saiprasad, 'new-directory');

fs.readdir(dirPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }
    console.log('Directory contents:', files);
});
