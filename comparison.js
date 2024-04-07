function adjustMapWidth(rangeInput) {
    const value = rangeInput.value;
    const viewMap = rangeInput.parentNode.querySelector('.view-map'); // Search within the parent

    if (viewMap) {
        viewMap.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0% 100%)`;
    } else {
        console.error('viewMap element not found!');
    }
}