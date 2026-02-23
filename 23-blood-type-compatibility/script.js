// TIME: O(1)
// SPACE: O(1)
function canDonate(donor, recipient) {
	const getType = (blood) => {
		// if length is 3 → must be "AB+" or "AB-"
		if (blood.length == 3) {
			return [blood.slice(0,2), blood[2]];
		}
		// otherwise it's "A+", "B-", "O+", etc.
		return [blood[0], blood[1]];
	};
	
	// extract donor and recipient
	const [dLetter, dRh] = getType(donor);
	const [rLetter, rRh] = getType(recipient);
	
	// map out blood types and their compatability
	const compatability = {
		"O": ["A", "B", "AB", "O"],
		"A": ["A", "AB"],
		"B": ["B", "AB"],
		"AB": ["AB"]
	};
	
	// check if donor con donate to recipient and rh rule
	const letterValid = compatability[dLetter].includes(rLetter);
	const rhValid = dRh === "-" || (dRh === "+" && rRh === "+");
	
	// both rules must pass in order to be true
	return letterValid && rhValid;
}
