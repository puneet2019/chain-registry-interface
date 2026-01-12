// Telescope configuration for generating TypeScript bindings similar to cosmjs-types
// This script configures telescope to generate TypeScript code from proto bundles

const { join } = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// Function to run telescope on a specific bundle
function generateFromBundle(bundlePath, outputPath) {
  console.log(`Generating TypeScript bindings from: ${bundlePath}`);
  console.log(`Output to: ${outputPath}`);
  
  // Ensure output directory exists
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  // Run telescope command
  const cmd = `npx @cosmology/telescope generate --proto_dirs=${join(bundlePath, 'proto')} --out=${outputPath}`;
  console.log(`Executing: ${cmd}`);
  
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Successfully generated bindings for: ${bundlePath}`);
  } catch (error) {
    console.error(`Failed to generate bindings for: ${bundlePath}`, error.message);
    throw error;
  }
}

// Function to process all bundles in a directory
function processBundles(bundlesDir, outputBaseDir) {
  if (!fs.existsSync(bundlesDir)) {
    console.error(`Bundles directory does not exist: ${bundlesDir}`);
    process.exit(1);
  }

  const bundleEntries = fs.readdirSync(bundlesDir).filter(entry => {
    const fullPath = join(bundlesDir, entry);
    return fs.statSync(fullPath).isDirectory();
  });

  if (bundleEntries.length === 0) {
    console.log(`No bundles found in: ${bundlesDir}`);
    return;
  }

  console.log(`Found ${bundleEntries.length} bundles to process:`);
  bundleEntries.forEach(entry => console.log(`  - ${entry}`));

  for (const bundleName of bundleEntries) {
    const bundlePath = join(bundlesDir, bundleName);
    const protoDir = join(bundlePath, 'proto');
    
    if (fs.existsSync(protoDir)) {
      const bundleOutputPath = join(outputBaseDir, bundleName);
      generateFromBundle(bundlePath, bundleOutputPath);
    } else {
      console.log(`Skipping ${bundleName}, no proto directory found`);
    }
  }
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node generate-telescope-bindings.cjs <bundles-directory> <output-directory>');
    console.log('Example: node generate-telescope-bindings.cjs ../proto-bundles-ts-core-latest ./src');
    process.exit(1);
  }
  
  const bundlesDir = args[0];
  const outputDir = args[1];
  
  console.log(`Processing proto bundles from: ${bundlesDir}`);
  console.log(`Generating TypeScript bindings to: ${outputDir}`);
  
  processBundles(bundlesDir, outputDir);
  
  console.log('All TypeScript bindings generated successfully!');
}

// Run main function
main().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});