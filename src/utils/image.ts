import { API_BASE_PATH } from '../config/api';

export class ImageUtils {
  static getURI(path: string) {
    return `${API_BASE_PATH}/uploads/${path}`;
  }
}
