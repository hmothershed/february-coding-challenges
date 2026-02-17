# TIME COMPLEXITY O(n)
# SPACE COMPLEXITY O(1)
def count_change(change):
    # Step 1: Add all cents
    total_cents = sum(change)

    # Step 2: Convert to dollars
    dollars = total_cents / 100

    # Step 3: Format with 2 decimal places
    return f"${dollars:.2f}"
    
    # ALTERNATIVE APPROACH
    def count_change(change):
	    total = sum(change)

	    dollars = total // 100
	    cents = total % 100

	    return f"${dollars}.{cents:02d}"
