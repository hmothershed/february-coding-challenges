# TIME: O(n)
# SPACE: O(n)
def shift_matrix(matrix, shift):
    rows = len(matrix)
    cols = len(matrix[0])

    # flatten the array to one continuous array
    flat = [num for row in matrix for num in row]

    n = len(flat)

    # normalize shift
    shift = shift % n

    # rotate (right shift)
    rotated = flat[-shift:] + flat[:-shift]

    # rebuild matrix
    result = []
    index = 0

    for i in range(rows):
        row = []
        for j in range(cols):
            row.append(rotated[index])
            index += 1
        result.append(row)

    return result
