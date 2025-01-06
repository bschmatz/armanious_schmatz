output "instance_ip" {
  value = length(data.aws_instances.existing.ids) > 0 ? data.aws_instances.existing.public_ips[0] : aws_instance.web[0].public_ip
}