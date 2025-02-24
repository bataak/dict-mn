chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "loadDictionary") {
        (async () => {
            try {
                const affResponse = await fetch(chrome.runtime.getURL("dictionaries/mn_MN.aff"));
                const dicResponse = await fetch(chrome.runtime.getURL("dictionaries/mn_MN.dic"));

                if (!affResponse.ok || !dicResponse.ok) {
                    throw new Error("Failed to load dictionary files.");
                }

                const affText = await affResponse.text();
                const dicText = await dicResponse.text();

                sendResponse({ affText, dicText });
            } catch (error) {
                console.error("Error loading dictionary:", error);
                sendResponse({ error: error.message });
            }
        })();
        return true; // Keeps the message port open for async response
    }
});
