let dictionary;

chrome.runtime.sendMessage({ type: "loadDictionary" }, (response) => {
    if (!response || response.error) {
        console.error("Dictionary load error:", response ? response.error : "No response received");
        return;
    }

    dictionary = new Typo("mn_MN", response.dicText, response.affText);
});

// Enable spellchecking in all text fields
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input[type='text'], textarea").forEach((el) => {
        el.setAttribute("spellcheck", "true");
    });
});

// Listen for spellcheck requests
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "checkWord" && dictionary) {
        const correct = dictionary.check(request.word);
        const suggestions = correct ? [] : dictionary.suggest(request.word);
        sendResponse({ correct, suggestions });
    }
});
