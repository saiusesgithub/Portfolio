output "instance_public_ip" {
  value = aws_eip.public_ip.public_ip
}

resource "local_file" "ansible_inventory" {

  filename = "../ansible/inventory"

  content = <<EOF
[web]
server ansible_host=${aws_eip.public_ip.public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=portfolio-terraform-key.pem
EOF
}