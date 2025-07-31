# GitHub Pages Setup Instructions

## Issue: "Get Pages site failed"

The error message "Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions" indicates that while the GitHub Actions workflow file is correctly configured, the GitHub Pages feature itself is not properly enabled in the repository settings.

## Solution: Enable GitHub Pages in Repository Settings

To resolve this issue, you need to manually enable GitHub Pages in the repository settings and configure it to use GitHub Actions as the publishing source. Follow these steps:

1. Go to your repository on GitHub.com
2. Click on the "Settings" tab at the top of the repository page
3. In the left sidebar, scroll down to the "Code and automation" section and click on "Pages"
4. Under "Build and deployment", in the "Source" dropdown, select "GitHub Actions"

![GitHub Pages Settings](https://docs.github.com/assets/cb-28260/images/help/pages/source-dropdown.png)

5. Once you've selected "GitHub Actions", the settings will be saved automatically
6. GitHub will now use your existing workflow file (`.github/workflows/deploy.yml`) to build and deploy your site

## Verification

After enabling GitHub Pages in the repository settings:

1. Go to the "Actions" tab in your repository
2. You should see your workflow running (or you can manually trigger it by pushing a small change or using the "workflow_dispatch" event)
3. Once the workflow completes successfully, your site should be available at `https://ff-gardenfn.github.io/FF-GardenFn/`

## Additional Information

- The workflow file (`.github/workflows/deploy.yml`) has already been updated to use the latest versions of the GitHub Actions (v3)
- GitHub Pages requires that the repository has the feature enabled in the settings, even if you have a correctly configured workflow file
- This is a one-time setup that needs to be done in the GitHub web interface

If you continue to experience issues after following these steps, please check:

1. That your repository has the necessary permissions set for GitHub Actions
2. That there are no errors in the workflow execution (visible in the Actions tab)
3. That the repository is public or, if private, that GitHub Pages is enabled for private repositories in your plan