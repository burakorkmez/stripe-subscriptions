


// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;




const prismaClientSingleton = () => {
  return new PrismaClient()
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;

} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;


