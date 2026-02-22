terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# -----------------------------------------------------------------------------
# IAM Role for Amplify
# -----------------------------------------------------------------------------

data "aws_iam_policy" "amplify_admin" {
  name = "AdministratorAccess-Amplify"
}

resource "aws_iam_role" "amplify" {
  name = "${var.app_name}-amplify-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "amplify.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "amplify" {
  role       = aws_iam_role.amplify.name
  policy_arn = data.aws_iam_policy.amplify_admin.arn
}

# -----------------------------------------------------------------------------
# Amplify App
# -----------------------------------------------------------------------------

resource "aws_amplify_app" "this" {
  name       = var.app_name
  repository = var.github_repository
  platform   = "WEB_COMPUTE"

  access_token = var.github_access_token
  iam_service_role_arn = aws_iam_role.amplify.arn

  build_spec = file("${path.module}/../amplify.yml")

  environment_variables = {
    _CUSTOM_IMAGE = "amplify:al2023"
  }
}

# -----------------------------------------------------------------------------
# Branch (main → production)
# -----------------------------------------------------------------------------

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.this.id
  branch_name = "main"

  framework         = "Next.js - SSR"
  stage             = "PRODUCTION"
  enable_auto_build = true
}
