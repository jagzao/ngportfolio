export function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  