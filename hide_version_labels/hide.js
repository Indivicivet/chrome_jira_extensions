// <span class="aui-lozenge ghx-label-version ghx-label ghx-label-double" title="Product 3.0">Product 3.0</span>

kill_labels = function() {
	const labels = document.querySelectorAll(".ghx-label-version")
	console.log(labels);
	labels.forEach(
		function(label) {
			label.parentElement.removeChild(label);
		}
	);
}

chrome.storage.local.get("hide_version_labels_enabled").then(
	function(result) {
		if (result.hide_version_labels_enabled) {
			setTimeout(
				kill_labels,
				2000 // jira is slow to load :)
			);
		}
	}
);
