terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }

    local = {
      source = "hashicorp/local"
    }
  }

  backend "s3" {
    bucket         = "saisrujan-portfolio-terraform-remote-backend-bucket"
    key            = "portfolio/terraform.tfstate"
    region         = "ap-south-2"
    dynamodb_table = "portfolio-terraform-state-locking"
    encrypt        = true
  }
}

provider "aws" {
  region = var.region
}