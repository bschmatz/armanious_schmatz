variable "aws_region" {
  default = "eu-central-1"
}

variable "ami_id" {
  description = "AMI ID for Ubuntu"
  default     = "ami-0a628e1e89aaedf80"
}

variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "tasklist-app-key"
}