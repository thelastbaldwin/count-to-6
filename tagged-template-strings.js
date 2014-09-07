console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    
function html(...args) {
	var originalShit = args[0];

	function cleanUp(tag){
		return tag.replace(/&/g, '&amp;')
					.replace(/'/g, '&#39;')
					.replace(/"/g, '&quot;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
	}	

	//this is venting frustration with this new form, 
	//but a loop using i and i+1 would handle the interspercing of 
	//strings better than the below
	return originalShit[0] + cleanUp(args[1]) + originalShit[1] + cleanUp(args[2]) + originalShit[2];
}