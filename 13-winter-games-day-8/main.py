# TIME: O(n)
# SPACE: O(1)
def get_fastest_speed(times):

    distances = [320, 280, 350, 300, 250]

    max_speed = float('-inf')
    fastest_segment = 0

    for i in range(len(times)):

        speed = distances[i] / times[i]

        if speed > max_speed:
            max_speed = speed
            fastest_segment = i + 1  # 1-based index

    rounded_speed = round(max_speed, 2)

    return f"The luger's fastest speed was {rounded_speed:.2f} m/s on segment {fastest_segment}."
