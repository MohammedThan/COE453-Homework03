const CONFIG_NAME = "task01";
const BELONG_NAME = "task01";
const YAML_FILE_PATH = "src/task01/task01.yaml";
const PROJECT_ID = "mohammed-coe453";
const GATEWAY_NAME = "task01";
const REGION = "us-central1";

const apiCommand = `gcloud api-gateway api-configs create ${CONFIG_NAME} --api=${BELONG_NAME} --openapi-spec=${YAML_FILE_PATH} --project=${PROJECT_ID}`;
const gatewayCommand = `gcloud api-gateway gateways create ${GATEWAY_NAME} --api=${BELONG_NAME} --api-config=${CONFIG_NAME} --location=${REGION} --project=${PROJECT_ID}`;

console.log(apiCommand, "\n");
console.log(gatewayCommand, "\n");
