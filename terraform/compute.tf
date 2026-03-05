resource "aws_instance" "nginx_server" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name = "Portfolio"
  }
  key_name               = "portfolio-terraform-key"
  vpc_security_group_ids = [aws_security_group.portfolio_security_group.id]

  user_data = <<-EOF
    #!/bin/bash
    sudo apt update
    sudo apt install docker.io -y
    sudo systemctl start docker
    sudo systemctl enable docker
  EOF
}

resource "aws_eip" "public_ip" {
  instance = aws_instance.nginx_server.id
  domain   = "vpc"
} 