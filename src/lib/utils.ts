import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}






// mongodb+srv://jasonprogrammer91:XZsuQMuHhnlyPu3x@cluster0.zjyqz.mongodb.net/stripe_db?retryWrites=true&w=majority&appName=Cluster0