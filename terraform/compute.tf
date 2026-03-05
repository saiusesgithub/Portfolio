resource "aws_instance" "nginx_server" {
  ami           = "ami-0fb67e6212e8ff822"
  instance_type = "t3.micro"

  tags = {
    Name = "Portfolio"
  }
  key_name = "portfolio-terraform-key"
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