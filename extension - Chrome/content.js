chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "check") {
        fetch(chrome.runtime.getURL("dictionaries/mn_MN.dic"))
            .then(response => response.text())
            .then(dic => {
                fetch(chrome.runtime.getURL("dictionaries/mn_MN.aff"))
                    .then(response => response.text())
                    .then(aff => {
                        let Typo = window.Typo;
                        let dictionary = new Typo("mn_MN", dic, aff);
                        let isCorrect = dictionary.check(request.word);
                        let suggestions = dictionary.suggest(request.word);
                        sendResponse({ isCorrect, suggestions });
                    });
            });
        return true;
    }
});
