#!/bin/sh

echo "==================================="
echo "STARTING SONAR CONFIGURATION"
echo "==================================="

# remove any sonarqube previous configuration
docker stop sonarqubeStudy
docker rm sonarqubeStudy

# Install docker
docker pull sonarqube

# Run Docker
docker run -d --name sonarqubeStudy -p 9001:9000 sonarqube
sleep 100
curl -u admin:admin -X POST "http://localhost:9001/api/users/change_password?login=admin&previousPassword=admin&password=manoel"

echo "==================================="
echo "FINISHED SONAR CONFIGURATION"
echo "==================================="
echo "Access by: http://localhost:9001"
echo "==================================="