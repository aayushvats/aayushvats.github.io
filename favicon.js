document.addEventListener('DOMContentLoaded', function () {
    const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤩", "🥳", "😇", "🎉", "🎊", "🚀", "💡", "🎯","🛸"];
    let previousNumber = null;

    const linkForFavicon = document.querySelector(`head > link[rel='icon']`);

    function faviconTemplate(icon) {
        return `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`.trim();
    }

    function getRandomNumber(N) {
        return Math.floor(Math.random() * (N + 1));
    }

    function getUniqueRandomNumber(N) {
        let newNumber;

        do {
            newNumber = getRandomNumber(N);
        } while (newNumber === previousNumber);

        previousNumber = newNumber;
        return newNumber;
    }

    linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${faviconTemplate(emojis[getUniqueRandomNumber(emojis.length-1)])}`);
});
