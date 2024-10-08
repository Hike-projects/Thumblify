function downloadThumbnail(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = ''; // You can specify a filename if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
