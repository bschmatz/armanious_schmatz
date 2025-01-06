provider "aws" {
  region = var.aws_region
}

data "aws_instances" "existing" {
  filter {
    name   = "tag:Name"
    values = ["tasklist-react-app"]
  }

  filter {
    name   = "instance-state-name"
    values = ["running", "stopped"]
  }
}

resource "random_id" "suffix" {
  byte_length = 4
}

resource "aws_instance" "web" {
  count         = length(data.aws_instances.existing.ids) == 0 ? 1 : 0
  ami           = var.ami_id
  instance_type = "t2.micro"
  key_name      = var.key_name

  vpc_security_group_ids = [aws_security_group.web.id]

  tags = {
    Name = "tasklist-react-app"
  }
}

resource "null_resource" "instance_manager" {
  triggers = {
    instance_id = length(data.aws_instances.existing.ids) > 0 ? data.aws_instances.existing.ids[0] : aws_instance.web[0].id
  }

  provisioner "local-exec" {
    command = "aws ec2 start-instances --instance-ids ${self.triggers.instance_id}"
  }
}

resource "aws_security_group" "web" {
  name = "tasklist-app-sg-${random_id.suffix.hex}"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}