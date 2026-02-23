# TIME: O(1)
# SPACE: O(1)
def can_donate(donor, recipient):
    def get_type(blood):
		# check if "AB+" or "AB-" to split blood type and rh factor
        if len(blood) == 3:
            return blood[:2], blood[2]
        # otherwise it's the other blood types
        return blood[0], blood[1]
        
    # extract donor and recipient
    d_letter, d_rh = get_type(donor)
    r_letter, r_rh = get_type(recipient)
    
    # map out blood types and their compatability
    compatibility = {
        "O": ["A", "B", "AB", "O"],
        "A": ["A", "AB"],
        "B": ["B", "AB"],
        "AB": ["AB"]
    }
    
    # check if compatible and rh rule
    letter_valid = r_letter in compatibility[d_letter]
    rh_valid = (d_rh == "-") or (d_rh == "+" and r_rh == "+")
    
    # both rules must pass in order to be true
    return letter_valid and rh_valid
