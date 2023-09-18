import CryptoJS from 'crypto-js'

const secretKey: string = process.env.REACT_APP_SECRET_KEY;

export const encrypt = (text: string) => {
    if (!text) return '';
    return CryptoJS.AES.encrypt(JSON.stringify(text), secretKey).toString();
}

export const decrypt = (text: string) => {
    if (!text) return '';

    try {
        const bytes = CryptoJS.AES.decrypt(text, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.log('Decryption error', error);
        return '';
    }
}
