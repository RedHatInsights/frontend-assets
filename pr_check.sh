#!/bin/bash

# --------------------------------------------
# Export vars for helper scripts to use
# --------------------------------------------
export WORKSPACE=${WORKSPACE:-$APP_ROOT} # if running in jenkins, use the build's workspace
export APP_ROOT=$(pwd)
export IMAGE="quay.io/cloudservices/frontend-assets"
export IMAGE_TAG=$(git rev-parse --short=7 HEAD)

set -exv

if [[ -z "$QUAY_USER" || -z "$QUAY_TOKEN" ]]; then
    echo "QUAY_USER and QUAY_TOKEN must be set"
    exit 1
fi

if [[ -z "$RH_REGISTRY_USER" || -z "$RH_REGISTRY_TOKEN" ]]; then
    echo "RH_REGISTRY_USER and RH_REGISTRY_TOKEN must be set"
    exit 1
fi

echo "LABEL quay.expires-after=3d" >> $APP_ROOT/Dockerfile

DOCKER_CONF="$PWD/.docker"
mkdir -p "$DOCKER_CONF"
docker --config="$DOCKER_CONF" login -u="$QUAY_USER" -p="$QUAY_TOKEN" quay.io
docker --config="$DOCKER_CONF" login -u="$RH_REGISTRY_USER" -p="$RH_REGISTRY_TOKEN" registry.redhat.io
docker --config="$DOCKER_CONF" build -t "${IMAGE}:${IMAGE_TAG}" $APP_ROOT -f $APP_ROOT/Dockerfile
docker --config="$DOCKER_CONF" push "${IMAGE}:${IMAGE_TAG}"

# Stubbed out for now
mkdir -p $WORKSPACE/artifacts
cat << EOF > $WORKSPACE/artifacts/junit-dummy.xml
<testsuite tests="1">
    <testcase classname="dummy" name="dummytest"/>
</testsuite>
EOF
