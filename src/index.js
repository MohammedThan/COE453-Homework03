const Names = ["add", "sub", "mul", "div"];

Names.forEach((Name) => {
  const RUNTIME_VERSION = "nodejs18";
  const EXPORTED_FUNCTION_NAME = Name;
  const PATH_TO_DIRECTORY = `src/functions/${Name}`;

  const command = `gcloud functions deploy ${Name} --runtime=${RUNTIME_VERSION} --trigger-http --entry-point=${EXPORTED_FUNCTION_NAME} --allow-unauthenticated --region=us-central1 --source=${PATH_TO_DIRECTORY}`;

  console.log(command, "\n");
});
