#!/bin/bash

# Create directories
mkdir -p src/assets/images/logos
mkdir -p src/assets/images/features
mkdir -p src/assets/images/icons
mkdir -p src/assets/images/cases
mkdir -p src/assets/images/hero

echo "Downloading images from adapty.io..."

# Logo
curl -sL "https://adapty.io/assets/uploads/2023/12/adapty-logo-color.svg" -o "src/assets/images/logos/adapty-logo-color.svg"
echo "✓ Logo downloaded"

# Hero images
curl -sL "https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp" -o "src/assets/images/hero/adapty-overview.webp"
curl -sL "https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp" -o "src/assets/images/hero/paywall-demo.webp"
echo "✓ Hero images downloaded"

# Company logos (Trusted by)
curl -sL "https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg" -o "src/assets/images/logos/feeld.svg"
curl -sL "https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg" -o "src/assets/images/logos/bumble.svg"
curl -sL "https://adapty.io/assets/uploads/2025/02/weewoo.svg" -o "src/assets/images/logos/weewoo.svg"
curl -sL "https://adapty.io/assets/uploads/2025/02/AppNation.webp" -o "src/assets/images/logos/appnation.webp"
curl -sL "https://adapty.io/assets/uploads/2025/02/almus.svg" -o "src/assets/images/logos/almus.svg"
curl -sL "https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg" -o "src/assets/images/logos/impala-studios.svg"
curl -sL "https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg" -o "src/assets/images/logos/hubx.svg"
echo "✓ Company logos downloaded"

# Feature cards
curl -sL "https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp" -o "src/assets/images/features/sdk-install.webp"
curl -sL "https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp" -o "src/assets/images/features/charts.webp"
curl -sL "https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp" -o "src/assets/images/features/paywalls.webp"
echo "✓ Feature images downloaded"

# Icons
curl -sL "https://adapty.io/assets/uploads/2025/02/icon-arrow-acute-angle-pink.svg" -o "src/assets/images/icons/arrow-pink.svg"
curl -sL "https://adapty.io/assets/uploads/2024/08/quotes-white.svg" -o "src/assets/images/icons/quotes-white.svg"
curl -sL "https://adapty.io/assets/uploads/2024/08/arrow-right-small-accent.svg" -o "src/assets/images/icons/arrow-right.svg"
curl -sL "https://adapty.io/assets/uploads/2024/03/icon-20x20-sdk.svg" -o "src/assets/images/icons/sdk.svg"
echo "✓ Icons downloaded"

# Favicon
curl -sL "https://adapty.io/assets/uploads/2023/12/cropped-adapty-icon-512x512-1-32x32.png" -o "public/favicon.png"
echo "✓ Favicon downloaded"

echo ""
echo "All images downloaded!"
