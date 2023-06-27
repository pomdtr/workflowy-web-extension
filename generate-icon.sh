#!/bin/bash

if ! command -v rsvg-convert &> /dev/null
then
    echo "rsvg-convert could not be found"
    exit 1
fi

sizes=(16 19 32 38 48 64 96 128 256 512)

for size in "${sizes[@]}"; do
    rsvg-convert -h "$size" ./src/workflowy.svg > "public/icons/$size.png"
done
