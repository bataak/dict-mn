chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "spellCheck",
        title: "Check Mongolian Spelling",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "spellCheck" && tab.id) {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: checkSpelling,
            args: [info.selectionText]
        });
    }
});

function checkSpelling(selectedText) {
    chrome.runtime.sendMessage({ action: "check", word: selectedText }, (response) => {
        if (response && response.suggestions) {
            alert(`Suggestions: ${response.suggestions.join(", ")}`);
        }
    });
}
