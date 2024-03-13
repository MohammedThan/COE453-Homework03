const functionNames = ["add", "sub", "mul", "div"];
const region = "us-central1";
const projectId = "mohammed-coe453";
const repository = "task02";

functionNames.forEach((functionName) => {
  const imageAndTag = `${functionName}:1.0`;

  const buildCommand = `docker build -t ${imageAndTag} src/task02/containers/${functionName}`;
  const runCommand = `docker run -d -p 3000:8080  ${imageAndTag}`;

  const tagCommand = `docker tag ${imageAndTag} ${region}-docker.pkg.dev/${projectId}/${repository}/${imageAndTag}`;
  const pushCommand = `docker push ${region}-docker.pkg.dev/${projectId}/${repository}/${imageAndTag}`;

  const deployCommand = `gcloud run deploy ${functionName} --image=${region}-docker.pkg.dev/${projectId}/${repository}/${imageAndTag} --platform=managed --region=${region}`;

  console.log("buildCommand: ", buildCommand);
  console.log("runCommand: ", runCommand);
  console.log("tagCommand: ", tagCommand);
  console.log("pushCommand: ", pushCommand);
  console.log("deployCommand: ", deployCommand, "\n");
});

const CONFIG_NAME = "task02";
const BELONG_NAME = "task02";
const YAML_FILE_PATH = "src/task02/apiGateway/task02.yaml";
const PROJECT_ID = "mohammed-coe453";
const GATEWAY_NAME = "task02";
const REGION = "us-central1";
const apiCommand = `gcloud api-gateway api-configs create ${CONFIG_NAME} --api=${BELONG_NAME} --openapi-spec=${YAML_FILE_PATH} --project=${PROJECT_ID}`;
const gatewayCommand = `gcloud api-gateway gateways create ${GATEWAY_NAME} --api=${BELONG_NAME} --api-config=${CONFIG_NAME} --location=${REGION} --project=${PROJECT_ID}`;

console.log(apiCommand, "\n");
console.log(gatewayCommand, "\n");
