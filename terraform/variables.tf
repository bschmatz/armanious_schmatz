variable "aws_region" {
  default = "eu-central-1"
}

variable "ami_id" {
  description = "AMI ID for Ubuntu"
  default     = "ami-0e54671bdf3c8ed8d"
}

variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "tasklist-app-key"
}