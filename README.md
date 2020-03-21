configure ci/cd with github actions

create workflow file with steps

# - uses: actions/checkout@v2

#

# - name: Setup gcloud environment

# uses: GoogleCloudPlatform/github-actions@0.1.2

# with:

# # The service account email which will be used for authentication.

# service_account_email: \${{ secrets.GCP_SA_EMAIL }}

# # The service account key which will be used for authentication.

# service_account_key: \${{ secrets.GCP_SA_KEY }}

#

# - name: Deploy checkRelease

# run: gcloud functions deploy checkRelease --project \${{ secrets.GCP_PROJECT_ID }} --runtime nodejs8 --trigger-http --allow-unauthenticated

for generate GCP_SA_EMAIL, GCP_SA_KEY and GCP_PROJECT_ID

create key file with

# gcloud iam service-accounts keys create key.json --iam-account=iamaccount@iamaccount.com

iamaccount@iamaccount.com is a account with Editor rule

generate base64 file for github secrets with

# cat key.json | base64 > key.base64

add variable GCP_SA_EMAIL with email used for generate key
add variable GCP_SA_KEY with key.base64 file content
add variable GCP_PROJECT_ID with project_id key in key.json file content
