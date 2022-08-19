import fs from 'fs';
import path from 'path';

const rootPath = path.resolve(__dirname, `./`);

/**
 * 优化预加载依赖
 */
export function optimizeDeps() {
  return {
    name: 'optimizeDeps',
    configResolved: (config) => {
      const concat = config.optimizeDeps.include.concat(optimizeAntd());

      config.optimizeDeps.include = Array.from(new Set(concat));
    },
  };
}

/**
 * 优化 antd
 */
function optimizeAntd(): string[] {
  const includes: string[] = ['ant-design-vue/es'];
  const folders = fs.readdirSync(path.resolve(rootPath, `./node_modules/ant-design-vue/es`));
  folders.map((name) => {
    const folderName = path.resolve(rootPath, `./node_modules/ant-design-vue/es`, name);
    const stat = fs.lstatSync(folderName);
    if (stat.isDirectory()) {
      const styleFolder = path.resolve(folderName, 'style');
      if (fs.existsSync(styleFolder)) {
        const stat = fs.lstatSync(styleFolder);
        if (stat.isDirectory()) {
          includes.push(`ant-design-vue/es/${name}/style`);
        }
      }
    }
  });

  return includes;
}
