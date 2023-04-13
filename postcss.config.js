import autoprefixer from 'autoprefixer';
import stylelint from 'stylelint';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNesting from 'postcss-nesting';

export default {
    plugins: [
        postcssPresetEnv,
        autoprefixer,
        postcssNesting,
    ]
  }