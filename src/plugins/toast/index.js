import React from 'react';
import { render } from 'react-dom';
import Toast from './toast';

const content = document.createElement('div');
document.body.appendChild(content);
const container = render(<Toast />, content);

const toast = (opt) => {
  opt = opt || {};
  opt.msg && container.showToast(opt);
};

export default toast;