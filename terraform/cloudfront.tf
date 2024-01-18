locals {
  s3_origin_id = "s3-origin-${var.site_domain}"
}

resource "aws_cloudfront_distribution" "site" {
  aliases = [var.site_domain]

  origin {
    connection_attempts      = 3
    connection_timeout       = 10
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = var.site_domain
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["JP"]
    }
  }

  price_class = "PriceClass_200"

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.acm_cert.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }
}

resource "aws_cloudfront_origin_access_control" "main" {
  name                              = "s3-access-control-${var.site_domain}}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
