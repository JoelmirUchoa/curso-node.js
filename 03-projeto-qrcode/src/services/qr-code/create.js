import prompt from 'prompt';
import handle from './handle.js';

import qrCodePrompt from '../../prompts/prompt-qrcode.js';

async function createQRCode() {
  prompt.get(qrCodePrompt, handle);
  
  prompt.start();
}

export default createQRCode;