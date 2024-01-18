output "cloud_front_distribution_domain_name" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "zone_name_servers" {
  value = aws_route53_zone.site_zone.name_servers
}
