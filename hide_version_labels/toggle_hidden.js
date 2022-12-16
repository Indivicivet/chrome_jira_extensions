
enabled = true;
chrome.storage.local.set({
	hide_version_labels_enabled: enabled
});

chrome.action.onClicked.addListener(
	function(tab) {
		enabled = !enabled;
		chrome.storage.local.set({
			hide_version_labels_enabled: enabled
		});
		chrome.action.setIcon({
			path: 
			enabled?
			"hide_version_labels.png"
			: "hide_version_labels_off.png"
		});
	}
);
