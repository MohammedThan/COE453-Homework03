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
