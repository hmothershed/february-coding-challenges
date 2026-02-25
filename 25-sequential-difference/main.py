# TIME: O(n)
# SPACE: O(n)
def find_differences(arr):
	result = []
	for i in range(len(arr)):
		if i == len(arr) - 1:
			result.append(0)
		else:
			result.append(arr[i+1] - arr[i])
	return result
