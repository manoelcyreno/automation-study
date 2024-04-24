#!/bin/bash
echo "TEST STARTED"
initDate=$(date +%s)

# Counter to keep track of the number of running processes
running_processes=0

# Loop through all the .js files in the tests folder
for file in cypress/functional/tests/*.js; do
    # Increment the running processes counter
    ((running_processes++))

    # Execute cypress run for each .js file in the background
    cypress run --spec "$file" &

    # Check if the maximum number of threads (2 in this case) has been reached
    if [ "$running_processes" -ge 2 ]; then
        # Wait for all the running processes to finish before continuing
        wait
        # Reset the running processes counter
        running_processes=0
    fi
done

# Wait for any remaining processes to finish
wait

echo "TEST FINISHED"
finalDate=$(date +%s)

duration=$((finalDate - initDate))
echo "Duration of the test: $duration seconds"