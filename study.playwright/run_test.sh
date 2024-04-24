#!/bin/bash
echo "TEST STARTED"
initDate=$(date +%s)

# im using 2 workers
npm run test

echo "TEST FINISHED"
finalDate=$(date +%s)

duration=$((finalDate - initDate))
echo "Duration of the test: $duration seconds"