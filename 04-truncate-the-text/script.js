// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(n)
function truncateText(text) {
    if (text.length <= 20) {
        return text;
    } 
    // slice(start, end) ----> includes start and excludes end
    // which means characters at index 0 through 16 (17 in total)
    else {
        return text.slice(0, 17) + "...";
    }
}
