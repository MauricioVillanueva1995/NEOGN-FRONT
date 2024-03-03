import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

export function imageminPlugin() {
  return {
    name: 'imagemin',
    async transform(code, id) {
      if (id.endsWith('.webp')) {
        const files = await imagemin.buffer(code, {
          plugins: [imageminWebp({ quality: 75 })],
        });
        return { code: files.toString('utf8'), map: null };
      }
    },
  };
}