from datetime import datetime

def digital_detox(logs):
#convert strings to datetime objects
    times = [datetime.strptime(log, "%Y-%m-%d %H:%M:%S") for log in logs]
    times.sort()  #sort the timestamps

    # Rule 1: no more than one login within any 4-hour period
    for i in range(1, len(times)):
        if (times[i] - times[i - 1]).total_seconds() < 4 * 60 * 60:
            return False

    # Rule 2: no more than 2 logins per day
    daily_counts = {}
    for time in times:
        day = time.date()
        daily_counts[day] = daily_counts.get(day, 0) + 1
        if daily_counts[day] > 2:
            return False

    return True
