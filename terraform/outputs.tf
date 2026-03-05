output "instance_public_ip" {
  value = aws_eip.public_ip.public_ip
}