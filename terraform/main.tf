provider "aws" {
  region = "eu-central-1"  # Frankfurt
}

# EC2 Instance
resource "aws_instance" "app_server" {
  ami           = "ami-0669b163befffbdfc"  # Amazon Linux 2023 AMI in eu-central-1
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer.key_name

  vpc_security_group_ids = [aws_security_group.allow_web.id]
  
  tags = {
    Name = "tasklist-app"
  }

  user_data = <<-EOF
              #!/bin/bash
              dnf update -y
              dnf install -y nodejs npm git python3-pip
              # Create your user
              useradd -m -s /bin/bash straumandi
              echo "straumandi ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/straumandi
              mkdir -p /home/straumandi/.ssh
              chown -R straumandi:straumandi /home/straumandi/.ssh
              chmod 700 /home/straumandi/.ssh
              # App directory setup
              mkdir -p /var/www/tasklist
              chown straumandi:straumandi /var/www/tasklist
              EOF
}

# Security Group
resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow Web inbound traffic"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "App Port"
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_web"
  }
}

# SSH Key
resource "aws_key_pair" "deployer" {
  key_name   = "tasklist-key"
  public_key = file("~/.ssh/tasklist_deploy_key.pub")  # my local public key
}

# Output the public IP
output "public_ip" {
  value = aws_instance.app_server.public_ip
}