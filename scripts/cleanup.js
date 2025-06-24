/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

/**
 * Removes all generated TSX icon files from the src directory
 * @param {string} iconsBase - The base directory containing icons
 * @returns {Promise<void>}
 */
async function cleanupGeneratedIcons(iconsBase) {
  try {
    // Find all TSX files in the src directory
    const tsxFiles = await glob('**/*.tsx', { cwd: iconsBase, absolute: true });

    // Filter out files we want to keep (demo.tsx, entry.ts, etc.)
    const filesToDelete = tsxFiles.filter((file) => {
      const basename = path.basename(file);
      // Keep demo.tsx and any other non-icon files
      return !['demo.tsx', 'entry.ts'].includes(basename);
    });

    // Delete the generated icon files
    const deletePromises = filesToDelete.map((file) => {
      return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
          if (err && err.code !== 'ENOENT') {
            // Ignore "file not found" errors, but report other errors
            console.error(`Error deleting ${file}:`, err);
            reject(err);
          } else {
            if (!err) {
              console.log(`Deleted: ${file}`);
            }
            resolve();
          }
        });
      });
    });

    await Promise.all(deletePromises);
    console.log(`Cleanup complete: ${filesToDelete.length} TSX files removed`);
  } catch (error) {
    console.error('Error during cleanup:', error);
    throw error;
  }
}

module.exports = {
  cleanupGeneratedIcons,
};
